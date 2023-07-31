import { ButtonTypes } from "../../app/Helpers/Enums/EnumDefinitions";
import Button from "../Button";

function HomeDescription() {
  return (
    <div className="w-full text-secondary-300 flex flex-col items-center space-y-3">
      <p className="text-justify cursor-default">
        Bu task; benim birçok şey öğrendiğim, yaparken kendimi geliştirme
        fırsatı bulduğum; çeşitliliği yüksek, karmaşıklığı fazla olan bir
        task'tı. Eksiklikleri ve iyileştirilebilir noktaları olduğunun farkında
        olarak lâkin belirli bir süre zarfında bitirilmesi istenilen bir task
        olması şartı koşulduğundan ötürü bu hâliyle teslim etmeyi uygun gördüm.
      </p>
      <p className="text-justify cursor-default">
        Hatalarım için sizlerden af diliyor ve GitHub bağlantısını aşağı kısımdaki butona entegre ederek yüksek huzurlarınıza sunuyorum.
      </p>
      <i>Ertuğrul Elibol</i>
      <a
        href="https://github.com/aiWxby/fonet-task"
        target="_blank"
        className="w-full"
      >
        <Button
          type={ButtonTypes.button}
          label="GitHub"
          buttonClasses="w-full px-8 py-1.5 rounded-lg bg-secondary-700 shadow-md hover:bg-primary-500 hover:text-gray-200 hover:-translate-y-1 transition-all"
        />
      </a>
    </div>
  );
}

export default HomeDescription;
