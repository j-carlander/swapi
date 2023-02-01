import "./BannerImg.css";
import BackgroundImg from "../../img/swapi-background.png"

function BannerImg() {
  return (
    <header className="banner-img">
      <img src={BackgroundImg} alt="" />
    </header>
  );
}

export default BannerImg;