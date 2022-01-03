import Link from 'next/link';
import styles from './button.module.css';

// the anchor tag is purely to be able to customise the styling of the Link internal nextjs Component.

const Button = (props) => {
    return <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
    </Link>
}

export default Button;