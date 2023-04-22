import classes from './aboutus.module.css';

function AboutUs() {
    return (
        <section>
            <div className={classes.hero}>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <h2>About Us</h2>
                        <h3>Hire full stack developers</h3>
                        <h4>Save up to 60% cost, 2x faster</h4>
                        <h5>Transform Your Vision into Reality: Build Any Web Application from Scratch with Our Expert
                            Full Stack Development Services. Hire Skilled Full Stack Developers for MEAN.js, Angular.js, LAMP, 
                            Vue.js, Meteor, React.js, Node.js, PHP on Hourly or Monthly Basis. Experience Reliable Solutions with Faster 
                            Turnaround Times and Better ROI with CodeVider. Our experienced team of software engineers are skilled in a wide range of programming languages and frameworks, ensuring that we can tackle any project with confidence.
                            From web applications to mobile apps, custom software to cloud-based solutions, we offer comprehensive software development services tailored to your specific requirements.
                            We are committed to delivering on-time and on-budget, with a focus on providing excellent customer service and exceeding expectations.
                            Welcome to our cutting-edge software development company, where we create innovative solutions to meet all your technology needs.
                            Collaborating closely with our clients, we strive to understand their unique business needs and goals, resulting in software solutions that drive growth and success.</h5>
                    </div>
                    <div className={classes.column}>
                        <img 
                            src= "/images/site/background/61.PNG"
                            alt="frontend image"
                            className={classes.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;