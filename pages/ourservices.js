import { Fragment } from "react";
import Head from "next/head";
import OurServicesForm from "../components/home-page/ourservices";


function ServicePage() {
    return (
        <Fragment>
            <Head>
                <title>Our Services</title>
                <meta name='description' content='The Services we offer are frontend, backend, database.' />
            </Head>
            <OurServicesForm />
        </Fragment>
    ) 
}

export default ServicePage;