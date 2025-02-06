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
import NewSalesPage from '../../pages/NewSalesPage/NewSalesPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="new_sales" element={<NewSalesPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
