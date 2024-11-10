import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import styles from '../Styles/ComponentStyles.module.css';

const BookList = ({ onEdit, onView }) => {
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/books')
    //         .then(response => setBooks(response.data))
    //         .catch(error => console.error("Error fetching books:", error));
    // }, []);

    // const handleDelete = async (id) => {
    //     if (window.confirm('Are you sure you want to delete this book?')) {
    //         try {
    //             axios.delete(`http://localhost:8000/api/books/${id}`)
    //             .then(() => setBooks(books.filter(book => book.id !== id)))
    //         }
    //         catch (error) {
    //             console.error("Error deleting book:", error);
    //         }
    //     }
        
    // };

    // const handleDelete = (id) => {
    //     axios.delete(`http://localhost:8000/api/books/${id}`)
    //         .then(() => setBooks(books.filter(book => book.id !== id)))
    //         .catch(error => console.error("Error deleting book:", error));
    // };

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/books')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setBooks(data))
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                const response = await fetch(`http://localhost:8000/api/books/${id}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error("Error deleting book");
                }
                setBooks(books.filter(book => book.id !== id));
            } catch (error) {
                console.error("Error deleting book:", error);
            }
        }
    };


    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Book List</h2>
            <ul className={styles.bookList}>
                {books.map(book => (
                    <li key={book.id} className={styles.bookItem}>
                        <span><strong>{book.title}</strong> by {book.author}</span>
                        <div className={styles.actions}>
                            <button className={styles.actionButton} onClick={() => onView(book.id)}>View</button>
                            <button className={styles.actionButton} onClick={() => onEdit(book.id)}>Edit</button>
                            <button className={`${styles.actionButton} ${styles.deleteButton}`} onClick={() => handleDelete(book.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
