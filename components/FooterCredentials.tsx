import Logo from "./Logo";
function FooterCredentials() {
  return (
    <div className="py-6 border-t text-center text-sm text-gray-600">
      <div>
        &copy; {new Date().getFullYear()} <Logo className="text-sm" /> All
        rights reserved.
      </div>
    </div>
  );
}
export default FooterCredentials;
