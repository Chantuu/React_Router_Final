import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
