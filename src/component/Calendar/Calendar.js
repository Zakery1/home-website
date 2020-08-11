import React, { useEffect } from "react";

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
    <div
      className="calendly-inline-widget"
      data-url={"https://calendly.com/zakgraham"}
      style={{ minWidth: "320px", height: "630px" }}
    ></div>
  );
}

export default Calendar;
