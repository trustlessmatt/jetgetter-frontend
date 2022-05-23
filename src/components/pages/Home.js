import lounge_gif from "../assets/lounge.gif";
import lounge_mp4 from "../assets/Lounge.mp4";
import Header from "../Header";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import magiceden from "../assets/magiceden.png";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Header />
          <video
            src={lounge_mp4}
            muted
            autoPlay={"autoplay"}
            preload="auto"
            className="w-full hidden sm:block absolute z-10"
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
          <img src={lounge_gif} alt="lounge" className="sm:hidden absolute z-0" />
        <div className="absolute sm:top-20 top-[300px] left-0 right-0 z-30 mx-auto">
          <h1 className="text-lounge-gold text-center lg:text-[100px] md:text-[80px] sm:text-[60px] text-[70px]">
            JetGetter Club
          </h1>
        </div>
        <div className="absolute z-30 top-[420px] left-0 right-0 sm:hidden">
          <div className="flex items-center justify-center">
            {/* twitter */}
            <div className="rounded-lg mx-2">
              <a href="https://twitter.com/jetgetterclub">
                <img src={twitter} width={50} alt=""></img>
              </a>
            </div>
            {/* discord */}
            <div className="rounded-lg mx-2">
              <a href="https://discord.gg/jetgetterclub">
                <img src={discord} width={50} alt=""></img>
              </a>
            </div>
            {/* magic eden */}
            <div className="rounded-lg mx-2 p-3 opacity-50 hover:cursor-not-allowed">
              {/* <a href="https://discord.gg/jetgetterclub"> */}
              <img src={magiceden} width={45} alt=""></img>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
