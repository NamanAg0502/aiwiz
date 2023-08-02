import { about, support } from '@/constants/data';
import { COLORS } from '@/constants/style';
import Image from 'next/image';

const Support = () => {
  return (
    <div className={`bg-grey w-full flex justify-end items-center`}>
      <div className="flex flex-col items-start justify-between space-y-8 text-lightBlack w-1/2 mr-[12%]">
        <h1 className="text-6xl font-bold">{support.title}</h1>
        <div className="flex flex-col items-start justify-between space-y-6">
          {support.paragraph.map((item, index) => (
            <p key={index} className="text-xl">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <Image src={support.img} alt={about.title} width={500} height={500} />
      </div>
    </div>
  );
};

export default Support;
