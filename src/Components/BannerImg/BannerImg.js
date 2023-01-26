import "./BannerImg.css";
import BackgroundImg from "./banner-img.png"

function BannerImg() {
  return (
    <header className="banner-img">
      <img src={BackgroundImg} alt="" />
    </header>
  );
}

export default BannerImg;