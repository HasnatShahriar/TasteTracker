import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const NavItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/allFoods'>All Foods</Link></li>
    <li><Link to='/gallery'>Gallery</Link></li>
  </>

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .then(error => console.error(error))
  }

  return (
    <div className="navbar bg-base-100">
       <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-blue-600 font-extrabold">TasteTracker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            {
              !user && <li>
                <Link to='/login'><div>Login</div></Link>
              </li>
            }
          </ul>

          {
            user &&
            <div className="flex gap-4 items-center">
              <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full' title={user?.displayName}>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <Link to='/add-job' >My added food items</Link>
                  </li>
                  <li>
                    <Link to='/my-posted-jobs'>Add a food item</Link>
                  </li>
                  <li>
                    <Link to='/my-bids'>My ordered food items</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className=''>
                  <button onClick={handleLogOut} className='btn btn-outline'>Logout</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;