import { SignInButton } from "@clerk/nextjs";
function Signin() {
  return (
    <SignInButton mode="modal">
      <button
        className="text-sm font-semibold text-shop_light_color cursor-
pointer hover:text-shop_dark_color hover-effect"
      >
        Login
      </button>
    </SignInButton>
  );
}
export default Signin;
