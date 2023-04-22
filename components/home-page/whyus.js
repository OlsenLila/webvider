import classes from './whyus.module.css';

function WhyUsForm() {
    return (
        <section>
            <div className={classes.hero}>
                <h2>Why Us</h2>
                <h4>Our Main Areas of Focus are:</h4>
                <div className={classes.row}>
                    <div className={classes.column}>
                            <img
                            src= "/images/site/piggy-bank.svg"
                            alt="frontend image"
                            className={classes.image}
                            />
                            <h3>Cost Savings</h3>
                            <p>Experience Cost-Effective Efficiency: Outsource Your Project to Our Expert Software
                            Development Team, Avoiding the Costs of Hiring, Training, and Housing In-House Staff.</p>
                    </div>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/hourglass-split.svg"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3>Time Savings</h3>
                        <p>Accelerate Your Innovation Journey: Be Ahead of the Curve with Our Fast-paced Software 
                            Development Solutions for Market-leading Success.</p>
                    </div>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/kanban.svg"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3>Online Project Management</h3>
                        <p>Transparency and Control at Your Fingertips: Manage Your Outsourced Project with Confidence
                             Through Our User-Friendly Online Platform.</p>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/shuffle.svg"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3>Flexibility Benefit</h3>
                        <p>Flexibility and Freedom to Choose: Tailor Your Development 
                            Team for Every Project with Our Outsourcing Solutions.</p>
                    </div>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/infinity.svg"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3>Creative and Motivated Teams</h3>
                        <p>Unlock a World of Talent: Overcome Hiring Challenges with Our Access to 
                            Creative and Seasoned Professionals for Your Software Development Needs.</p>
                    </div>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/people.svg"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3> New Perspectives</h3>
                        <p>Unleash the Power of Innovation: Embrace New Ideas and Out-of-the-Box Thinking 
                            for Exceptional Software Development Results.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUsForm;