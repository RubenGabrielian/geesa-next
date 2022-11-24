import Image from "next/image";
import banner from "../../public/about.jpg"; 3

export default function AboutBanner() {
    return (
        <div className="container">
            <div className="about-banner-image" style={{ backgroundImage: `url(${banner.src})`, backgroundPosition: "top" }}>
                <h1>ՄԵՐ ՄԱՍԻՆ</h1>
            </div>
        </div>
    )
}