import "./profilHost.css"

export default function ProfilHost(props){

    const{name, picture}=props
return(
    <div className='profilHost_contenair'>
        <div className='profilHost_name'>{name}</div>
        <img  src={picture} alt= {name} />
    </div>
)

}