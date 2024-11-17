import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '@/components/Layout/components/Header/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
