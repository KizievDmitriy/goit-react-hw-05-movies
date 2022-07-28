const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '90cfe661c2323ab539dac15dcff3c499';

export async function getTrendingMovies() {
    const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
    return response.ok ? await response.json() : Promise.reject(new Error('Error'));
}

export async function searchMovies(query) {
    const response = await fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.ok ? await response.json() : Promise.reject(new Error('Error'));
}

export async function getMovieDetail(id) {
    const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.ok ? await response.json() : Promise.reject(new Error('Error'));
}

export function getMovieCredits(id) {
    return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then(res =>
        res.json()
    );
}
export function getMovieReview(id) {
    return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(
        res => res.json()
    );
}
