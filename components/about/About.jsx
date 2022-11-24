 // Import images
 import about1 from "../../public/about1.jpg";
 import about2 from "../../public/about2.jpg";
 import about3 from "../../public/about3.jpg";

export default function AboutContent({data}) {
    return (
        <div className="about-content">
            <div className="container">
               <p>{data.acf.first_text}</p>
                <div className="about-content-advs">
                    <h3>ՄԵր առավելությունները</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="adv-item">{data.acf.advantage_1}</div>
                        </div>
                        <div className="col-md-4">
                            <div className="adv-item">{data.acf.advantage_2}</div>
                        </div>
                        <div className="col-md-4">
                            <div className="adv-item">{data.acf.advantage_3}</div>
                        </div>
                    </div>
                </div>
                <div className="about-top-images">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={data.acf.adv_image_1} width={'100%'} />
                        </div>
                        <div className="col-md-6">
                            <img src={data.acf.adv_image_2} className="small" />
                            <img src={data.acf.adv_image_3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}