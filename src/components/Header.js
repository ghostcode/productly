
import Logo from '../assets/logo.png'

function Header() {
  return (
    <div className="lg:container lg:mx-auto flex flex-row items-center justify-between flex-nowrap h-20">
      <img className="w-40 h-8" src={Logo} alt="productly" />
      <div className="flex flex-row">
        <ul className="flex items-center justify-center space-x-8 mr-12">
          <li>Product</li>
          <li>Customers</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="flex flex-row">
          <div className="flex items-center justify-center w-24 h-12  text-center rounded-md border mr-3.5">
            Sign In
          </div>
          <div className="flex items-center justify-center w-24 h-12 text-center text-white rounded-md border bg-amber-400 border-amber-400">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header