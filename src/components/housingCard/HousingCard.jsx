import { Link } from 'react-router-dom';
import "./housingCard.css"


export default function HousingCard(props) {

    const housingData = props.housingData
    const path = `/housings/${housingData.id}`
    const imgSrc = housingData.cover;
    const title = housingData.title;

    return(
        <Link to={path} className='housing_box'>
            <img src={imgSrc} alt={title} className='housing_img'/>
            <div className='box_linear_gradient' />
            <p className='housing_title'>{title}</p>
        </Link>
    )
}
