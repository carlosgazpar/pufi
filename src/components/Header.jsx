import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/components/Header.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderLinkItem from "@/common/HeaderLinkItem";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-col">
          <a href="">
            <Image
              src="/assets/img/pufi.svg"
              width={100}
              height={100}
              alt="Pufi Logo"
              title="Pufi Logo"
            />
          </a>
        </div>

        <div className="header-col">
          <HeaderLinkItem
            title="Puffi Puff"
            img="/assets/img/icon-pufi-puff.png"
          />
          <HeaderLinkItem
            title="Puffi Rain"
            img="/assets/img/umbrella-outline.svg"
          />
          <HeaderLinkItem
            title="Puffi Cart"
            img="/assets/img/icon-pufi-cart.png"
          />
          <HeaderLinkItem
            title="Puffi Nap"
            img="/assets/img/icon-pufi-nap.png"
          />
        </div>
        <div className="header-col">
          <a href="">Mi Cuenta</a>
          <a href="">Mi Compra</a>
        </div>

        <div className="header-col">
          <div className="hambuger-menu">
            <FontAwesomeIcon width={35} icon={faBars} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
