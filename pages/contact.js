import Head from "next/head";
import img from "../public/contact.jpg";

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>ԿԱՊ</title>
            </Head>
            <div className="contact">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>ՄԵԶ ՀԵՏ ԿԱՊՆՎԵԼԸ ԲԱՎԱԿԱՆԻՆ ՀԵՇՏ Է</h1>
                        <form>
                            <div className="form-group">
                                <label>Անուն / Ազգանուն</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Էլ․ հասցե</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Նամակ</label>
                                <textarea></textarea>
                            </div>
                            <div className="form-group">
                                <button className="geesa-btn">Ուղարկել</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 contact-right">
                        <img src={img.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}