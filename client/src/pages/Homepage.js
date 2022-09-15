import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Container, Button} from 'react-bootstrap'
import ItemCarousel from '../components/Carousel'

function Homepage() {
    return (
        <>
        <ItemCarousel/>
        <Container>
        <h1 className=" text-center mt-5" style={{color:"white"}}>Featured Items:</h1>
        <hr></hr>
        <Card className="p-2 m-3 text-center hover-card" style={{width: '16rem', background:
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
