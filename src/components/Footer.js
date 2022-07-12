import Logo from '../assets/logo.png'

function Footer() {
  return (
    <div className="lg:container lg:mx-auto flex justify-between border-t-2 pt-24 pb-24 border-slate-300">
      <img className="w-44 h-8" src={Logo} alt="" />
      <dl className="leading-8">
        <dt className="mb-9 text-2xl">Quick Links</dt>
        <dd>About Us</dd>
        <dd>Blog</dd>
        <dd>Contact</dd>
        <dd>FAQ</dd>
      </dl>
      <dl className="leading-8">
        <dt className="mb-9 text-2xl">Legal Stuff</dt>
        <dd>Disclaimer</dd>
        <dd>Financing</dd>
        <dd>Privacy Policy</dd>
        <dd>Terms of Service</dd>
      </dl>
      <div className="flex flex-col justify-between">
        <p className="text-2xl">
          knowing you're always on the best energy deal.
        </p>
        <input
          className="h-12 border p-2"
          type="text"
          placeholder="Enter your phone Number"
        />
        <div className="flex items-center justify-center w-32 h-10 rounded-md bg-amber-400 text-white">
          Sign up Now
        </div>
      </div>
    </div>
  );
}

export default Footer