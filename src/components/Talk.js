import { socials, talk } from '@/constants/data';
import Image from 'next/image';
import Link from 'next/link';

const Talk = () => {
  return (
    <div className="bg-blueGray w-full relative text-grey">
      <div className="h-40 w-full bg-blueGray absolute -top-24"></div>
      <div className="flex flex-col items-start space-y-8 max-w-[80%] mx-auto pt-40">
        <h1 className="text-5xl font-bold">{talk.title}</h1>
        <div className="flex flex-col items-start space-y-6">
          {talk.paragraph.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <h1>{talk.subtitle}</h1>
        <div>
          <button
            className={`px-6 py-3 rounded-full border border-black text-sm bg-transparent hover:bg-grey hover:text-lightBlack duration-100`}
          >
            {talk.cta}
          </button>
        </div>
      </div>
      <div className="h-20 w-full"></div>
      <div className="w-full flex items-center justify-center space-x-4 pb-5">
        {socials.map((item) => (
          <Link href={item.link} key={item.id}>
            <Image src={item.img} alt={item.title} width={40} height={40} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Talk;
