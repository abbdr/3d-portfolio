import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon" title={socialImg.name}>
              <a
                href={socialImg.href}
                target={socialImg.name === "linkedin" ? "_blank" : ""}
              >
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abdul Rozag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
