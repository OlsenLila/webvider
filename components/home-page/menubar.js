import Link from 'next/link';
import classes from './menubar.module.css';


function Menubar() {
    return (
        <section>
            <div className={classes.dropdown}>
            <button className={classes.dropbtn}><img className={classes.img}title="Menu" src="/images/site/list.svg" /></button>
                <div className={classes.dropdowncontent}>
                    <a href="/">Home</a>
                    <a href="/ourservices">Our Services</a>
                    <a href="/workprocess">Workflow Process</a>
                    <a href="/whyus">Why Us</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </section>
    );
}

export default Menubar;