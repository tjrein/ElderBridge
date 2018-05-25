import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

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
      events: events
    }

  }

  onSlotChange(slotInfo) {
    const formatted_time = moment(slotInfo.start).format("dddd, MMMM Do YYYY, h:mm:ss A");

    if (window.confirm("Schedule an appointment for " + formatted_time + "?")) {
      let scheduled_events = this.state.events;

      scheduled_events.push({
        start: new Date(moment(slotInfo.start)),
        end: new Date(moment(slotInfo.start).add(1, "hours")),
        title: "Appointment"
      });

      this.setState(scheduled_events);
      sessionStorage.setItem('events', JSON.stringify(scheduled_events));
      this.props.history.push("/dashboard");
    }
  }

  onEventClick(slotInfo) {
    window.alert("Appointment scheduled for " + moment(slotInfo.start).format("dddd, MMMM Do YYYY, h:mm:ss A"));
  }

  render() {
    return (
        <BigCalendar
          selectable
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
          defaultDate={new Date()}
          defaultView={this.props.view}
          events={this.state.events}
          style={{ height: "100vh" }}
        />
    );
  }
}

export default Appointments;
