import { Link } from "react-router-dom";
import facebook from "../../../assets/images/footerimg/facebook.png";
import whatsapp from "../../../assets/images/footerimg/whatsapp.png";
import linkedin from "../../../assets/images/footerimg/linkedin.png";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover"> House#42,Road-3/A,Mirpur 2.</a>
          <a className="link link-hover">Dhaka-1209, Bangladesh</a>
          <a className="link link-hover">
            Email: chakrabortyshuva216@gmail.com
          </a>
          <a className="link link-hover">Phone: 01300280287</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to={`/aboutus`}>
            <a className="link link-hover">About Us</a>
          </Link>
          <Link to={`/contact`}>
            <a className="link link-hover">Contact Us</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100009952750113"
              target="_blank"
            >
              <img src={facebook} width="24" height="24"></img>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=01872451678&text=Hello this is the starting message"
              target="_blank"
            >
              {" "}
              <img src={whatsapp} width="24" height="24"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/shuva-chakraborty-7aa59818a/"
              target="_blank"
            >
              <img src={linkedin} width="24" height="24"></img>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content mb-3">
        <div>
          <p>Copyright © 2023 - All right reserved by Shuva Chakraborty</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
