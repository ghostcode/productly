
function Category() {
  return (
    <div className="lg:container lg:mx-auto flex flex-col items-center mb-32">
      <p className="mb-14 text-center text-4xl">We design tools to unveil your superpowers</p>
      <div className="flex justify-between space-x-16 mb-8">
        <dl>
          <dt className="w-12 h-12 mb-8 bg-purple-700 rounded-2xl shadow-lg shadow-purple-300"></dt>
          <dt className="text-xl mb-4">First click tests</dt>
          <dd className="text-zinc-600 text-base">
            While most people enjoy casino gambling.
          </dd>
        </dl>
        <dl>
          <dt className="w-12 h-12 mb-8 bg-amber-400 rounded-2xl shadow-lg shadow-amber-200"></dt>
          <dt className="text-xl mb-4">Design surveys</dt>
          <dd className="text-zinc-600 text-base">
            Sports betting, lottery and bingo playing for the fun.
          </dd>
        </dl>
        <dl>
          <dt className="w-12 h-12 mb-8 bg-rose-600 rounded-2xl shadow-lg shadow-rose-300"></dt>
          <dt className="text-xl mb-4">Preference tests</dt>
          <dd className="text-zinc-600 text-base">
            The Myspace page defines the individual.
          </dd>
        </dl>
        <dl>
          <dt className="w-12 h-12 mb-8 bg-blue-400 rounded-2xl shadow-lg shadow-blue-100"></dt>
          <dt className="text-xl mb-4">Five second tests</dt>
          <dd className="text-zinc-600 text-base">
            Personal choices and the overall personality of the person.{" "}
          </dd>
        </dl>
      </div>
      <div className="flex items-center justify-center w-44 h-14 mr-6 bg-amber-400 rounded-md text-white cursor-pointer">
        SIGN UP NOW
      </div>
    </div>
  );
}

export default Category