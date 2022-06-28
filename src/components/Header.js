import { Link } from "react-router-dom";
import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";
import magiceden from "./assets/magiceden.png";

const Header = () => {
  return (
    <div className="bg-transparent pt-10 absolute z-30 top-0 left-0 right-0">
      {/* outer header container */}
      <div className="flex items-center px-8">
        {/* header left - social icons */}
        <div className="hidden sm:flex sm:items-center">
          {/* twitter */}
          <div className="rounded-lg mx-2">
            <a href="https://twitter.com/jetgetterclub">
              <img src={twitter} width={50} alt="twitter"></img>
            </a>
          </div>
          {/* discord */}
          <div className="rounded-lg mx-2">
            <a href="https://discord.gg/jetgetterclub">
              <img src={discord} width={50} alt="discord"></img>
            </a>
          </div>
          {/* magic eden */}
          <div className="rounded-lg mx-2 p-3 opacity-50 hover:cursor-not-allowed">
            {/* <a href="http://www.magiceden.io/marketplace/degods"> */}
            <img src={magiceden} width={45} alt="magic eden"></img>
            {/* </a> */}
          </div>
        </div>

        {/* header right: navigating pages */}
        <div className="flex items-center py-2 space-x-8 sm:ml-auto sm:mr-1 mx-auto">
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
          <div className="hover:cursor-not-allowed">
            {/* <a href="https://jetgetter-mint-final.vercel.app/"> */}
              <p className="text-lounge-gold/50 text-3xl font-jose">Mint</p>
            {/* </a> */}
          </div>
          {/* wallet connect if desired - placeholder */}
          {/* <div className="rounded-lg bg-white p-3">Connect Wallet</div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
