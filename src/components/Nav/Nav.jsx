import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link href="/">
                <a className={styles.link}>Note app</a>
            </Link>
            <Link href="/notes">
                <a className={styles.link}>Notes</a>
            </Link>
            <a className={styles.link} href={process.env.HELP_APP_URL}>Help</a>
        </nav>
    </header>
);

export default Nav;
