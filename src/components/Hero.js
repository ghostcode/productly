import HeroImg from '../assets/hero.png'

function Hero() {
  return (
    <div className="lg:container lg:mx-auto flex items-center">
      <div>
        <h3 className="mb-8 text-4xl">The Design Thinking superpowers</h3>
        <p className="text-lg">
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="flex items-center">
          <div className="flex items-center rounded-md bg-amber-400 border-amber-400">
            Get started
          </div>
          <div>
            <span></span>
            <span>Watch the Video</span>
          </div>
        </div>
      </div>
      <img className="w-2/3" src={HeroImg} alt="" />
    </div>
  );
}

export default Hero