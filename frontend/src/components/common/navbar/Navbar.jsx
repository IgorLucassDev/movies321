import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <>
            <nav className={styles.Navbar}>
                <h2>Movies321</h2>
                <ul>
                    <li>
                        <Link to='/' className={styles.Link}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='movies' className={styles.Link}>
                            Filmes
                        </Link>
                    </li>
                    <li>
                        <Link to='about' className={styles.Link}>
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar