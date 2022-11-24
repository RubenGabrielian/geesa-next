export default function AboutCoWorkers({data}) {
    return (
        <div className="about-coworkers section">
            <div className="container">
                <h2>{data.acf.partners_title}</h2>
                <p>{data.acf.partners_text}</p>
            </div>
        </div>
    )
}