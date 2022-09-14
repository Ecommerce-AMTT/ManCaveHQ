import Carousel from 'react-bootstrap/Carousel';

function ItemCarousel() {
  return (
    <Carousel fade >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 caro-background"
          src="../../assets/images/game-controller.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
        <h1 className='caro-text'>What We Are About: </h1>
        <p className='caro-text'>Here at MernCave HQ we are here to provide you with various products to update your current setup.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 caro-background"
          src="../../assets/images/razer.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1 className='caro-text'>Our Goal:</h1>
        <p className='caro-text'>Our goal is to set you up with the office or gaming setup of your dreams!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 caro-background"
          src="https://www.simpleimageresizer.com/_uploads/photos/5af8c226/setup_1280x850.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='caro-text'>What To Look For:</h3>
          <p className='caro-text'>
            Whether that is to replace an old mouse and keyboard, or to get a brand new monitor to render your videos or videogames at the highest quality possible,
            you can find it here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ItemCarousel;