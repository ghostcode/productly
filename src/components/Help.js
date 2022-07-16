
import Message from './Message'

function Help() {
  return (
    <div className="pt-56 pb-96  bg-gradient-to-b from-orange-100">
      <div className="lg:container lg:mx-auto relative">
        <div className="flex flex-col items-center">
          <h4 className="mb-6 text-4xl">Need a super hero?</h4>
          <p className="mb-12 text-base text-cyan-800">
            Do you require some help for your project: Conception workshop,
            prototyping, marketing strategy, landing page, Ux/UI?
          </p>
          <div className="btn-primary">Contact our expert</div>
        </div>
        <Message />
      </div>
    </div>
  );
}

export default Help