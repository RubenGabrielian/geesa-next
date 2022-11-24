import HomeJobItem from "./JobItem";
// Import Images
import job1 from "../../public/job1.jpg";
import job2 from "../../public/job2.jpg";
import job3 from "../../public/job3.jpg";
import job4 from "../../public/job4.jpg";
import job5 from "../../public/job5.jpg";
import job6 from "../../public/job6.jpg";
import job7 from "../../public/job7.jpg";
import job8 from "../../public/job8.jpg";
import Link from "next/link";

export default function HomeJobs({ works }) {
    return (
        <div className="home-jobs">
            <div className="container">
                <h2>Մեր Աշխատանքները</h2>
                <div className="row">
                    {
                        works.map((work, key, index) => {
                            return (
                                key < 8 ? (
                                    <div key={key} className="col-md-3">
                                        <HomeJobItem
                                            alt="Alt"
                                            src={work.acf.image}
                                            title={work.title.rendered}
                                        />
                                    </div>
                                ) : null

                            )
                        })
                    }
                </div>
            </div>
            <div className="home-jobs-more">
                <Link href="/works">
                    <button className="geesa-btn">Դիտել Բոլորը</button>
                </Link>
            </div>
        </div>
    )
}