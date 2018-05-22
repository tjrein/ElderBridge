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
      let scheduled_events = this.state.events;

      scheduled_events.push({
        start: new Date(moment(slotInfo.start)),
        end: new Date(moment(slotInfo.start).add(1, "hours")),
        title: "Appointment"
      });

      this.setState(scheduled_events);
      sessionStorage.setItem('events', JSON.stringify(scheduled_events));
  }

  onEventClick(event) {
    console.log(event) //Shows the event details provided while booking
  }

  render() {
    return (
        <BigCalendar
          selectable
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
    );
  }
}

export default Appointments;
