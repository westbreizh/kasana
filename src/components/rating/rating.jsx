import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function rating (props){
    const ratingNumber= props.ratingNumber
    const fullStarNumberArray=[]
    const emptyStarNumberArray=[]

    for (let i=0; i< ratingNumber; i++){
        fullStarNumberArray.push(i)
    }
    for (let i=0; i< (5-ratingNumber); i++){
        emptyStarNumberArray.push(i)
    }

    return(
        <div>
            {fullStarNumberArray.map((index) => (
                <StarIcon key={index} />))}
            {emptyStarNumberArray.map((index) => (
                <StarBorderIcon key={index}  />))}           
        </div>
    )
}