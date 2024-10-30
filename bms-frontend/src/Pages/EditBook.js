import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../Components/BookForm';
import styles from '../Styles/Style.module.css';

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Edit Book</h1>
            <BookForm bookId={id} onSave={() => navigate('/')} buttonClass={styles.button} />
        </div>
    );
};

export default EditBook;
