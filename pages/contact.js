import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";
import MapsPage from "../components/home-page/maps";


function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Contact Us</title>
                <meta name='description' content='Send us your requirements!' />
            </Head>
            <ContactForm />
            <MapsPage />
        </Fragment>
    ) 
}

export default ContactPage;