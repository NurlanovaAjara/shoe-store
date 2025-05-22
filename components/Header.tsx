import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import CartIcon from "./CartIcon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Signin from "./Signin";
import { currentUser } from "@clerk/nextjs/server";
async function Header() {
  const user = await currentUser();
  return (
    <header className="bg-white/70 py-5 border-b sticky top-0 z-50 backdrop-
blur-md">
      <Container className="flex items-center justify-between">
        <div
          className="w-auto md:w-1/3 flex items-center gap-2.5 justify-
start md:gap-0"
        >
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <Signin />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}
export default Header;
