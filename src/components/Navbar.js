import { navbar } from '@/constants/data';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-transparent py-10">
      <Image src={navbar.brand} alt={navbar.title} width={54} height={54} />
    </div>
  );
};

export default Navbar;
