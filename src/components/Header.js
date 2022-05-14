import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";
import magiceden from "./assets/magiceden.png";

const Header = () => {
  return (
    <div className="bg-transparent pt-10 absolute z-20 top-0 left-0 right-0">
      {/* absolute z-20 */}
      {/* outer header container */}
      <div className="flex items-center px-8">
        {/* header left - social icons */}
        <div className="flex items-center">
          {/* twitter */}
          <div className="rounded-lg mx-2">
            <a href="https://twitter.com/jetgetterclub">
              <img src={twitter} width={50} alt=""></img>
            </a>
          </div>
          {/* discord */}
          <div className="rounded-lg mx-2 opacity-50 hover:cursor-not-allowed">
            {/* <a href="http://www.discord.gg/degods"> */}
              <img src={discord} width={50} alt=""></img>
            {/* </a> */}
          </div>
          {/* magic eden */}
          <div className="rounded-lg mx-2 p-3 opacity-50 hover:cursor-not-allowed">
            {/* <a href="http://www.magiceden.io/marketplace/degods"> */}
              <img src={magiceden} width={45} alt=""></img>
            {/* </a> */}
          </div>
        </div>

        {/* header right: navigating pages */}
        <div className="flex items-center py-2 space-x-8 ml-auto mr-1">
          {/* Home */}
          <div>
            <a href="/">
              <p className=" text-lounge-gold text-3xl">Home</p>
            </a>
          </div>
          {/* Blueprint */}
          <div>
            <a href="http://www.twitter.com/degodsnft">
              <p className="text-lounge-gold text-3xl">Blueprint</p>
            </a>
          </div>
          {/* Shop */}
          <div className="hover:cursor-not-allowed">
            <p className="text-lounge-gold/30 text-3xl">Shop</p>
          </div>
          {/* wallet connect if desired - placeholder */}
          {/* <div className="rounded-lg bg-white p-3">Connect Wallet</div> */}
        </div>
      </div>
      {/* <div className="absolute z-40 border border-red-500">
        <div className="mx-auto">
        <h1 className="text-lounge-gold text-center">JetGetter Club</h1></div>
      </div> */}
    </div>
  );
};

export default Header;
