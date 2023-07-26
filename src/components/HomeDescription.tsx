function HomeDescription() {
  return (
    <div className="text-secondary-300 flex flex-col items-center space-y-3">
      <p className="text-justify cursor-default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa
        repellat officiis, eligendi velit nisi veniam, fugit corrupti voluptates
        consequuntur quod consectetur autem aut nesciunt est. Labore enim eos
        nobis!
      </p>
      {/* TODO: Make it a dynamic component */}
      <button className="w-full px-8 py-1.5 rounded-lg bg-secondary-700 shadow-md hover:bg-primary-500 hover:text-gray-200 hover:-translate-y-1 transition-all">
        GitHub
      </button>
    </div>
  );
}

export default HomeDescription;
