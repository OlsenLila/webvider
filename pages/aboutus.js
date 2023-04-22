import { Fragment } from "react";
import Head from "next/head";
import AboutUs from "../components/home-page/aboutus";



function AboutUsPage() {
    return (
        <Fragment>
            <Head>
                <title>About Us</title>
                <meta name='description' content='More Information about our Company' />
            </Head>
            <AboutUs />
        </Fragment>
    ) 
}

export default AboutUsPage;