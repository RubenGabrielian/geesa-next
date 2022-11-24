import { useRouter } from "next/router";
import Head from "next/head";
import heroImg from "../../../public/13.jpg";
import img1 from "../../../public/sub-service1.jpg";
import img2 from "../../../public/sub-service2.jpg";
import img3 from "../../../public/sub-service3.jpg";
import axios from "axios";
import { API_URL } from "../../../constants";
import img4 from "../../../public/sub-service4.jpg";

export default function ServiceSubCategory({data}) {


    const router = useRouter();
    const id = router.query.id;




    return (
        <div className="sub-service">
            <Head>
                <title>{data.title.rendered} | Geesa.am</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className="container">
                <div className="sub-service-hero" style={{ backgroundImage: `url(${data.acf.image})` }}>

                </div>
                <div className="sub-service-hero-title">
                    <h1>{data.title.rendered}</h1>
                    <h3>{data.acf.title}</h3>
                </div>

                <div className="sub-service-content">
                   <div dangerouslySetInnerHTML={{__html: data.acf.content}}></div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const res = await axios.get(`${API_URL}/sub-services/${context.params.id}?acf_format=standard`);
  
    return {
      props: { data: res.data },
    };
  }
  