import clientsPhoto from "../../public/patviratuner.jpg";

export default function Clients({data}) {
    return (
        <div className="about-clients section">
            <div className="container">
                <h2>{data.acf.clients_title}</h2>
                <div className="row">
                    <div className="col-md-6">
                       <p>{data.acf.clients_text}</p>
                    </div>
                    <div className="col-md-6">
                        <img src={data.acf.clients_image} width="100%" />
                    </div>
                </div>
            </div>
        </div>
    )
}