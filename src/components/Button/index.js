import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ to, href, children, outline = false, primary = false, onClick, ...passProps }) {
    let Comp = 'button';
    const props = { onClick, ...passProps };
    const classes = cx('wrapper', { primary, outline });
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
