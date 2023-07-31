import React from "react";
import { NavLink } from "react-router-dom";

function Index() {
  return (
    <nav className="mt-5 mb-10">
      <div className="p-2 rounded-lg bg-secondary-700">
        <ul className="flex flex-row flex-wrap space-x-0 sm:space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary-500" : undefined
            }
            end
          >
            <li className="p-1.5 rounded-md hover:text-primary-500 hover:bg-secondary-800 transition-all">
              Anasayfa
            </li>
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? "text-primary-500" : undefined
            }
            end
          >
            <li className="p-1.5 rounded-md hover:text-primary-500 hover:bg-secondary-800 transition-all">
              Raporlar
            </li>
          </NavLink>
          <NavLink
            to="/reports/add"
            className={({ isActive }) =>
              isActive ? "text-primary-500" : undefined
            }
            end
          >
            <li className="p-1.5 rounded-md hover:text-primary-500 hover:bg-secondary-800 transition-all">
              Rapor Ekle
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Index;
