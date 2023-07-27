import React from "react";

function index() {
  return (
    <nav className="absolute top-2.5 w-full">
      <div className="w-2/4 m-auto p-2 rounded-lg bg-secondary-700">
        <ul className="flex flex-row flex-nowrap space-x-4">
          <a href="">
            <li className="p-1.5 rounded-md hover:text-primary-500 hover:bg-secondary-800 transition-all">
              Home
            </li>
          </a>
          <a href="">
            <li className="p-1.5 rounded-md hover:text-primary-500 hover:bg-secondary-800 transition-all">
              Dashboard
            </li>
          </a>
          <a href="">
            <li className="p-1.5 rounded-md hover:text-primary-500 hover:bg-secondary-800 transition-all">
              Report Form
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default index;
