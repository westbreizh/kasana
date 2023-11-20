import "./banner.css"

export default function Banner(props) {

    let {imageBanner, altImageBanner, textBanner} = props

    return (    

        < div className="container_banner">
            <img src={imageBanner} alt= {altImageBanner}  className="banner_img"/>
            <div className="text_banner">{textBanner}</div>
        </div>

    )
}
  
