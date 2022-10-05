import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

//import './collapse.css';


export default function Collapse(props) {

    const {label, text} = props
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="collapse_container">

          <div className="button_container" onClick={ setIsOpen(!isOpen)}>

            <div className="collapse_button">
              <p>{label}</p>
            </div>

            {isOpen ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
            
          </div>

          {isOpen && <div className="collapse_content"> {text} </div>}

        </div>
      );
    };
    

