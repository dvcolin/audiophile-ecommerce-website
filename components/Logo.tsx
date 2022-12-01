import Image from 'next/image';

import logo from '@/public/svgs/shared/logo.svg';

export default function Logo() {
  return <Image src={logo} alt="Logo" />;
}
