import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="text-white">
        <nav className="container mx-auto py-3 flex justify-between items-center mt-3 h-20">
          <div className = "flex justify-center items-center space-x-10 py-2 pl-8 pr-8 bg-white bg-opacity-30 rounded-md">
            <Link href="/play" passHref>
            <Image src = "/images/playing_cards.svg" alt = "play" width={50} height={50}/>
            </Link>
            <Link href="/account" passHref>
            <Image src = "/images/group.svg" alt = "friends" width={50} height={50}/>
            </Link>
            <Link href="/settings" passHref>
            <Image src = "/images/account_circle.svg" alt = "account_settings" width={50} height={50}/>
            </Link>
          </div>
        </nav>
      </header>
    );
}