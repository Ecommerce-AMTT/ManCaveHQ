import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Container, Button} from 'react-bootstrap'
import ItemCarousel from '../components/Carousel'

function Homepage() {
    return (
        <>
        <ItemCarousel/>
        <Container>
            <h1 className="m-5 text-center" style={{color:"white"}}>Our Mission:</h1>
            <p className="m-5" style={{color:'white', fontSize: "1.5rem"}}>Here at MernCave HQ, our goal is to provide you with various products to update your current setup.
            </p>
            <p className="m-5" style={{color:'white', fontSize: "1.5rem"}}>Whether that is to replace an old mouse and keyboard, or to get a brand new monitor to render your videos or videogames at the highest quality possible,
                you can find it here. 
            </p>
            <p className="m-5" style={{color:'white', fontSize: "1.5rem"}}>Our goal is to set you up with the office or gaming setup of your dreams!
            </p>
        </Container>
        <Container>
        <h1 className=" text-center" style={{color:"white"}}>Featured Items:</h1>
        <Card className="p-2 m-3 text-center" style={{width: '16rem', background:
      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898"}}>
       <Link to={`/products`}>
        <Card.Img
          alt="HP Computer Monitor"
          src="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
        />
        <Card.Text>HP Computer Monitor</Card.Text>
      </Link> 
       <div>
        <span>$149.99</span>
      </div> 
    </Card>
        </Container>
        </>
    )
}

export default Homepage
