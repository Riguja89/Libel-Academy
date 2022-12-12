import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Attract=()=>{
    const data=[{
                title:"Startups",
                value:90}, 
                {
                title:"Partnersship",
                value:70},
                {
                title:"Investors",
                value:80},]
    return(
       
        <div className="text-center p-5  row casiblanco" id="attrack">
            <div className="col-5 d-none d-lg-block align-self-center p-3">
            <h1  className="title2 text-start">
         We aim to share knowledge, attrack talent an startups
          </h1>
          <div>
            {data.map((dato)=>(
                <>
                <label htmlFor="">{dato.title} {dato.value}%</label>
                <ProgressBar style={{height: "4px",}} now={dato.value} label={`${dato.value}%`} visuallyHidden />
                </>
            ))}
          </div>
          
          
          </div>
        <div className="col-6 d-none d-lg-block align-self-center p-3" style={{ }}>

        {(
            <img
              className=""
              src="/static/images/carpeta.jpg"
              alt="profilepicture"
              width="400px"
              height="400px"
            />
          )}
        </div>
         
        <img
              className=""
              src="/static/images/difuminado.jpg"
              alt="profilepicture"
              width="350px"
              
            />
            
        </div>
    )

}
export default Attract;