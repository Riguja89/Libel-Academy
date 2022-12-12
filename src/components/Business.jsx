import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


const Business=()=>{
const data=[{img:"/static/images/hand-money.svg",
title:"Find a Investor",
text:"We work whith ecosystem leaders, corporations and startups worlwide"}, {img:"/static/images/schedule.svg",
title:"Build a Strategy",
text:"We work whith ecosystem leaders, corporations and startups worlwide"}]
    return(
       
        <div className="text-center py-5  row">
            <div className="text-center py-5 container row">
            <div className="col-10 d-none d-lg-block align-self-center p-3" >
          <h1  className="title2">
          All startups need to make their business work
          </h1>

          <h6 className="title3">We work with a huge pool of investors, venture capital firms and business angels</h6>
          </div>
          <div className="col-2 d-none d-lg-block align-self-center p-3" >
                <Button variant="light border border-secondary rounded-pill">{"Get Starte >"}</Button>
            </div>
          </div>
        <div className="col-7 d-none d-lg-block align-self-center p-3" style={{ }}>

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
         
        <div className={`col-lg-5 py-5`}>
        <h1  className="title2 text-start">
          Design business model an write a business plan
          </h1>

          <h6 className="title3">We designed special services for startups, focused on the most important issues needed to be solved</h6>

          <div>
          {data.map((dato)=>(
                    <Card border="light" style={{ width: '30rem', display:"container"}} className=" m-3 center">
                        <Card.Body className="container row">
                            <div className="col-3 d-none d-lg-block align-self-center">
                            <Card.Img className="icontech m-2 "  src={dato.img} />
                            </div>
                            <div className="col-8 d-none d-lg-block align-self-center text-start" >
                            <Card.Title>{dato.title}</Card.Title>    
                          <Card.Text>
                            {dato.text}
                        </Card.Text>  
                            </div>
                        
                         
                        </Card.Body>       
                    </Card>
                ))}
          </div>

            </div>
            
        </div>
    
    )

}
export default Business;