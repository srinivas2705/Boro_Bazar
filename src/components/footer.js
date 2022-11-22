import { FacebookFilled, TwitterCircleFilled, InstagramFilled, YoutubeFilled } from "@ant-design/icons";
import "../styles/footer.css"
const Footer= () =>{
    return(
        <div className="Footer">
            <section>
                <img src="https://borobazar.vercel.app/assets/images/logo.svg"></img>
                <p>We offer high-quality foods and the best delivery service, and the food market you can blindly trust</p>
                <p><span><FacebookFilled /></span> <span><TwitterCircleFilled /></span> <span><InstagramFilled /></span> <span><YoutubeFilled /></span></p>
            </section>
            <section>
                <ul type="none">
                    <h3>About Us</h3>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>About team</li>
                    <li>Customer support</li>
                </ul>
            </section>
            <section>
                <ul type="none">
                    <h3>Our Information</h3>
                    <li>Privacy policy update</li>
                    <li>Terms & conditions</li>
                    <li>Site map</li>
                    <li>Return policy</li>
                </ul>
            </section>
            <section>
                <ul type="none">
                    <h3>Community</h3>
                    <li>Announcements</li>
                    <li>Answer center</li>
                    <li>Discussion boards</li>
                    <li>Gving works</li>
                </ul>
            </section>
            <section>
                <h3>Subscribe Now</h3>
                <p>Subscribe your email for newsletter and featured news based on your interest</p>
            </section>

        </div>
    )
}

export default Footer;