import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [isSignedOut, setIsSignedOut] = useState(false); 

  const handleSignOut = () => {
    setIsSignedOut(true);
   
    router.push('/');
  };

  const friendsActive = pathname === '/FriendsPage'
    ? '/images/group2.svg'
    : '/images/group.svg';

    const tablesActive = pathname === '/TablesPage'
    ? '/images/playing_cards.svg'
    : '/images/playing_cards2.svg';

    const profileActive = pathname === '/ProfilePage'
    ? '/images/account_circle2.svg'
    : '/images/account_circle.svg';

  return (
    <header className="text-white">
      <nav className="container mx-auto py-3 flex justify-between items-center mt-3 h-20">
        <div className="flex justify-center items-center space-x-10 py-2 pl-8 pr-8 bg-white bg-opacity-30 rounded-md">
          <Link href="/TablesPage" passHref>
           
              <Image src={tablesActive} alt="play" width={50} height={50} />
           
          </Link>
          <Link href="/FriendsPage" passHref>
            
            <Image src={friendsActive} alt="friends" width={50} height={50} />
            
          </Link>
          <Link href="/ProfilePage" passHref>
            
            <Image src={profileActive} alt="account_settings" width={50} height={50} />
            
          </Link>
        </div>
        {isSignedOut ? (
        
          <Link href="/" passHref className="text-white bg-white bg-opacity-10 rounded-md p-2 pl-4 pr-4">
               
            Sign In
            
          </Link>
         
        ) : (
          <button onClick={handleSignOut} className="text-white bg-white bg-opacity-10 rounded-md p-2 pl-4 pr-4">
            Sign Out
          </button>
        )}
      </nav>
    </header>
  );
  
}