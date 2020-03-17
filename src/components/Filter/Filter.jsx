import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import popTransition from "../transitions/pop.module.css";

const Filter = ({ contacts, value, onChangeFilter }) =>
  contacts.length > 2 && (
    <CSSTransition in={true} timeout={250} unmountOnExit classNames={popTransition}>
    <form className={styles.filterForm}>
      <label>Find contact by name</label>
      <input
        type="text"
        className={styles.filterContact}
        value={value}
        onChange={onChangeFilter}
      />
    </form>
    </CSSTransition>
  );

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default Filter;
