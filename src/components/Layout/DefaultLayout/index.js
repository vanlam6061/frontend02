import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '@/components/Layout/components/Header/Header';
import { PagesSharp } from '@mui/icons-material';

const cx = classNames.bind(styles);
function DefaultLayout({ page }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {page}
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
