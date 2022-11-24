
export default function HomeJobItem({ alt, src, title }) {

    const myLoader = ({ src, width, quality }) => {
        return <div>Loading...</div>
      }


    return (
        <div className="home-jobs-item">
            {/* <Image
                alt={alt}
                src={src}
                style={{ borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem' }}
                height="500px"
            /> */}
            <img src={src} width="100%" height={"250px"} />
            <h5>{title}</h5>
        </div>

    )
}