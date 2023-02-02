import "./BannerImg.css";
import BackgroundImg from "../../img/swapi-background2.png";

function BannerImg() {
  return (
    <header className="banner-img">
      <img src={BackgroundImg} alt="" />
    </header>
  );
}

export default BannerImg;
