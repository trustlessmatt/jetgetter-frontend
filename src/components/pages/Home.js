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
          className="w-full hidden md:block absolute z-10"
          loop
        >
          <source
            alt="clouds"
            type="video/mp4"
          />
        </video>
        <img src={lounge_gif} alt="lounge" className="md:hidden absolute z-0" />
        <div className="absolute md:top-24 top-[250px] left-0 right-0 z-10 mx-auto">
          <div className="font-yellowtail text-lounge-gold text-center xl:text-[140px] lg:text-[100px] xs:text-[65px] text-[40px]">
            JetGetter Club
          </div>
        </div>
        <div className="absolute z-20 top-[340px] left-0 right-0 md:hidden">
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
            <div className="rounded-lg mx-2 p-3">
              <a href="https://magiceden.io/marketplace/jetgetter">
                <img src={magiceden} width={45} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
