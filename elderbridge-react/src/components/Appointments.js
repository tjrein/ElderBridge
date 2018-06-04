import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import DefaultConfirm from "./DefaultConfirm";
import ModalExampleShorthand from "./modals/ModalExampleShorthand";

import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Appointments extends Component {

  constructor(props) {
    super(props);

    const cached_events = sessionStorage.getItem("events");
    let events = cached_events ? JSON.parse(cached_events) : [];

    events.forEach(item => {
      item.start = new Date(item.start);
      item.end = new Date(item.end);
    });

    this.state = {
      events: events,
      openModal: false,
      modalContent: '',
      newTime: null
    }

    if (this.props.view === "week") {
      this.cancelCallback = this.closeModal;
      this.confirmCallback = this.scheduleAppointment;
    } else {
      this.cancelCallback = this.cancelAppointment;
      this.confirmCallback - this.closeModal;
    }

    this.modalHandler = this.modalHandler.bind(this);
  }

  modalHandler = (result, content) => {
    this.setState({ openModal: result, modalContent: content });
  }

  closeModal = () => this.modalHandler(false);

  cancelAppointment = result => {
    this.modalHandler(false);
    let scheduled_events = this.state.events;
    let start_times = this.state.events.map(e => e.start);
    let date = new Date(moment(this.state.newTime));

    for (let i = 0; i < scheduled_events.length; i++) {
        if (scheduled_events[i] && date.getTime() === scheduled_events[i].start.getTime()) {
          scheduled_events.splice(i, 1);
        }
    }
  }

  scheduleAppointment = result =>  {
    this.modalHandler(false);

    if (result) {
      let scheduled_events = this.state.events;

      scheduled_events.push({
        start: new Date(moment(this.state.newTime)),
        end: new Date(moment(this.state.newTime).add(1, "hours")),
        title: "Appointment"
      });

      this.setState(scheduled_events);
      sessionStorage.setItem('events', JSON.stringify(scheduled_events));
      this.props.history.push("/dashboard");
    }

    this.setState({newTime: null});
  }


  onSlotChange(slotInfo) {
    const formatted_time = moment(slotInfo.start).format("dddd, MMMM Do YYYY, h:mm:ss A");
    this.modalHandler(true, formatted_time);
    this.setState({newTime: slotInfo.start});
  }

  onEventClick(slotInfo) {
    const formatted_time = moment(slotInfo.start).format("dddd, MMMM Do YYYY, h:mm:ss A");
    this.modalHandler(true, formatted_time);
    this.setState({newTime: slotInfo.start});
  }

 //<DefaultConfirm open={false} content={this.state.modalContent} callback={this.scheduleCallback} />

  render() {
    return (
      <div>
        <ModalExampleShorthand view={this.props.view} open={this.state.openModal} cancel={this.cancelCallback} confirm={this.confirmCallback} />
        <BigCalendar
          selectable
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={slotInfo => this.onSlotChange(slotInfo) }
          defaultDate={new Date()}
          defaultView={this.props.view}
          views={[this.props.view]}
          events={this.state.events}
          style={{ height: "100vh" }}
          step={30}
          timeslots={1}
        />
      </div>
    );
  }
}

export default Appointments;
