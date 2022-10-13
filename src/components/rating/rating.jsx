import StarIcon from '@mui/icons-material/Star';
import "./rating.css"


export default function rating (props){
    const ratingNumber= props.ratingNumber
    const colorStarNumberArray=[]
    const greyStarNumberArray=[]

    for (let i=0; i< ratingNumber; i++){
        colorStarNumberArray.push(i)
    }
    for (let i=0; i< (5-ratingNumber); i++){
        greyStarNumberArray.push(i)
    }

    return(
        <div className='star_contenair'>
            {colorStarNumberArray.map((index) => (
                <StarIcon key={index} className="colorStar" />))}
            {greyStarNumberArray.map((index) => (
                <StarIcon key={index} className="greyStar"  />))}           
        </div>
    )
}