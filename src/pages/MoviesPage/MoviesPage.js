import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/apiService';
import ListItem from 'components/ListItem/ListItem';
import Title from 'components/Title/Title';
import Error from 'components/Error/Error';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from '../../components/Loader/Loader';

import s from './MoviesPage.module.css';

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const userQuery = searchParams.get('query');

    useEffect(() => {
        if (query === '') {
            return;
        }

        setLoading(true);
        setError(false);

        searchMovies(query)
            .then(res => {
                setMovies(res);
                setLoading(false);
                setSearchParams({ query: query });
            })
            .catch(error => {
                setError(true);
                setLoading(false);
            });
    }, [query, setSearchParams]);

    useEffect(() => {
        if (userQuery === null) {
            setMovies(null);
            setQuery('');
            return;
        }

        setQuery(userQuery);
    }, [userQuery]);

    return (
        <main>
            <Title title={'Search movie'}></Title>
            <SearchForm handleSubmit={setQuery} movies={movies} />

            {loading && <Loader />}
            {error && <Error />}

            {movies?.results?.length ? <h4 className={s.text}>We found some movies for you!</h4> : null}
            {movies?.results?.length === 0 ? <h4 className={s.text}>We didn't find any movies for you!</h4> : null}
            {query === '' ? <h4 className={s.text}>Looking for a movie?</h4> : null}

            <ul className={s.list}>
                {movies && movies.results.map(movie => <ListItem key={movie.id} movie={movie} />)}
            </ul>
        </main>
    );
}
