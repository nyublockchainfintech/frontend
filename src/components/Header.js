export default function Header() {
    return (
        <header className="bg-gray-800 text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="text-white text-3xl font-bold hover:text-gray-300">AppName</a>
          <div className="flex items-center space-x-4">
            <a href="/play" className="hover:text-gray-300">Play</a>
            <a href="/friends" className="hover:text-gray-300">Friends</a>
            <a href="/profile" className="hover:text-gray-300">Profile</a>
            <a href="/settings" className="hover:text-gray-300">Settings</a>
          </div>
        </nav>
      </header>
    );
}