import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import DefaultConfirm from "./DefaultConfirm";

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

    this.modalHandler = this.modalHandler.bind(this);
  }

  modalHandler = (result, content) => {
    this.setState({ openModal: result, modalContent: content });
  }

  appointmentsCallback = result =>  {
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
    window.alert("Appointment scheduled for " + moment(slotInfo.start).format("dddd, MMMM Do YYYY, h:mm:ss A"));
  }

  render() {
    return (
      <div>
        <DefaultConfirm open={this.state.openModal} content={this.state.modalContent} callback={this.appointmentsCallback} />
        <BigCalendar
          selectable
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
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
