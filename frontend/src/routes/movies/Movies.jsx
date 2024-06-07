import styles from './Movies.module.css';

import { FaSearch } from "react-icons/fa";

import { useEffect, useState } from 'react';

import Movie from '../../components/movie/Movie';

// 1900d926

const API_URL = 'https://www.omdbapi.com/?apikey=1900d926';

const Movies = () =>{

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('')

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data)

        setMovies(data.Search || [])


    }

    useEffect(() =>{
        searchMovies('')
        // console.log(movies)
    },[])

    return(
        <>
            <div className={styles.Movies}>
                <div className={styles.searchContainer}>
                    <input value={search} onChange={(e) =>setSearch(e.target.value)} placeholder='Pesquisar por um filme' type="text" />
                    <FaSearch onClick={() => searchMovies(search)}/>
                </div>
                <div className={styles.moviesSection}>
                    <h3 className={styles.title}>Mais Assistidos</h3>
                    <div className={styles.movieCardContainer}>
                        { movies.length > 0 ?
                            movies.map((movie, index) =>(
                                <Movie key={index} movie={movie}/>
                            ))

                            :
                            (
                                <div>
                                    <p>Não foram encontrados resultados.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies;