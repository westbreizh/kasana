import Header from "../../header/Header";
import Footer from "../../footer/Footer"
import Banner from "../../banner/Banner"
import ListCards from "../../listCards/ListCards"
import "./home.css"
import imageBanner from "../../../assets/banner_img_home.png"

export default function Home() {

  const altBannerImage = "photo d'une forêt en montagne"
  const textBanner = " Chez vous, partout et ailleurs"
 

  return (
  
    <div>
      <Header />

      <div className="body">

          <Banner imageBanner={imageBanner} altBannerImage={altBannerImage} textBanner= {textBanner} />
          
          <main className='box_list_housings'>

            <ListCards />

          </main>

      </div>

      <Footer />
    </div>
  );
}