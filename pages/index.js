import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import ContactForm from "../components/contact/contact-form";
import OurServicesForm from "../components/home-page/ourservices";
import WorkProcessForm from "../components/home-page/workprocess";
import WhyUsForm from "../components/home-page/whyus";
import AboutUs from "../components/home-page/aboutus";
import HomePagetoo from "../components/home-page/maps";

function HomePage() {
    return (
        <Fragment>
            <Head>
                <title>Codevider</title>
                <meta name='description' content='Build any type of web application from scratch for all kinds of commercial grade,
                mid-large scale projects with our full stack development services. Hire Full stack developers on hourly or full time (dedicated monthly) basis who are skilled.'/>
            </Head>
            <Hero />
            <OurServicesForm />
            <WorkProcessForm />
            <WhyUsForm />
            <AboutUs />
            <ContactForm />
            <HomePagetoo />
        </Fragment>
    );
}

export default HomePage;