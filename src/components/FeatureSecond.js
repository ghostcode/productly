import SecondImg from '../assets/Image2.png'

function FeatureSecond() {
  return (
    <div className="lg:container lg:mx-auto flex flex-row-reverse justify-between space-x-reverse mb-24 space-x-16 items-center">
      <div className="text-zinc-600">
        <span>Effortless Validation for</span>
        <h3 className="mb-7 text-zinc-800 text-4xl">Design Professionals</h3>
        <p className="mb-5">
          The Myspace page defines the individual, his or her characteristics,
          traits, personal choices and the overall personality of the person.
        </p>
        <p className="mb-2">Accessory makers</p>
        <p className="mb-5">
          While most people enjoy casino gambling, sports betting, lottery and
          bingo playing for the fun
        </p>
        <p className="mb-2">Alterationists</p>
        <p className="mb-5">
          If you are looking for a new way to promote your business that won’t
          cost you more money,{" "}
        </p>
        <p className="mb-2">Custom Design designers</p>
        <p className="mb-5">
          If you are looking for a new way to promote your business that won’t
          cost you more money,{" "}
        </p>
      </div>
      <img className="w-1/2" src={SecondImg} alt="" />
    </div>
  );
}

export default FeatureSecond