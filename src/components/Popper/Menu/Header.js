import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header({ children, title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')}>{}</button>
        </header>
    );
}

export default Header;
