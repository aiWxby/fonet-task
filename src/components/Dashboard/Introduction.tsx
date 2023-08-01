import { NavLink } from "react-router-dom";
import { ButtonTypes } from "../../app/Helpers/Enums/EnumDefinitions";

import Button from "../Button";

function Introduction() {
  return (
    <div className="space-y-10">
      <h1 className="text-center text-4xl text-primary-500">Raporlar</h1>
      <div className="space-y-4">
        <p className="text-center text-secondary-300">
          <i>Task'ın asıl bölümüne hoş geldin, yabancı!</i>
        </p>
        <p className="text-justify text-secondary-300">
          Bu sayfada; verileri aşağıdaki{" "}
          <span className="text-primary-500">MUIDatatables</span> ile
          görüntüleyebilir ve sıralayabilirsin. Şayet yeni bir rapor eklemek
          istersen, aşağıdaki "
          <span className="text-primary-500">Yeni Rapor Ekle</span>" butonunu
          kullanarak, rapor ekleme sayfasına doğrudan gidebilirsin.
        </p>
        <NavLink to="/reports/add" className="block">
          <Button
            type={ButtonTypes.button}
            label="Yeni Rapor Ekle"
            buttonClasses="block mx-auto px-8 py-1.5 rounded-lg bg-secondary-700 shadow-md hover:bg-primary-500 hover:text-gray-200 hover:-translate-y-1 transition-all"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Introduction;
