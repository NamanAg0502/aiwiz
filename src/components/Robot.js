import { robot } from '@/constants/data';
import Image from 'next/image';

const Robot = () => {
  return (
    <div>
      <div className="mx-auto max-w-[80%] mt-32 flex flex-col item-center space-y-24">
        <div className="item-center">
          {robot.title.map((item, index) => (
            <h1 key={index} className="text-center text-6xl font-semibold">
              {item}
            </h1>
          ))}
        </div>
        <div className="w-full flex items-center justify-center z-50">
          <Image
            src={robot.img}
            alt="robot image"
            width={800}
            height={900}
            className="mix-blend-luminosity"
          />
        </div>
      </div>
    </div>
  );
};

export default Robot;
