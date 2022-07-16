
import Avator from '../assets/Avator.png'

function Message() {
  return (
    <div className="absolute">
      <span className="relative left-14 px-9 py-4 rounded-3xl text-black bg-white ">I can take care of your pitch</span>
      <img className="w-24 h-24" src={Avator} alt="" />
    </div>
  );
}

export default Message
