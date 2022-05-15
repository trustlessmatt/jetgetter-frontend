import lounge from "../assets/JetGetter_Lounge2.mp4";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <video
          src={lounge}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          className="absolute z-10 w-full"
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
        <div className="absolute top-20 left-0 right-0 z-30 mx-auto">
            <h1 className="text-lounge-gold text-center">JetGetter Club</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
