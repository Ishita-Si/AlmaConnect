const Navbar = ({ user }) => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Alumni Portal</h1>
      {user && <span>{user.email}</span>}
    </nav>
  );
};

export default Navbar;
