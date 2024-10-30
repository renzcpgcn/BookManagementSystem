import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookList from '../Components/BookList';
import styles from '../Styles/Style.module.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Book Management System</h1>
            <button className={styles.button} onClick={() => navigate('/add')}>Add New Book</button>
            <BookList
                onEdit={(id) => navigate(`/edit/${id}`)}
                onView={(id) => navigate(`/view/${id}`)}
            />
        </div>
    );
};

export default Home;
