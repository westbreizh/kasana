import "./profilHost.css"

export default function ProfilHost(props){

    const{name, picture}=props
    const nameCuted = name.replaceAll(' ', '\n')
return(
    <div className='profilHost_contenair'>
        <div className='profilHost_name'>{nameCuted}</div>
        <img className="profilHost_face" src={picture} alt= {name} />
    </div>
)

}
