import Container from "./Container";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </footer>
  );
}
export default Footer;
