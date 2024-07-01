import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ Logout }) => {

    return (
        <div style={styles.navbar}>
            <div style={styles.innerContainer}>
                <div style={styles.logo}>
                    <h1>Blog</h1>
                </div>
                <div style={styles.links}>
                    <ul style={styles.ul}>
                        <li style={styles.li}><Link style={styles.link} to='/'>AllBlogs</Link></li>
                        <li style={styles.li}><Link style={styles.link} to='/myblogs'>MyBlogs</Link></li>
                        <li style={styles.li}><Link style={styles.link} to='/addblog'>AddBlog</Link></li>
                        <li style={styles.logoutLi} onClick={Logout}>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        marginBottom: '20px',
    },
    innerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    logo: {
        flex: '1',
    },
    links: {
        flex: '2',
        textAlign: 'right',
    },
    ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    li: {
        display: 'inline-block',
        margin: '0 10px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        transition: 'color 0.3s ease',
    },
    logoutLi: {
        display: 'inline-block',
        margin: '0 10px',
        cursor: 'pointer',
        textDecoration: 'underline',
        color: '#fff',
    },
};

export default Navbar;
