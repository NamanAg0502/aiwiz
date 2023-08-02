import { about } from '@/constants/data';
import { COLORS } from '@/constants/style';
import Image from 'next/image';

const About = () => {
  return (
    <div className={`bg-blueGray w-full flex justify-start items-center`}>
      <div>
        <Image src={about.img} alt={about.title} width={500} height={500} />
      </div>
      <div className="flex flex-col items-start justify-between space-y-8 text-grey w-1/2 ml-[12%]">
        <h1 className="text-6xl font-bold">{about.title}</h1>
        <p className="text-xl font-semibold">{about.tagline}</p>
        <div className="flex flex-col items-start justify-between space-y-4">
          {about.paragraph1.map((item, index) => (
            <p key={index} className="text-xl">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
