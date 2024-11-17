import Home from '@/pages/Home/Home';
import Following from '@/pages/Following/Following';
import Profile from '@/pages/Profile/Profile';
import Upload from '@/pages/Upload/Upload';
const publicRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/following',
        element: <Following />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/upload',
        element: <Upload />
    }
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
