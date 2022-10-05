import logo from "../../assets/footer_logo.png"


export default function Footer() {


    return ( 
        
        < div className="footer">

            <div className="logo_container">
                <img src={logo} alt=" logo de casa" />
            </div>
            
            <div className="texte_copiright">
            © 2020 Kasa. All rights reserved 
            </div>

        </div>
            
  
    )
  }