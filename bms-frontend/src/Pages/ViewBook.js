import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookDetails from '../Components/BookDetails';
import styles from '../Styles/Style.module.css';

const ViewBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Book Details</h1>
            <BookDetails bookId={id} onBack={() => navigate('/')} />
        </div>
    );
};

export default ViewBook;
