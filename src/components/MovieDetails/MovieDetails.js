import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import s from './MovieDetails.module.css';

export default function MovieDetails({ movieData }) {
    const { state } = useLocation();
    const [lastStateFrom, setLastStateFrom] = useState(null);

    useEffect(() => {
        if (state === null) {
            return;
        }

        setLastStateFrom(state.from);
    }, [state]);

    const { title, release_date, vote_average, overview, poster_path } = movieData;
    const poster = poster_path
        ? 'https://image.tmdb.org/t/p/w500' + poster_path
        : 'https://www.reelviews.net/resources/img/default_poster.jpg';
    const date = release_date.slice(0, 4);
    const genres = movieData.genres.map(genre => genre.name).join(' / ');

    return (
        <>
            <div className={s.movieWrap}>
                <NavLink to={lastStateFrom ? lastStateFrom : '/'} className={s.btn}>
                &larr; Back
                </NavLink>

                <div className={s.card}>
                    <div className={s.posterWrap}>
                        <img className={s.poster} src={poster} alt={title} />
                    </div>
                    <div>
                        <h2 className={s.title}>
                            {title} ({date})
                        </h2>
                        <h4 className={s.subtitle}>User Score:
                            <b className={s.score}> {`${vote_average.toFixed()}`}/10</b>
                        </h4>
                        <h4 className={s.subtitle}>Genres:</h4>
                        <p className={s.genres}>{genres}</p>
                        <h4 className={s.subtitle}>Overview: </h4>
                        <p className={s.overview}>{overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

MovieDetails.propTypes = {
    movieData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    }),
};
