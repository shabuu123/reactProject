import '../styling.css/crousel.css'
export const Crousel =({image, para, heading})=>{
    return(
 <div>
    <img src={image} alt="" />
    <p>{para}</p>
    <h2>{heading}</h2>
 </div>
    )   
}