import { Link } from "react-router-dom";

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
        <div className="hidden md:block">
          <Header />
        </div>
        <video
          src={lounge_mp4}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          className="w-full hidden md:block absolute z-10"
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
        <img src={lounge_gif} alt="lounge" className="md:hidden absolute z-0" />
        <div className="absolute md:top-24 top-[280px] left-0 right-0 z-30 mx-auto">
          <div className="font-yellowtail text-lounge-gold text-center xl:text-[140px] lg:text-[100px] xs:text-[65px] text-[40px]">
            JetGetter Club
          </div>
        </div>
        <div className="absolute z-30 top-[380px] left-0 right-0 md:hidden">
          <div className="flex justify-evenly items-center py-2 md:ml-auto md:mr-1 mx-auto">
            {/* Home */}
            <div>
              <Link to="/">
                <p className="text-lounge-gold text-3xl font-jose">Home</p>
              </Link>
            </div>
            {/* Blueprint */}
            <div>
              <Link to="/blueprint">
                <p className="text-lounge-gold text-3xl font-jose">Blueprint</p>
              </Link>
            </div>
            {/* Stake */}
            <div>
              <a href="https://hangar.jetgetterclub.com">
                <p className="text-lounge-gold text-3xl font-jose">Stake</p>
              </a>
            </div>
            {/* Mint */}
            <div>
              {/* <a href="https://jetgetter-mint-final.vercel.app/"> */}
                <p className="text-lounge-gold/30 text-3xl font-jose hover:cursor-not-allowed">Mint</p>
              {/* </a> */}
            </div>
          </div>
        </div>
        <div className="absolute z-30 top-[440px] left-0 right-0 md:hidden">
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
