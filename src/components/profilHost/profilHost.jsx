import Avatar from '@mui/material/Avatar';

export default function ProfilHost(props){

    const{name, picture}=props
return(
    <div>
        <div>{name}</div>
        <Avatar src={picture} alt= {name}/>
    </div>
)

}