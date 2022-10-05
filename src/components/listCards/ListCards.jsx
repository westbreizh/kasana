import { useEffect, useState } from 'react';
import HousingCard from "../housingCard/HousingCard"

export default function ListCards() {


  const [housingArray, setHousingArray] = useState([]);

    useEffect(() => {
        fetch('data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              }
      
          }).then(res => res.json())
            .then(result => setHousingArray(result))
            .catch((error) => console.log(error));
    }, [])


      return (
     
        housingArray.map((housingData) => (

          <HousingCard key={housingData.id} housingData = {housingData} />

        ))
      )
      
  }

 