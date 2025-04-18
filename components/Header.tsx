import Container from "./Container";
import Logo from "./Logo";
function Header() {
  return (
    <header className="bg-white py-5">
      <Container>
        <Logo />
      </Container>
    </header>
  );
}
export default Header;
