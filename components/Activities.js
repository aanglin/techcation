import Image from "next/image";
import Title1 from "..//public/assets/title1.jpg";
import Title2 from "..//public/assets/title2.jpg";
import Title3 from "..//public/assets/title3.jpg";

function Activities() {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Relax</h2>
        <Image 
         className="w-full h-full object-cover relative border-4 border-white shadow-lg"
        src={Title1}
        alt="/"
         />
      </div>
      <div className="relative p-4">
        <h2 className="absolute z-10 top-[50%] left-[40%] translate-y-[-50%] text-white text-2xl font-bold">Have Fun</h2>
        <Image 
         className="w-full h-full object-cover relative border-4 border-white shadow-lg"
        src={Title2} 
        alt="/" 
        />
      </div>
      <div className="relative p-4">
        <h2 className="absolute z-10 top-[50%] left-[47%] translate-y-[-50%] text-white text-2xl font-bold">Enjoy</h2>
        <Image 
        className="w-full h-full object-cover relative border-4 border-white shadow-lg"
        src={Title3} 
        alt="/"
         />
      </div>
    </div>
  );
}

export default Activities;
