import clouds from "./assets/clouds.mp4";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <div className="absolute z-10">
        <Header />
        <div className="flex justify-right">
          <video
            src={clouds}
            className="w-full"
            muted
            autoPlay={"autoplay"}
            preload="auto"
            // onClick={() => {
            //   transcendRef.current.scrollIntoView({ behavior: "smooth" });
            // }}
            loop
          >
            <source
              // className="z-0"
              width="100%"
              alt="clouds"
              type="video/mp4"
              // onClick={() => {
              //   transcendRef.current.scrollIntoView({ behavior: "smooth" });
              // }}
            />
          </video>
        </div>
      </div>
      <div className="relative z-20">
        <img src="/lounge.png" alt="lounge"></img>
      </div>
    </div>
  );
};

export default Home;
