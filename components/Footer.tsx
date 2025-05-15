import Container from "./Container";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import FooterCredentials from "./FooterCredentials";
function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <FooterBottom />
        <FooterCredentials />
      </Container>
    </footer>
  );
}
export default Footer;
