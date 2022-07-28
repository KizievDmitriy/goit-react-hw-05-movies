import { useEffect, useState } from 'react';
import ListItem from 'components/ListItem/ListItem';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import Title from 'components/Title/Title';
import { getTrendingMovies } from '../../services/apiService';
import s from './HomePage.module.css';

export default function HomePage() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        getTrendingMovies()
            .then(res => {
                setMovies(res.results);
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <main>
            <Title title={'Trending today'}></Title>

            {loading && <Loader />}
            {error && <Error />}

            <ul className={s.list}>
                {movies && movies.map(movie => <ListItem key={movie.id} movie={movie} />)}
            </ul>
        </main>
    );
}
