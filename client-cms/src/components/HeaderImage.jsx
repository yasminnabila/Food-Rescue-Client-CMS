// import Image from "react-bootstrap/Carousel";

function Carousel() {
  return (
    // <Carousel fade>
    //   <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/header-ori.jpg"}
          alt="First slide"
        />
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Carousel;
