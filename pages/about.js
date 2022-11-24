import Head from "next/head";
import AboutContent from "../components/about/About";
import AboutAchievents from "../components/about/Achievents";
import AboutBanner from "../components/about/banner";
import Clients from "../components/about/Clients";
import AboutCoWorkers from "../components/about/Coworkers";
import Team from "../components/about/Team";

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="About about page" />
            </Head>
            <div>
                <AboutBanner />
                <AboutContent />
                <AboutCoWorkers />
                <Clients />
                <AboutAchievents />
                <Team />
            </div>
        </div>
    )
}