import React from "react";
import { NavLink } from "react-router-dom";

function Introduction() {
  return (
    <div className="space-y-10">
      <h1 className="text-center text-4xl text-primary-500">Dashboard</h1>
      <div className="space-y-4">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          eligendi nesciunt sint quis incidunt exercitationem sunt sapiente
          mollitia quibusdam porro provident optio ad deserunt aliquam, nostrum,
          modi dolores quod voluptatem.
        </p>
        <NavLink to="/reports/add" className="block">
          <button className="block mx-auto px-8 py-1.5 rounded-lg bg-secondary-700 shadow-md hover:bg-primary-500 hover:text-gray-200 hover:-translate-y-1 transition-all">
            Yeni Rapor Ekle
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Introduction;
