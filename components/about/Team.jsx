import TeamMember from "./TeamItem";
import tigran from "../../public/tigran.jpeg";
import ashot from "../../public/ashot.jpeg";
import davit from "../../public/davit.jpeg";

export default function Team ({data}) {
    return (
        <div className="about-team section">
            <div className="container">
                <h2>ՄԵՆՔ</h2>
                <div className="row">
                    {
                        data.acf.team_members.map((member, key) => (
                            <div className="col-md-4">
                                <TeamMember
                                    img={member.image}
                                    name={member.name}
                                    position={member.position}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}