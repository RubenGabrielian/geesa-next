import HomeServiceItem from "./ServiceItem";


import Link from "next/link";
export default function HomeServices({ services }) {
    return (
        <div className="home-services">
            <h2>Ծառայություններ</h2>
            <div className="container">
                <div className="row">

                    {
                        services.map((service, key) => {
                            return <div key={key} className="col-md-4">
                                <HomeServiceItem image={service.acf.banner_image}  title={service.title.rendered} url={service.slug} id={service.id} />
                            </div>
                        })
                    }

                </div>
                <div className="home-jobs-more">
                <Link href="/services">
                    <button className="geesa-btn">Դիտել Բոլորը</button>
                </Link>
            </div>
            </div>
        </div>
    )
}