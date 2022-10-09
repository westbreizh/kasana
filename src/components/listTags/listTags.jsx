import './listTags.css'


export default function ListTags(props) {

    const tagsArray = props.tags

    return(

    <div className="listTags_contenair">

        {tagsArray.map((tag, index) => (
        <div key={index} className="tag">{tag}</div>))}

    </div>

    )
}