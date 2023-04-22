import Logo from './logo';
import Link from 'next/link';
import classes from './main-navigation.module.css';
import Menubar from '../home-page/menubar';


function MainNavigation () {
    return (
        <header className={classes.header}>
            <Link legacyBehavior href='/'>
                <a>
                <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/ourservices">Our Services</Link>
                    </li>
                    <li>
                        <Link href="/workprocess">Workflow Process</Link>
                    </li>
                    <li>
                        <Link href="/whyus">Why Us</Link>
                    </li>
                    <li>
                        <Link href="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <ul>
                    <Menubar />
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;