import Banner from "../../banner/Banner"
import ListCards from "../../listCards/ListCards"
import "./home.css"
import imageBanner from "../../../assets/banner_img_home.png"

export default function Home() {

  const altBannerImage = "photo d'une forêt en montagne"
  const textBanner = " Chez vous, partout et ailleurs"
 

  return (


      <div className="body">

          <Banner imageBanner={imageBanner} altBannerImage={altBannerImage} textBanner= {textBanner} />
          
          <div className='box_list_housings'>

            <ListCards />

          </div>

      </div>

  );
}