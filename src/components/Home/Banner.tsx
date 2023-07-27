import homepage_sticker from "../assets/images/homepage_sticker.png";

function HomeContent() {
  return (
    <div className="max-w-[75ch] text-justify text-secondary-300 cursor-default">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-primary-500 text-4xl">Fonet Task</h1>
        <img
          src={homepage_sticker}
          alt="home page sticker"
          className="w-80 h-auto"
          loading="lazy"
        />
        <p className="italic bg-secondary-900 p-3 rounded-lg text-center">
          Bu task; <span className="text-primary-500">Ertuğrul Elibol</span>{" "}
          tarafından <span className="font-bold">Fonet Bilişim</span> için
          hazırlanmıştır.
        </p>
      </div>
    </div>
  );
}

export default HomeContent;
