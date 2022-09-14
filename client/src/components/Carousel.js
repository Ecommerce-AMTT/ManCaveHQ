import Carousel from 'react-bootstrap/Carousel';

function ItemCarousel() {
  return (
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/powerful-personal-computer-gamer-rig-with-firstperson-shooter-game-on-picture-id1157159213?b=1&k=20&m=1157159213&s=612x612&w=0&h=Z3sY1M97pHENgm-4zxiHuXuDzAGKWCy3Qv9DGGvtDIU="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-in-picture-id1170073824?b=1&k=20&m=1170073824&s=612x612&w=0&h=Fhzr8t9g76QzwEYTeR_8QPU3f21PzibCmAtndcBW7GQ="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnIn0SssDhrvB5brXGnYFkzP1QGgu3x-5NQ&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ItemCarousel;