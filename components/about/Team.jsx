import TeamMember from "./TeamItem";
import tigran from "../../public/tigran.jpeg";
import ashot from "../../public/ashot.jpeg";
import davit from "../../public/davit.jpeg";

export default function Team () {
    return (
        <div className="about-team section">
            <div className="container">
                <h2>ՄԵՆՔ</h2>
                <div className="row">
                    <div className="col-md-4">
                        <TeamMember 
                            img={tigran}
                            name={"Տիգրան Զաքարյան"}
                            position={"Տնօրեն"}
                        />
                    </div>
                    <div className="col-md-4">
                        <TeamMember 
                            img={ashot}
                            name={"Աշոտ Հակոբյան"}
                            position={"Փոխտնօրեն"}
                        />
                    </div>
                    <div className="col-md-4">
                        <TeamMember 
                            img={davit}
                            name={"Դավիթ Հակոբյան"}
                            position={"Գլխավոր ճարտարագետ"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}