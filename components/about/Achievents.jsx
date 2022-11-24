import achiveImg from "../../public/11.jpg";
import apahovTaniq from "../../public/apahov-taniq.jpg";
import about5 from "../../public/about5.jpg";
import about6 from "../../public/about6.jpg";
import about7 from "../../public/about7.jpg";

export default function AboutAchievents({data}) {
    return (
        <>
            <div className="section">
                <div className="container">
                    <h2>{data.acf.achievents_title}</h2>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={data.acf.achievents_image} width="100%"/>
                        </div>
                        <div className="col-md-8">
                            <p>{data.acf.achievents_text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <h2>{data.acf.security_title}</h2>
                    <div className="row align-items-center">
                        <div className="col-md-8">
                           <p>{data.acf.security_text}</p>
                        </div>
                        <div className="col-md-4">
                            <img src={data.acf.security_image} width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <h2>{data.acf.cooperation_title}</h2>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={data.acf.cooperation_image} width="100%"/>
                        </div>
                        <div className="col-md-8">
                           <p>{data.acf.cooperation_text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <h2>{data.acf.specialists_title}</h2>
                    <div className="row align-items-center">
                        <div className="col-md-8">
                          <p>{data.acf.specialists_text}</p>
                        </div>
                        <div className="col-md-4">
                            <img src={data.acf.specialists_image} width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <h2>{data.acf.trainings_title}</h2>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={data.acf.trainings_image} width="100%"/>
                        </div>
                        <div className="col-md-8">
                            {data.acf.trainings_text}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}