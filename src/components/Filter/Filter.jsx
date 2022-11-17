import React from 'react';
import styles from './Filter.module.css';
import { filterContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const myFilter = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        Filter
        <input
          className={styles.input}
          type="text"
          value={myFilter}
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
