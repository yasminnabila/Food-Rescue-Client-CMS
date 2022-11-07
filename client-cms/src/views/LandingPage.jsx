import CardCust from "../components/CardCust";
import HeaderImage from "../components/HeaderImage";
import { Container } from "react-bootstrap";
import CardPartner from "../components/CardPartner";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <HeaderImage />
      <Container className="d-flex justify-content-center p-5">
        <CardCust />
      </Container>
      <Container className="d-flex justify-content-center p-3">
        <CardPartner />
      </Container>
      <Footer />
    </>
  );
}
