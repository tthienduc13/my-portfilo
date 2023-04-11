import React from "react";
import "../Notification/Notification.scss";
function Notification() {
  return (
    <>
      <div className="toast">
        <div className="toast__icon">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">success</h3>
          <p class="toast__msg">Your message has been delivered.</p>
        </div>
        <div class="toast__close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </>
  );
}

export default Notification;
