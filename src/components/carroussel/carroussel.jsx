import  { useState } from "react"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import "./carroussel.css"

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
                        <NavigateBeforeIcon onClick= {() => indexLessOne() } className="button_backward"  sx ={{width:'25%', height:'25%'}} />
                        <NavigateNextIcon onClick= {() => indexAndOne() } className="button_forward" sx ={{width:'25%', height:'25%'}} />
                        <p className='caroussel_index'>{(index+1) + '/' + lenghtArray}</p>
                    </div>
                } 
        </div>
    )
    
}
