import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";

export default function HomeServiceItem({ title, image, url, id }) {
    const urlTo = `/service/${url}`;

    return (
        <Link href={urlTo}>
            <a>
                <div className="service-item">
                    <div className="service-icon">
                        <img
                            alt="jramekusacum"
                            src={image}
                            className={'home-service-img'}
                            height={'300px'}
                            width={"100%"}
                            style={{ objectFit: 'cover', borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem' }}
                        />
                    </div>
                    <h3>{title}</h3>
                </div>
            </a>
        </Link>
    )
}