import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carroussel from "../../carroussel/carroussel"
import ListTags from '../../listTags/listTags';
import Rating from '../../rating/rating'
import ProfilHost from '../../profilHost/profilHost';
import Collapse from '../../collapse/Collapse';
import "./housing.css"

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

  
  return ( 

    <div className="body">

        {housingData.pictures &&
          <Carroussel pictures={housingData.pictures}/>
        }

        <div className='info-tags-rating-hostProfil_contenair'>

          <div className='info-tags_contenair'>

            <div className='infos_contenair'>
              <div className='housing_title_image'> {housingData.title}</div>
              <div className='housing_location'> {housingData.location}</div>
            </div>

            {housingData.tags &&
              <ListTags tags={housingData.tags} className="tags_contenair"/>
            }

          </div>

          <div className='hostProfil-rating_contenair'>

          {housingData.host &&
              <ProfilHost name={housingData.host.name} picture={housingData.host.picture}/>
            }

            {housingData.rating &&
              <Rating ratingNumber={housingData.rating}/>
            }

          </div>
        </div>

        {housingData.equipments&&
          <div className='collapses_contenair'> 
            <Collapse title="Description" text={housingData.description} />
            <Collapse title="Equipements" text={ housingData.equipments.join('\n')} className="housing_collapse"/>
          </div>

        }
      
    </div>
  )
}