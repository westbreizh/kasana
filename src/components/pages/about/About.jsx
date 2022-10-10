import Collapse from "../../collapse/Collapse";
import Banner from "../../banner/Banner";
import imageBanner from "../../../assets/banner_img_about.png"
import imageBannerMobile from "../../../assets/banner_img_about_mobile.png"
import collapseData from "../../collapse/collapseData";

export default function About() {

  const altBannerImage = "photo de montagnes"
  const textBanner = ""
  const pageWidth  = document.documentElement.scrollWidth
  if(pageWidth<576){
    imageBanner= imageBannerMobile
  }

  return ( 

    <div className="body" >

      <Banner imageBanner={imageBanner}  altBannerImage={altBannerImage} textBanner= {textBanner} />

      <main >

        { collapseData.map ((data, index) => 
          <Collapse key={index} title={data.title} text={data.text} />
        )}

      </main>

    </div>

  );
}