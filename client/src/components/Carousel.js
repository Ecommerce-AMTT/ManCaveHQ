import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

function ItemCarousel() {
  const { t } = useSelector((state) => {
    return state.translate;
  });

  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 caro-background'
          src='../../assets/images/game-controller.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h1 className='caro-text'>{t("Carousel:about")}: </h1>
          <p className='caro-text'>{t("Carousel:about-text")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 caro-background'
          src='../../assets/images/razer.jpg'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h1 className='caro-text'>{t("Carousel:goal")}:</h1>
          <p className='caro-text'>{t("Carousel:goal-text")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 caro-background'
          src='../../assets/images/setupCaro.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3 className='caro-text'>{t("Carousel:setup")}:</h3>
          <p className='caro-text'>{t("Carousel:setup-text")}!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ItemCarousel;
