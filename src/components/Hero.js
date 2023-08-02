import { hero } from '@/constants/data';
import { COLORS } from '@/constants/style';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-trasparent pt-20">
      <div className="flex justify-between items-start">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-8xl font-bold w-1/2 leading-tight">
              {hero.title}
            </h1>
            <p className="text-2xl font-bold">{hero.tagline}</p>
          </div>
          <div>
            {hero.subtitle1.map((item, index) => (
              <p className="text-xl italic" key={index}>
                {item}
              </p>
            ))}
          </div>
          <div>
            {hero.subtitle2.map((item, index) => (
              <p className="text-2xl" key={index}>
                {item}
              </p>
            ))}
          </div>
          <div>
            <button
              className={`px-6 py-3 rounded-full border border-black text-sm bg-transparent hover:bg-lightBlack hover:text-grey duration-100`}
            >
              {hero.cta}
            </button>
          </div>
        </div>
        <div>
          <Image src={hero.img} alt={hero.title} width={720} height={720} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
