import HeroImg from '../assets/hero.png'

function Hero() {
  return (
    <div className="lg:container lg:mx-auto">
      <div>
        <h3>The Design Thinking superpowers</h3>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
      </div>
      <img src={HeroImg} alt="" />
    </div>
  );
}

export default Hero