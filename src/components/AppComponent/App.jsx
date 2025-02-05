import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import AboutPage from '../../pages/AboutPage/AboutPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
