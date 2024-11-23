import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
// import { Wrapper as PopperWrapper } from '@/components/Popper/Wrapper';
import { Wrapper as PopperWrapper } from '@/components/Popper';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = items.map((item, index) => {});
    return (
        <Tippy
            interactive
            placement={'bottom-end'}
            // visible={searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h2>Menu Item</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
