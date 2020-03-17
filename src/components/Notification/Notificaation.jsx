import React from "react";
import styles from "./Notification.module.css";

const Notification = () => (
  <div className={styles.notificationContainer}>
    <p className={styles.notificationMessage}>This contact already exists!</p>
  </div>
);

export default Notification;
