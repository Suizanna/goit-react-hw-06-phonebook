import React from 'react';
import s from './PhonebookFilter.module.css';

import { connect } from "react-redux";
import {changeFilter } from "../../redux/contacts/contacts-actions";
 
 
const PhonebookFilter = ({ onChange, filterValue }) => (
  
  <>
    <label className={s.label}>
      <p>Filter: </p>
      <input
        className={s.input}
        name="filter"
        // onInput={onSetFilter}
        onChange={onChange}
        type="text"
        value={filterValue}
      />
    </label>
  </>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookFilter);

// export default PhonebookFilter;

