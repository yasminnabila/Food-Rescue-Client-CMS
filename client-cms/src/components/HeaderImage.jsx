function Carousel() {
  return (
    <img
      className="d-block w-100"
      style={{transform: "scale(115%"}}
      src={process.env.PUBLIC_URL + "/assets/header-option.jpg"}
      alt="First slide"
    />
  );
}

export default Carousel;
