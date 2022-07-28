import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Header from './Header/Header';
import Cast from './/Cast/Cast';
import Reviews from './/Reviews/Reviews';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
    return (
        <>
            <Suspense fallback={''}>
                <Container>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/movies/:id" element={<MovieDetailsPage />}>
                            <Route path="cast" element={<Cast />} />
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Container>
            </Suspense>
        </>
    );
};
