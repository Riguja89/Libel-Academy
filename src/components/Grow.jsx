import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

const Grow=()=>{
    const data=[{img:"/static/images/astronaut.svg",
    title:"2,8K",
    text:"Launched Startups"}, {img:"/static/images/offices.svg",
    title:"140+",
    text:"Offices Worldwide"},{img:"/static/images/coins2.svg",
    title:"5,4m",
    text:"Last earnings"}, {img:"/static/images/people.svg",
    title:"3.2k",
    text:"Entrepreneurs"}]
    return(
       
        <div className="text-center p-5  row" >
            <div className="col-5 d-none d-lg-block align-self-center p-3">
            <img
              className=""
              src="/static/images/video.jpg"
              alt="profilepicture"
              width="450px"
              height="400px"
              
            />
          
          </div>
        <div className="col-6 d-none d-lg-block align-self-center p-3" style={{ }}>
        <h1  className="title2 text-start">
          We help startups launch, grow and succeed very fast
          </h1>
          <h6 className="title3 text-start">We designed special services for startups, focused on the most important issues needed to be , We designed special services for startups, focused on the most important issues needed to be</h6>
          <br />

            <Button variant="primary rounded-pill">{"Latest Projects >"}</Button>
        </div>
         <div className="text-center py-5 skillcomponent">
        {data.map((dato)=>(
                    <Card border="light" style={{ width: '12rem', display:"container"}} className="m-3 center">
                        <Card.Img variant="top" className="icontech m-2 "  src={dato.img} />
                        <Card.Body>
                          <Card.Title className="titlecard">{dato.title}</Card.Title>    
                          <Card.Text>
                            {dato.text}
                        </Card.Text>    
                        </Card.Body>       
                    </Card>
                ))}
            </div>
        </div>
    )

}
export default Grow;