import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import popTransition from "../transitions/pop.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.listContacts}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition
        key={id}
        timeout={250}
        unmountOnExit
        classNames={popTransition}
      >
        <li key={id} className={styles.contacts}>
          <span className={styles.nameField}>{name}</span>
          <span className={styles.phoneField}>{number}</span>
          <button
            type="button"
            className={styles.deleteBtn}
            value={id}
            onClick={onDeleteContact}
          >
            X
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;
