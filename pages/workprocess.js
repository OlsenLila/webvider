import { Fragment } from "react";
import Head from "next/head";
import WorkProcessForm from "../components/home-page/workprocess";


function WorkProcessPage() {
    return (
        <Fragment>
            <Head>
                <title>Workflow Process</title>
                <meta name='description' content='We are using agile methodology so our process is focus on sprints and is repeated' />
            </Head>
            <WorkProcessForm />
        </Fragment>
    ) 
}

export default WorkProcessPage;