import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import CastCard from 'components/CastCard/CastCard';
import s from './Cast.module.css';

import { getMovieCredits } from '../../services/apiService';

export default function Cast() {
    const { id } = useParams();
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getMovieCredits(id).then(res => {
            setCast(res);
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {loading && <Loader />}

            <ul className={s.list}>
                {cast && cast.cast.map((char, idx) => <CastCard key={idx} data={char} />)}
            </ul>
        </>
    );
}
