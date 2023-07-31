import Banner from "../../components/Home/Banner";
import Description from "../../components/Home/Description";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <hr className="w-full border-t border-dashed border-primary-500/50 my-8" />
      <Description />
    </div>
  );
}

export default HomePage;
