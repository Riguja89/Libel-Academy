import React from "react";
import Container from "react-bootstrap/Container";

const Home=()=>{

    return(
        <div className="py-5" id="home" style={{
            background: `linear-gradient(45deg, rgb(150, 68, 206), rgb(19, 229, 204))`,
          
          }}>
        <Container className="text-center py-5">
          <h1  className="title1">
          Empowering Startups
          </h1>
          {/* <Typist> */}
            <div className="lead typist text-center py-5 ">
            <p className="text-white">Providing our clients with the strategic guidance to make the right technology and businesess decisions. We will hell you develop the best operational processes for ypur startup</p>
            </div>
          {/* </Typist> */}
       
          <img
              className="border border-secondary rounded-circle my-5"
              src="/static/images/display.jpg"
              alt="profilepicture"
              width="100px"
              height="100px"
            />
           
          
        </Container>
        </div>
    )

}
export default Home;