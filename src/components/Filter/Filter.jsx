import React from 'react';
import styles from './Filter.module.css';
import { filterContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter.value);
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        Filter
        <input
          value={filter}
          className={styles.input}
          type="text"
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
