import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import banner from "../../public/home-banner.jpg"; 3

export default function HomeBanner ({data}) {

    return (
        <div className="container">
            <div className="home-banner-image" style={{backgroundImage: `url(${data.acf.banner_image})`}}>
                <h1>{data.acf.banner_title}</h1>
                <p>{data.acf.banner_text}</p>
            </div>
        </div>
    )
}

