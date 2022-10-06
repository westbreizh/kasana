import { useEffect, useState } from 'react';
import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import Carroussel from "../../carroussel/carroussel"

export default function Housing() {

  const [housingData, setHousingData] = useState([]);

    useEffect(() => {
        fetch('data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              }
      
          }).then(res => res.json())
            .then(result => setHousingData(result))
            .catch((error) => console.log(error));
    }, [])
  return ( 

    <div>

      <Header />

      <body className="body">

        <Carroussel />

      </body>

      <Footer />
      
    </div>
  )
}