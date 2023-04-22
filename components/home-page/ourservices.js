import classes from './ourservices.module.css';

function OurServicesForm() {
    return (
        <section>
            <div className={classes.hero}>
                <div><h2>Our Services</h2></div>
                <div><h4>Unleashing the Power of Technology: Our Software Development Services Include.</h4></div>
                <div className={classes.row}>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/frontend3.PNG"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3>FrontEnd</h3>
                        <p>HTML5, CSS3, Sass, Gulp, Bootstrap
                            JavaScript (ECMAScript 6,7,8), React, Vue.js, Angular, jQuery, TypeScript
                            Google Maps API, Facebook API, PayPal, Stripe
                            Socket.io, GraphQL, Axios, Rest Api</p>
                    </div>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/backend.PNG"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3>BackEnd</h3>
                        <p>Node Js, Python, Php
                            Node Frameworks: ExpressJs, HapiJs, Koa Js
                            Python Frameworks: Django, Flask
                            Php Frameworks: Laravel, Symphony, Zend</p>
                    </div>
                    <div className={classes.column}>
                            <img 
                            src= "/images/site/frontend4.PNG"
                            alt="frontend image"
                            className={classes.image}/>
                        <h3>Database</h3>
                        <p>Relational: MySQL, PostgresSQL
                            NoSQL: MongoDB, DynamoDB, Redis</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServicesForm;