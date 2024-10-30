import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../Styles/ComponentStyles.module.css';

const BookDetails = ({ bookId, onBack }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${bookId}`)
            .then(response => setBook(response.data))
            .catch(error => console.error("Error fetching book details:", error));
    }, [bookId]);

    if (!book) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Book Details</h2>
            <div className={styles.details}>
                <p><span className={styles.detailLabel}>Title:</span> <span className={styles.detailValue}>{book.title}</span></p>
                <p><span className={styles.detailLabel}>Author:</span> <span className={styles.detailValue}>{book.author}</span></p>
                <p><span className={styles.detailLabel}>Published Year:</span> <span className={styles.detailValue}>{book.published_year}</span></p>
                <p><span className={styles.detailLabel}>Genre:</span> <span className={styles.detailValue}>{book.genre}</span></p>
                <p><span className={styles.detailLabel}>Description:</span> <span className={styles.detailValue}>{book.description}</span></p>
                <button className={styles.actionButton} onClick={onBack}>Back to List</button>
            </div>
        </div>
    );
};

export default BookDetails;
