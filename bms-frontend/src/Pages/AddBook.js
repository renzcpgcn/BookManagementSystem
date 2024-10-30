import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../Components/BookForm';
import styles from '../Styles/Style.module.css';

const AddBook = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Add New Book</h1>
            <BookForm onSave={() => navigate('/')} buttonClass={styles.button} />
        </div>
    );
};

export default AddBook;
