import '../styling.css/about.css'
export const About = ({image, para,heading, paragraph,listItems}) => {
    return (
        <div className="container">
            <div >
                <img className="img-div" src={image} alt="" />
            </div>
            <div className="aboutDiv">
                <p className="aboutTittle">{para}</p>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
                <ul class="aboutList">
                    {
                            listItems.map((item, index) =>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>

            {/* <div>  */}
               {/* <p>231 Happy Users</p> */}
               {/* <p>121 Issues Solved</p>  */}
               {/* <p>159 Good Review</p> */}
             {/* </div>   */}
        </div>

    )
}