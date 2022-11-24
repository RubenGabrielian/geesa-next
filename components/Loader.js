import { ThreeDots } from "react-loader-spinner";
import logo from "../public/logo.jpg";


export default function Loader() {
    return (
        <div className="loader" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={logo.src} />
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#9d2927"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />

        </div>
    )
}