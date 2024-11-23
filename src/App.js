import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes/index';
import DefaultLayout from '@/components/Layout/DefaultLayout/index';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = DefaultLayout;
                    let Page = route.element;
                    console.log(route.element);

                    return <Route key={index} path={route.path} element={<Layout page={route.element} />} />;
                })}
            </Routes>
        </Router>
    );
}

console.log(publicRoutes);
export default App;
