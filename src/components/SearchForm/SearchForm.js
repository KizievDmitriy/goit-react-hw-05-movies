import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './SearchForm.module.css';

export default function SearchForm({ handleSubmit, movies }) {
    const [searchParams] = useSearchParams();
    const userQuery = searchParams.get('query');
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!movies) return setQuery('');

        setQuery(userQuery);
    }, [movies, userQuery]);

    const onChange = e => {
        setQuery(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        if (query.trim() === '') {
            Notify.warning('Write something!');
            return;
        };   

        handleSubmit(query);
    };
    return (
        <form onSubmit={onSubmit} className={s.form}>
            <input
                placeholder=" Search films"
                type="text"
                className={s.input}
                name="query"
                value={query}
                onChange={onChange} />
            <button type="submit" className={s.btn}>
                Search
            </button>
        </form>
    );
}

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    movies: PropTypes.object,
};
