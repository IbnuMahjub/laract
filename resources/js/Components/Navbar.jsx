import { Link } from '@inertiajs/react';
import React from 'react';

const Navbar = ({ user }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost text-xl">Mrxnunu</a>
        {/* <Link href={route('')}>Mrxnunu</Link> */}
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          {!user ? (
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Link href={route('login')}>Login</Link>
              {/* <Link href={route('register')} as="button" className="ml-2">Register</Link> */}
            </div>
          ) : (
            <>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link href={route('dashboard')} as="button" className="justify-between">
                    Dashboard
                    <span className="badge">New</span>
                  </Link>
                </li>
                {/* <li><Link href={route('settings')} as="button">Settings</Link></li> */}
                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
