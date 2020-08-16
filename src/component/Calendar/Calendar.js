import React, { useEffect } from "react";
import "./Calendar.scss";

function Calendar() {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  });

  return (
    <div className="zg-calendar-container">
      <h2 className="zg-calendar-header">Schedule a Meeting</h2>
      <div
        className="calendly-inline-widget"
        data-url={"https://calendly.com/zakgraham"}
      ></div>
    </div>
  );
}

export default Calendar;
