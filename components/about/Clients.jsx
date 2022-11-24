import clientsPhoto from "../../public/patviratuner.jpg";

export default function Clients() {
    return (
        <div className="about-clients section">
            <div className="container">
                <h2>Պատվիրատուներ</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            Մեր առաջատար լինելու գաղտնիքը պատվիրատուի կարիքները և վստահությունն առաջնահերթ դասելն է:
                        </p>
                        <p>
                            Մեզ վստահվում են հանրապետության կարևորագույն շինությունները: Մեր գործընկերները համոզվել են ԳԻԶԱ-ի պրոֆեսիոնալիզմի հարցում:
                        </p>
                        <p>
                            Գործելով շուրջ 20 տարի մենք շարունակաբար համալրում ենք մեր գործընկերների շարքերը։
                        </p>
                        <p>ԳԻԶԱ-ն առաջատար չէր լինի առանց նրանց վստահության։</p>
                    </div>
                    <div className="col-md-6">
                        <img src={clientsPhoto.src} width="100%" />
                    </div>
                </div>
            </div>
        </div>
    )
}