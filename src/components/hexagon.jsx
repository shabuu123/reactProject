import '../styling.css/hexagon.css'
export const  Hexagon = ({svg, h2,p})=>{
    return(
        <div>
            <svg>{svg}</svg>
            <h2>{h2}</h2>
            <p className='para'>{p}</p>
        </div>
    )

}