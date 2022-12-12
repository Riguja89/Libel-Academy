import React from "react";
import Card from 'react-bootstrap/Card';


const Services=()=>{
    const data=[{img:"/static/images/person.svg",
                title:"Entrepreneurs",
                text:"We work whith ecosystem leaders, corporations and startups worlwide"}, {img:"/static/images/chart.svg",
                title:"Capital Markets",
                text:"We work whith ecosystem leaders, corporations and startups worlwide"},{img:"/static/images/coin.svg",
                title:"Business Plan",
                text:"We work whith ecosystem leaders, corporations and startups worlwide"},{img:"/static/images/bulb.svg",
                title:"Startups",
                text:"We work whith ecosystem leaders, corporations and startups worlwide"}]
    return(
       
        <div className="text-center py-5" id="about">
        <h6 className="title3"> WE HELP INNOVATE STARTUPS TO FIND FIX WEAK AND LAUNCH THE PRODUCT</h6>
          <h1  className="title2">
          Special outstanding service for startups
          </h1>

        <div className="text-center py-5 skillcomponent" style={{ }}>

        {data.map((dato)=>(
                    <Card style={{ width: '14rem', display:"container"}} className="sombreado m-3 center">
                        <Card.Img variant="top" className="icontech m-2 "  src={dato.img} />
                        <Card.Body>
                          <Card.Title>{dato.title}</Card.Title>    
                          <Card.Text>
                            {dato.text}
                        </Card.Text>    
                        </Card.Body>       
                    </Card>
                ))}
         
        </div>
        <hr />
        </div>
    )

}
export default Services;