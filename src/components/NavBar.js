import styles from './NavBar.module.css'

import {Link} from 'react-router-dom'

import { useState } from 'react';

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };

    return(
    <nav className={styles.NavBar}>
        <div>
            <Link to='/'><h1>Icaro.</h1></Link>
        </div>
        <button className={styles.hamburgerMenu} onClick={handleMenuClick}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </button>
        <div className={`${menuOpen ? styles.showMenu : styles.buttonList}`}>
            <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to='/sobre' onClick={() => setMenuOpen(false)}>Sobre mim</Link>
            <Link to='/educacao' onClick={() => setMenuOpen(false)}>Educação</Link>
            <Link to='/projetos' onClick={() => setMenuOpen(false)}>Projetos</Link>
        </div>
    </nav>
    )
}

export default NavBar