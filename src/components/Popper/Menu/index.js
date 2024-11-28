import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    console.log(history);
    const current = history[history.length - 1];
    console.log(current);
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
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
