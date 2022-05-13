import lounge from "./assets/JetGetter_Lounge.mp4";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="absolute z-10">
          <video
            src={lounge}
            muted
            autoPlay={"autoplay"}
            preload="auto"
            // onClick={() => {
            //   transcendRef.current.scrollIntoView({ behavior: "smooth" });
            // }}
            loop
          >
            <source
              alt="clouds"
              type="video/mp4"
              // onClick={() => {
              //   transcendRef.current.scrollIntoView({ behavior: "smooth" });
              // }}
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
