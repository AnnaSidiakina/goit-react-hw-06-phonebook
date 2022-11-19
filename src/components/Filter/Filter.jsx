import React from 'react';
import styles from './Filter.module.css';
import { filterContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        Filter
        <input
          className={styles.input}
          type="text"
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
