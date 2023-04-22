import { Fragment } from "react";
import Head from "next/head";
import Menubar from "../components/home-page/menubar";


function MenubarPage() {
    return (
        <Fragment>
            <Head>
                <title>Our Services</title>
                <meta name='description' content='The Services we offer are frontend, backend, database.' />
            </Head>
            <Menubar />
        </Fragment>
    ) 
}

export default MenubarPage;