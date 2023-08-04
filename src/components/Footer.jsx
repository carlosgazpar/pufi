import "@/styles/components/Footer.scss";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-main-col">
          <Image
            src="/assets/img/pufi-black.svg"
            width={100}
            height={76}
            alt="Pufi logo"
            title="Pufi logo"
          />
        </div>
        <div className="footer-main-col">
          <a href="">Pufi Rain</a>
          <a href="">Pufi Puff</a>
          <a href="">Pufi Cart</a>
          <a href="">Pufi Nap</a>
        </div>
        <div className="footer-main-col">
          <a href="">Contacto</a>
          <a href="">Ayuda</a>
          <a href="">Como comprar</a>
          <a href="">Terminos y condiciones</a>
        </div>
        <div className="footer-main-col">
          <p>Compra 100% segura</p>
          <Image
            src="/assets/img/Compra-segura.png"
            width={50}
            height={76}
            alt="Compra Segura"
            title="Compra Segura"
          />
        </div>
        <div className="footer-main-col">
          <div className="footer-socials">
            <p>Siguenos en </p>
            <a target="_blank" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a target="_blank" href="https://twitter.com/?lang=es">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>PUFI Copyright 2023 - Todos los derechos reservados</p>
        <Image
          src="/assets/img/brandlive-logo.jpg"
          alt="Brandlive logo"
          title="Brandlive logo"
          width={85}
          height={65}
        />
      </div>
    </footer>
  );
};

export default Footer;
