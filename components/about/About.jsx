 // Import images
 import about1 from "../../public/about1.jpg";
 import about2 from "../../public/about2.jpg";
 import about3 from "../../public/about3.jpg";

export default function AboutContent() {
    return (
        <div className="about-content">
            <div className="container">
                <p>
                    ԳԻԶԱ-ն հիմնադրվել է 1999թվականին և շուրջ 20 տարիէ` զբաղվում է ջրամեկուսացման, ջերմամեկուսացման, գոլորշամեկուսացման և ձայնամեկուսացման աշխատանքների իրականացմամբ:
                </p>
                <p>
                    Լինելով ոլորտի առաջատար, մենք առաձնանում ենք մեր մրցակցային առավելություններով:
                </p>
                <div className="about-content-advs">
                    <h3>ՄԵր առավելությունները</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="adv-item">Երկարակեցություն</div>
                        </div>
                        <div className="col-md-4">
                            <div className="adv-item">Ճշգրիտ լուծումներ</div>
                        </div>
                        <div className="col-md-4">
                            <div className="adv-item">Արդյունավետություն</div>
                        </div>
                    </div>
                </div>
                <div className="about-top-images">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={about1.src} width={'100%'} />
                        </div>
                        <div className="col-md-6">
                            <img src={about2.src} className="small" />
                            <img src={about3.src} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 