import classes from './hero.module.css';


function Hero() {
    return (
        <section>
            <div className={classes.hero}>
                <div><h2>Outsourced Coding</h2></div>
                <div><h3>Building Tomorrow's Technology, Today.</h3></div>
                <div><h4>Welcome to our cutting-edge software development company, where we create innovative solutions 
                         to meet all your technology needs.At our software development firm, 
                         we bring your ideas to life through our expertise in coding, design, and testing, delivering high-quality,
                         scalable software applications.</h4></div >
                <div className={classes.myhero}>
                    <a href="/ourservices">Our Services</a>
                </div>
                <div className={classes.myhero}>
                    <a href="/contact">Start a Project with Us</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;