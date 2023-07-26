import homepage_sticker from "../assets/images/homepage_sticker.png";

function HomePage() {
  return (
    <div className="w-2/4 mx-auto">
      <div className="flex flex-col justify-center items-center">
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
        <hr className="w-full border-t border-dashed border-primary-500/50 my-8" />
        <div className="text-secondary-300 flex flex-col items-center space-y-3">
          <p className="text-justify cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            culpa repellat officiis, eligendi velit nisi veniam, fugit corrupti
            voluptates consequuntur quod consectetur autem aut nesciunt est.
            Labore enim eos nobis!
          </p>
          {/* TODO: Make it a dynamic component */}
          <button className="w-full px-8 py-1.5 rounded-lg bg-secondary-700 shadow-md hover:bg-primary-500 hover:text-gray-200 hover:-translate-y-1 transition-all">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
