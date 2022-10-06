import  { useState } from "react"
import leftArrow from "../../assets/vector-left.png"
import rightArrow from "../../assets/vector-left.png"



export default function Carroussel(props){

const [index, setIndex] = useState(0)
const arrayPictures= props.pictures
const picture = arrayPictures[index]





    return (

    <div>
    
    <img src={picture} alt="différentes vues du logement" className='carroussel_picture'/>

    </div>
    )
    
}
