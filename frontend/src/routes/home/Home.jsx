import styles from './Home.module.css';

import Banner from '/src/assets/images/Stranger-Things-logo.png';

import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <>
            <div className={styles.Home}>
                <div className={styles.leftContainer}>
                    <div className={styles.textContainer}>
                        <h1>Movies321</h1>
                        <p>A plataforma openSouce de Filmes</p>
                    </div>
                    <Link to='movies'>
                        <button className={styles.getStarted}>
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className={styles.rightContainer}>
                    <img src={Banner} alt="Logo" />
                </div>
            </div>
        </>
    )
}

export default Home;