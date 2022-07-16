import HeroImg from '../assets/hero.png'

function Hero() {
  return (
    <div className="lg:container lg:mx-auto flex items-center mb-28">
      <div>
        <h3 className="mb-3.5 text-4xl">The Design Thinking superpowers</h3>
        <p className="text-lg mb-8 text-zinc-600">
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="flex items-center">
          <div className="btn-primary mr-6">Get started</div>
          <div>
            <span>icon</span>
            <span className="text-amber-400">Watch the Video</span>
          </div>
        </div>
      </div>
      <img className="w-3/5" src={HeroImg} alt="" />
    </div>
  );
}

export default Hero