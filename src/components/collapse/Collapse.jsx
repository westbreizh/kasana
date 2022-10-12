import { useState } from 'react'
import CollapseIcon from '@mui/icons-material/NavigateBefore'
import "./collapse.css"


export default function Collapse(props) {

  const {title, text} = props
  const [isOpen, setIsOpen] = useState(false)

    return (

        <div className="collapse_container">

            <div className="button_container" onClick= {() => {setIsOpen(!isOpen)}}   >

            <div className="collapse_button">
                <p className='collapse_label'>{title}</p>
            </div>

            {
            isOpen ? <CollapseIcon className='collapse-arrow-up'/>
            : <CollapseIcon className='collapse-arrow-down'/>
            }
            
            </div>

            {isOpen &&
                <div className="collapse_text_contenair"> 
                    <p className='collapse_text'>   {text}  </p>
                </div>}

        </div>
                
   )
};
    

