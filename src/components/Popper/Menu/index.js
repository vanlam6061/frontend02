import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement={'bottom-end'}
            // visible={searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title={'English'} />
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
