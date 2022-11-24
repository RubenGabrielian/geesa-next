export default function TeamMember ({img, name, position}) {
    return (
        <div className="team-item">
            <img  src={img}  />
            <h3>{name}</h3>
            <span>{position}</span>
        </div>
    )
}