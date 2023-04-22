import { Fragment } from "react";
import Head from "next/head";
import HomePagetoo from "../components/home-page/maps";


function MapsPage() {
    return (
        <Fragment>
            <Head>
                <title>Google Maps</title>
                <meta name='description' content='Contact Us and let us meet' />
            </Head>
            <HomePagetoo />
        </Fragment>
    ) ;
}

export default MapsPage;