import Image from "next/image";
import banner from "../../public/about.jpg"; 3

export default function AboutBanner({data}) {
    return (
        <div className="container">
            <div className="about-banner-image" style={{ backgroundImage: `url(${data.acf.banner_image})`, backgroundPosition: "top" }}>
                <h1>ՄԵՐ ՄԱՍԻՆ</h1>
            </div>
        </div>
    )
}