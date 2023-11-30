import Header from '../components/Header';
import Layout from '../components/Layout';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import ListSection from '../components/ListSection';
import CommunityCard from '../components/CommunityCard';

export default function FriendsPage () {
    const handleSearch = (event) => {
        event.preventDefault();
        //search logic
      };

    const activeFriends = [   { id: 1, name: "Shubhi", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg" },
    { id: 2, name: "Shriya", status: "In-Game",  avatar: "/images/Ellipse 10pfp.svg" }, ];
    const inactiveFriends = [ { id: 3, name: "Zak", lastSeen: "1h ago",  avatar: "/images/Ellipse 10pfp.svg" },
    { id: 4, name: "Harini", lastSeen: "4h ago",  avatar: "/images/Ellipse 10pfp.svg" },];
    const communities = [ { id: 1, name: "B&F", members: "34/50" },
    { id: 2, name: "Founders", members: "12/50" }, ];

    return (
        <div>
        <Layout>
        <div className = "flex flex-row items center">
      <h1 className="text-3xl font-bold mb-4 text-white">SEARCH FOR NYU PLAYERS AND COMMUNITIES</h1>
      <button className="flex items-center justify-center bg-background-color text-white bg-white bg-opacity-10 rounded-md ml-6 px-4 h-10">
      Invite Friend
      <span className="ml-2 flex items-center justify-center">
    <Image src="/images/add.svg" width={15} height={15} alt="Filter Icon"/>
      </span>
  </button>
  <button className="flex items-center justify-center bg-background-color text-white bg-white bg-opacity-10 rounded-md ml-6 px-4 h-10">
      Create Community
      <span className="ml-2 flex items-center justify-center">
    <Image src="/images/add.svg" width={15} height={15} alt="Filter Icon"/>
      </span>
  </button>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-row justify-between">
          <ListSection title="ACTIVE FRIENDS" items={activeFriends} isActive={true} />
          <ListSection title="INACTIVE FRIENDS" items={inactiveFriends} isActive={false} />
          <div>
            <h2 className="text-xl font-bold text-white mb-2">YOUR COMMUNITIES</h2>
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </div>
     
        
        </Layout>

        </div>
    

    );
}