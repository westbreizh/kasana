import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "./collapse.css"


export default function Collapse(props) {

  const {title, text} = props
  const [isOpen, setIsOpen] = useState(false)
    console.log(text)
    return (

        <div className="collapse_container">

            <div className="button_container" onClick= {() => {setIsOpen(!isOpen)}}   >

            <div className="collapse_button">
                <p className='collapse_label'>{title}</p>
            </div>

            {
            isOpen ? <ArrowDropUpIcon className='collapse-arrow'/>
            : <ArrowDropDownIcon className='collapse-arrow'/>
            }
            
            </div>

            {isOpen && <div className="collapse_text"> {text} </div>}

        </div>
                
   )
};
    

