import "./profilHost.css"

export default function ProfilHost(props){

    const{name, picture}=props
return(
    <div className='profilHost_contenair'>
        <div className='profilHost_name'>{name}</div>
        <div clasName='profilHost-image_contenair'>
          <img  src={picture} alt= {name} />
        </div>
    </div>
)

}