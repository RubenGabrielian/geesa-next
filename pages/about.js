import Head from "next/head";
import AboutContent from "../components/about/About";
import AboutAchievents from "../components/about/Achievents";
import AboutBanner from "../components/about/banner";
import Clients from "../components/about/Clients";
import AboutCoWorkers from "../components/about/Coworkers";
import Team from "../components/about/Team";
import axios from "axios";
import {API_URL} from "../constants";

export default function About({data}) {
    return (
        <div>
            <Head>
                <title>ՄԵր մասին Geesa.am</title>
                <meta name="description" content="About about page" />
            </Head>
            <div>
                <AboutBanner data={data} />
                <AboutContent data={data} />
                <AboutCoWorkers data={data} />
                <Clients data={data} />
                <AboutAchievents data={data} />
                <Team data={data} />
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const res = await axios.get(`${API_URL}/pages/12?acf_format=standard`);

    return {
        props: { data: res.data },
    };
}