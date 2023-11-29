import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="text-white">
        <nav className="container mx-auto py-3 flex justify-between items-center mt-3 h-20">
          <div className="bg-white bg-opacity-30 flex justify-start flex-grow space-x-20 py-2">
            <Link href="">
            <Image src = "/images/playing_cards.svg" alt = "play" width={50} height={50}/>
            </Link>
            <a href="/friends" className="hover:text-gray-300 font-semibold text-2xl">FRIENDS</a>
            <a href="/profile" className="hover:text-gray-300 font-semibold text-2xl">PROFILE</a>
            <a href="/settings" className="hover:text-gray-300 font-semibold text-2xl">SETTINGS</a>
          </div>
        </nav>
      </header>
    );
}