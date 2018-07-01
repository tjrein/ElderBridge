ElderBridge
======

Purpose
------
ElderBridge is a web application designed to mitigate feelings of loneliness and social isolation among older adults by allowing users to schedule routine one-on-one social interactions. Since this application has been designed for older adults, it features several design considerations to prioritize ease of use for that demographic, specifically large text size, descriptive links, and limited user input.  

Implementation Details
------
This application was built with React. [React Big Calendar](https://intljusticemission.github.io/react-big-calendar/examples/index.html) and [Semantic UI React](https://react.semantic-ui.com/introduction) are its primary dependencies. Currently, there is no database hooked into the application. It utilizes Window.sessionStorage to persist data.

Installation and Usage Instructions
------
1. Make sure you have [npm and Node.js installed](https://nodejs.org/en/)
2. In the project directory, run `npm install`. This will install all the dependencies in `package.json` and `package-lock.json`
3. To start the application, run `npm start`. The application will be available at `localhost:3000`
4. To login, supply a valid email and any password 

Control Flow
------
* Schedule Appointments
  * Click the `Schedule an an Appointment` button
  * On the calendar, click an open timeslot to schedule the appointment
  * Confirm the appointment from the modal 

* View Appointments
  * Click the 'View Appintments` button
  * Click on an appointment to get its details.
  * From the modal, Click on `Cancel appointment` to remove the appointment from the calendar, or `Done` to close the modal.

