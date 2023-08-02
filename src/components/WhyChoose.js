import { support, whychoose } from '@/constants/data';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <div className={`bg-grey w-full flex justify-end items-center`}>
      <div className="flex flex-col items-start justify-between space-y-8 text-lightBlack w-1/2 mr-[12%]">
        <h1 className="text-6xl font-bold">{whychoose.title}</h1>
        <h2 className="text-xl font-semibold">{whychoose.subtitle1}</h2>
        <div className="flex flex-col items-start justify-between space-y-6">
          {whychoose.paragraph.map((item, index) => (
            <p key={index} className="text-xl">
              {item}
            </p>
          ))}
        </div>
        <h2 className="text-xl font-semibold">{whychoose.subtitle2}</h2>
      </div>
      <div>
        <Image
          src={whychoose.img}
          alt={whychoose.title}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default WhyChoose;
