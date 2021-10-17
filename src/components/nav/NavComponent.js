import React from "react";
import { useDispatch } from 'react-redux'
import { startLogout } from '../..//actions/auth';

export const NavComponent = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
        dispatch(startLogout());
    }
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-6 mb-md-0 text-alig-left">
        <img
          src={`./assets/Logo.png`}
          className="headercontainer__Logo-img"
          alt=".."
        />
      </div>
      <div className="col-lg-8 col-md-6 mb-6 mb-md-0 text-alig-right">
        <ul className="headercontainer__nav d-flex justify-content-end">
          <li>
            <a href="#!">Welcome</a>
          </li>
          <li>
            <a href="#!">Dropdown</a>
          </li>
          <li>
            <a href="#!">Left Sidebar</a>
          </li>
          <li>
            <a href="#!">Right Sidebar</a>
          </li>
          <li>
            <a href="#!" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
