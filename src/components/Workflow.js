import { support, workflow } from '@/constants/data';
import Image from 'next/image';

const Workflow = () => {
  return (
    <div className={`bg-blueGray w-full flex justify-start items-center`}>
      <div>
        <Image
          src={workflow.img}
          alt={workflow.title}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-start justify-between space-y-8 text-grey w-1/2 ml-[12%]">
        <h1 className="text-5xl font-bold">{workflow.title}</h1>
        <p className="text-xl">{workflow.subtitle}</p>
        <p className="text-xl">{workflow.examples.title}</p>
        <ul className="flex flex-col items-start justify-between space-y-4 list-disc ml-6">
          {workflow.examples.paragraph1.map((item, index) => (
            <li key={index} className="text-xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workflow;
