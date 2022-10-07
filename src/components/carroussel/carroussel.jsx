import  { useState } from "react"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default function Carroussel(props){

let [index, setIndex] = useState(0)
const arrayPictures= props.pictures
const picture = arrayPictures[index]
const lenghtArray = arrayPictures.length

function indexLessOne() {
  index===0? index=lenghtArray-1 : index-=1;
  setIndex(index);
}

function indexAndOne() {
    index===lenghtArray-1? index=0 : index+=1;
    setIndex(index);
  }


    return (

        <div className="carroussel_container">

                <img src={picture} alt="différentes vues du logement" className='carroussel_picture'/>
        
                { lenghtArray>1 &&

                    <div className="icon_container">
                        <NavigateBeforeIcon onClick= {() => indexLessOne() } className="button_container" />
                        <NavigateNextIcon onClick= {() => indexAndOne() } className="button_container" />
                        <p className='caroussel_count'>{(index+1) + '/' + lenghtArray}</p>
                    </div>
                } 
        </div>
    )
    
}
