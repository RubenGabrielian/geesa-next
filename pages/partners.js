import Link from "next/link";
import axios from "axios";
import {API_URL} from "../constants";

export default function Partners({data}) {
    return (
        <div className="container">
            <div className="partners">
                <h1>{data.acf.title}</h1>
                <p>{data.acf.description}</p>
                <div className="row">
                    {
                        data.acf.clients.map((client, key) => {
                            return (
                                <div key={key} className="col-md-2">
                                    <a href={client.link}  target="_blank">
                                        <img src={client.image} />
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await axios.get(`${API_URL}/pages/157?acf_format=standard`);

    return {
        props: { data: res.data },
    };
}