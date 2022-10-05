import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Box from '@mui/material/Box'

export default function Collapse(props) {

  const {title, text} = props
  const [isOpen, setIsOpen] = useState(false)

    return (

        <div className="collapse_container">

            <div className="button_container" onClick= {() => {setIsOpen(!isOpen)}}   >

            <div className="collapse_button">
                <p>{title}</p>
            </div>

            {
            isOpen ? <ArrowDropDownIcon/>
            : <ArrowDropUpIcon />
            }
            
            </div>

            {isOpen && <div className="collapse_content"> {text} </div>}

        </div>
                
   )
};
    

