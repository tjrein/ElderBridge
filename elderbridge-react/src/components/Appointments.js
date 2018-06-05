import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import ModalExampleShorthand from "./modals/ModalExampleShorthand";
import WarningMessage from "./messages/WarningMessage";
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
      modalHeader: '',
      newTime: null,
      displayMessage: false,
      messageHeader: "Appointment has already passed!",
      messageContent: "Please schedule an appointment for a time in the future."
    }

    if (this.props.view === "week") {
      this.cancelCallback = this.closeModal;
      this.confirmCallback = this.scheduleAppointment;
      this.state.modalHeader = "Schedule appointment for the following date?";
    } else {
      this.cancelCallback = this.cancelAppointment;
      this.confirmCallback = this.closeModal;
      this.state.modalHeader = "Appointment scheduled for the following date";
    }

  }

  modalHandler = (result, content) => {
    this.setState({ openModal: result, modalContent: content });
  }

  closeModal = () => this.modalHandler(false);
  hideError = () => this.setState({displayMessage: false});

  cancelAppointment = result => {
    this.modalHandler(false);

    let scheduled_events = this.state.events;
    let date = new Date(moment(this.state.newTime));

    for (let i = 0; i < scheduled_events.length; i++) {
        if (scheduled_events[i] && date.getTime() === scheduled_events[i].start.getTime()) {
          scheduled_events.splice(i, 1);
        }
    }

    this.eventHandler(scheduled_events);

    this.props.history.push({
      pathname: "/dashboard",
      state: {
        messageVisible: true,
        content: moment(date.getTime()).format("dddd, MMMM Do YYYY, h:mm:ss A"),
        header: "Appointment canceled!",
        positive: false
      }
    });
  }

  eventHandler = newEvents => {
    this.setState(newEvents)
    if (newEvents.length) {
      sessionStorage.setItem('events', JSON.stringify(newEvents));
    } else {
      sessionStorage.clear();
    }
  }

  scheduleAppointment = result =>  {
    this.modalHandler(false);

    if (result) {
      let scheduled_events = this.state.events;
      let newEvent = {
        start: new Date(moment(this.state.newTime)),
        end: new Date(moment(this.state.newTime).add(1, "hours")),
        title: "Appointment"
      };

      scheduled_events.push(newEvent);
      this.eventHandler(scheduled_events);

      this.props.history.push({
        pathname: "/dashboard",
        state: {
          messageVisible: true,
          content: moment(newEvent.start).format("dddd, MMMM Do YYYY, h:mm:ss A"),
          header: "Appointment confirmed!",
          positive: true
        }
      });
    }

    this.setState({newTime: null});
  }

  onSlotClick(slotInfo) {
    if (this.props.view === "month") return;

    if (Date.now() >= new Date(moment(slotInfo.start)).getTime()) {
      return this.setState({displayMessage: true});
    }

    const formatted_time = moment(slotInfo.start).format("dddd, MMMM Do YYYY, h:mm:ss A");
    this.modalHandler(true, formatted_time);
    this.setState({newTime: slotInfo.start});
  }

  onEventClick(slotInfo) {
    if (this.props.view === "week") return;
    const formatted_time = moment(slotInfo.start).format("dddd, MMMM Do YYYY, h:mm:ss A");
    this.modalHandler(true, formatted_time);
    this.setState({newTime: slotInfo.start});
  }

  render() {
    const { view } = this.props;
    const {events, openModal, modalHeader, modalContent, displayMessage, messageHeader, messageContent } = this.state


    return (
      <div>
        { displayMessage && <WarningMessage
                              list={[]}
                              selfDestruct={true}
                              className="warning"
                              header={messageHeader}
                              content={messageContent}
                              callback={this.hideError}
                            />}
        <ModalExampleShorthand
          view={view}
          open={openModal}
          cancel={this.cancelCallback}
          confirm={this.confirmCallback}
          header = {modalHeader}
          content={modalContent}
        />
        <BigCalendar
          selectable
          onSelectEvent={slotInfo => this.onEventClick(slotInfo)}
          onSelectSlot={slotInfo => this.onSlotClick(slotInfo) }
          defaultDate={new Date()}
          defaultView={view}
          views={[view]}
          events={events}
          style={{ height: "100vh" }}
          step={30}
          timeslots={1}
        />
      </div>
    );
  }
}

export default Appointments;
