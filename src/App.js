import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes/index';
import DefaultLayout from '@/components/Layout/DefaultLayout/index';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = DefaultLayout;

                    return <Route key={index} path={route.path} element={<Layout />} />;
                })}
            </Routes>
        </Router>
    );
}

console.log(publicRoutes);
export default App;
