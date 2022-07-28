import PropTypes from 'prop-types';
import s from './CastCard.module.css';

export default function CastCard({ data }) {
    const { profile_path, name, character } = data;
    const poster = profile_path
        ? 'https://image.tmdb.org/t/p/w500' + profile_path
        : 'https://www.reelviews.net/resources/img/default_poster.jpg';

    return (
        <li>
            <img src={poster} alt={name} />
            <h4 className={s.title}>{name}</h4>
            <p className={s.subtitle}>Character: {character}</p>
        </li>
    );
}

CastCard.propTypes = {
    data: PropTypes.shape({
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    }),
};
