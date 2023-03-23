import Image from "next/image";
import Background from "../public/assets/background.jpg";

function VacBar() {
  return (
    <div className="w-full h-[80vh]">
      <Image className="w-full h-full object-cover" src={Background} alt="/" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="text-6xl py-4">Vacation Like A Tech</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            aperiam natus id voluptatem pariatur suscipit perferendis et iusto
            totam ad recusandae illum, doloribus neque distinctio molestias
            voluptas alias sequi qui?
          </p>
        </div>
      </div>
    </div>
  );
}

export default VacBar;
