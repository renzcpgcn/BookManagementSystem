import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Styles/ComponentStyles.module.css';

const BookForm = ({ bookId, onSave }) => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        published_year: '',
        genre: '',
        description: ''
    });

    useEffect(() => {
        if (bookId) {
            axios.get(`http://localhost:8000/api/books/${bookId}`)
                .then(response => setBookData(response.data))
                .catch(error => console.error("Error fetching book:", error));
        }
    }, [bookId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = bookId
            ? axios.put(`http://localhost:8000/api/books/${bookId}`, bookData)
            : axios.post('http://localhost:8000/api/books', bookData);

        request.then(() => onSave()).catch(error => console.error("Error saving book:", error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>{bookId ? "Edit Book" : "Add New Book"}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input name="title" placeholder="Title" value={bookData.title} onChange={handleChange} required className={styles.inputField} />
                <input name="author" placeholder="Author" value={bookData.author} onChange={handleChange} required className={styles.inputField} />
                <input name="published_year" placeholder="Year" value={bookData.published_year} onChange={handleChange} required className={styles.inputField} />
                <input name="genre" placeholder="Genre" value={bookData.genre} onChange={handleChange} required className={styles.inputField} />
                <textarea name="description" placeholder="Description" value={bookData.description} onChange={handleChange} className={styles.textArea}></textarea>
                <button type="submit" className={styles.saveButton}>Save</button>
            </form>
        </div>
    );
};

export default BookForm;
