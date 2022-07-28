import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import s from './ListItem.module.css';

export default function ListItem({ movie }) {
    const { release_date, title, poster_path } = movie;
    const date = release_date.slice(0, 4);
    const poster = poster_path
        ? 'https://image.tmdb.org/t/p/w500' + poster_path
        : 'https://www.reelviews.net/resources/img/default_poster.jpg';

    let { pathname, search } = useLocation();
    const currentPath = pathname === '/' ? `movies/${movie.id}` : `${movie.id}`;

    return (
        <li className={s.item}>
            <NavLink to={currentPath} state={{ from: `${pathname}${search}` }} className={s.link}>       
                <img src={poster} alt={title} className={s.wrapper}/>
                <div className={s.title}>
                    <h3 className={s.titleText}>{title} </h3>
                    <span className={s.titleText}>{date}</span>
                </div>
                
            </NavLink>
        </li>
    );
}

ListItem.propTypes = {
    movie: PropTypes.shape({
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    }),
};
