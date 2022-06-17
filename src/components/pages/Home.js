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
      <div className="hidden sm:block"><Header /></div>
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
        <div className="absolute z-30 top-[400px] left-0 right-0 sm:hidden">
          <div className="flex justify-center items-center py-2 space-x-8 sm:ml-auto sm:mr-1 mx-auto">
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
            {/* Mint */}
          <div>
            <Link to="https://jetgetter-mint-final.vercel.app/">
              <p className="text-lounge-gold text-3xl font-jose">Mint</p>
            </Link>
          </div>
          </div>
        </div>
        <div className="absolute z-30 top-[450px] left-0 right-0 sm:hidden">
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
