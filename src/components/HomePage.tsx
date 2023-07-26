import HomeBanner from "./HomeBanner";
import HomeDescription from "./HomeDescription";

function HomePage() {
  return (
    <div className="w-2/4 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <HomeBanner />
        <hr className="w-full border-t border-dashed border-primary-500/50 my-8" />
        <HomeDescription />
      </div>
    </div>
  );
}

export default HomePage;
