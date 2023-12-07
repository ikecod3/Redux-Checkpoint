const NavBar = () => {
  return (
    <div className="w-full shadow-lg bg-gradient-to-r from-violet-500 via-pruple-300 to-blue-500">
      {/* Header section with a title for the TODO List App */}
      <div className="flex justify-center items-center gap-4 p-5 ">
        <img
          className="h-[50px] w-[50px] "
          src="https://cdn1.iconfinder.com/data/icons/productivity-aesthetics-vol-2/256/To_Do_List-512.png"
          alt="app logo"
        />
        <h1 className="font-bold text:text-2xl sm:text-4xl text-white">
          Todo-List
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
