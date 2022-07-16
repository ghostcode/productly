
import Market1 from '../assets/market-1.png'
import Market2 from '../assets/market-2.png'
import Market3 from '../assets/market-3.png'

function Market() {
  return (
    <div className="lg:container lg:mx-auto mb-32">
      <h3 className="mb-3 text-4xl">Marketing Strategies</h3>
      <p className="mb-5">
        Join 40,000+ other marketers and get proven strategies on email
        marketing
      </p>
      <ul className="flex justify-between gap-10">
        <li>
          <img className="mb-6" src={Market1} alt="" />
          <p className="text-zinc-600">By Abdullah | 03 March 2019</p>
          <p className="text-xl">
            Increasing Prosperity With Positive Thinking
          </p>
        </li>
        <li>
          <img className="mb-6" src={Market2} alt="" />
          <p className="text-zinc-600">By Abdullah | 03 March 2019</p>
          <p className="text-xl">
            Increasing Prosperity With Positive Thinking
          </p>
        </li>
        <li>
          <img className="mb-6" src={Market3} alt="" />
          <p className="text-zinc-600">By Abdullah | 03 March 2019</p>
          <p className="text-xl">
            Increasing Prosperity With Positive Thinking
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Market