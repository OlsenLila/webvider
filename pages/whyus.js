import { Fragment } from "react";
import Head from "next/head";
import WhyUsForm from "../components/home-page/whyus";


function WhyUsPage() {
    return (
        <Fragment>
            <Head>
                <title>Why Us</title>
                <meta name='description' content='Why You should work with us' />
            </Head>
            <WhyUsForm />
        </Fragment>
    ) 
}

export default WhyUsPage;