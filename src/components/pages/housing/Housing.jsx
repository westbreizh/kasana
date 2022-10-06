import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import Carroussel from "../../carroussel/carroussel"

export default function Housing() {

  const { id } = useParams()
  const [housingData, setHousingData] = useState([])

  useEffect(() => {
    fetch('../data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }})
        .then(res => res.json())
        .then(result => {
         const data = result.find(eltSearched => eltSearched.id === id )
        setHousingData(data)
        })
        .catch((error) => console.log(error));
    }, [id])

   // console.log(housingData)

  return ( 

    <div>

      <Header />

      <body className="body">
      {housingData.pictures &&
        <Carroussel pictures={housingData.pictures}/>
      }
      </body>

      <Footer />
      
    </div>
  )
}