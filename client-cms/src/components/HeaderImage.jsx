function Carousel() {
  return (
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/assets/header-ori.jpg"}
      alt="First slide"
    />
  );
}

export default Carousel;
