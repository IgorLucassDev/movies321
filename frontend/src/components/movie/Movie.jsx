import styles from './Movie.module.css';

const Movie = ({movie}) =>{
    return(
        <>
            <div className={styles.movie}>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="movie" />
                <p>{movie.Title}</p>
            </div>
        </>
    )
}

export default Movie;