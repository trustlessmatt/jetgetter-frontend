import Header from "../Header";
import jet from "../assets/jet.png";
import bp_jet from "../assets/bp_jet.PNG";
import animate from "../animate";

animate.observeAll();

const Roadmap = () => {
  return (
    <div>
      {/* outer container for all roadmap items */}
      <div className="relative">
        <Header />
        <img src={bp_jet} className="mx-auto" alt="blueprint jet" />
        {/* OG blueprint */}
        <div className="text-white font-jose w-full pt-8 bg-top bg-[url('./components/assets/blueprint.PNG')] bg-repeat">
          <div className="sm:text-[100px] text-[40px] text-center font-jose text-lounge-gold pt-8">
            OG BLUEPRINT
          </div>
          <div className="sm:mx-40 sm:px-10 px-6">
            <div>
              <p>What is the JetGetter Club ?<br /></p>
              <div className="pl-20">
                <p>
                  Web3 travel brand centered around enjoying life through travel
                  and more...
                  <br />
                  For the new wave of travelers. Securing the bag & catching
                  vibes. Living life unapologetically.
                </p>
              </div>
              <br />
              <p>Who are JetGetters ?<br /></p>
              <div className="pl-20">
                <p>
                  JetGetters are tastemakers that know the best spots around the
                  world.
                </p>
              </div>
              <br />
            </div>
            <div>
              <p>What is the JetGetter Club building ?<br /></p>
              <div className="pl-20">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    1.
                    <a href="#community">
                      <span className="underline">COMMUNITY</span>
                    </a>
                    :
                  </div>
                  <div className="col-span-2">
                    <p>We are building a community that wants to experience the
                    world.
                    <br />
                    Supporting each other, sharing experiences, and providing
                    valuable travel gems are a few things you can expect.</p>
                  </div>
                  <div>
                    2.<a href="#media">
                      <span className="underline">MEDIA</span>
                    </a>:
                  </div>
                  <div className="col-span-2">
                    <p>We are creating a media outlet to share authentic travel
                    content from and for a diverse group of people.</p>
                  </div>
                  <div>
                    3.<a href="#travel">
                      <span className="underline">TRAVEL</span>
                    </a>:
                  </div>
                  <div className="col-span-2">
                    <p>Book curated trips directly with the JetGeter Club using SOL
                    + USD.
                    <br />
                    Our partnered destinations: India, Dubai, Greece, Maldives,
                    Bhutan, and a few more...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="transition transform duration-500 opacity-0 translate-x-32" data-class-in="translate-x-0 opacity-100" data-class-out="translate-x-32 opacity-0">
              <p className="text-white pb-20">
                Jet Hodler Perks:
                <br />
                - 20 Hodlers will be gifted a vacation to one of our partnered
                destinations (details post-mint)
                <br />
                - Exclusive pricing on trip bookings through the JetGetter Club +
                any products we sell
                <br />
                - Access to the best travel community in Web3
                <br />
                - A 3D NFT of a Jet created by a Jeweler
                <br />- Community wallet providing rewards for all Jet Hodlers
              </p>
              <br /><br />
            </div>
          </div>
          <img src={jet} className="mx-auto" alt="gold jet" />
          {/* expanded blueprint */}
          <div className="text-[80px] py-6 text-center font-jose text-lounge-gold">
            EXPANDED BLUEPRINT
          </div>
          <div className="mx-40 px-10">
            <div>
              <p><span className="underline">INTRODUCTION</span>{" "}🛬</p>
              <br />
              <div className="transition transform duration-500 opacity-0 translate-x-32" data-class-in="translate-x-0 opacity-100" data-class-out="translate-x-32 opacity-0">
                <p>
                  Once in a lifetime experiences should be for everyone. For the
                  average person, traveling to another state can already be a
                  tall task let alone another country or around the world. As
                  the tourism industry bounces back and grows, we believe travel
                  should be accessible to everyone. Others may want to keep it
                  as a fantasy or believe it's something only wealthy or retired
                  people can do. Fuck that. We're here to see everyone
                  experience the world.
                  <br />
                  <br />
                </p>
                <p>
                  With over a decade facilitating experiences around the world &
                  generations in the travel industry, we are pioneering travel
                  in Web3. While others just look to make a profit & the rest
                  want to keep it out of reach, we're a group of passionate
                  travelers that wants to connect the world. Our philosophy is
                  simple: Traveling will change your life.
                  <br />
                  <br />
                </p>
                <p>
                  This is NOT an investment opportunity, moon play, passive
                  income, or anything like that. Think of it as replacing travel
                  credit card perks & shit. Your NFT is an exclusive access pass
                  to a growing brand & community in this space, one that will
                  reward its holders, provide value to the ecosystem, and have
                  everyone enjoying life while we do it.
                </p>
              </div>
              <br />
              <p><span className="underline">30 SECONDS IN AN ELEVATOR</span>⏱</p><br />
              <div className="transition transform duration-500 opacity-0 translate-x-32" data-class-in="translate-x-0 opacity-100" data-class-out="translate-x-32 opacity-0">
                <p>
                  "What is JetGetter Club ?"
                  <br />
                  <br />
                </p>
                <p>
                  A Brand utilizing Web3 to make travel accessible & build the
                  dopest travel community in the world. <br />
                  <br />
                </p>
                <p>
                  "How ?"
                  <br />
                  <br />
                </p>
                <p>
                  Accepting crypto for curated travel bookings & creating a
                  platform to provide resources for the best experiences in the
                  world.
                  <br />
                  <br />
                </p>
              </div>
              <br />
              <p><span className="underline">WHY JETGETTER ?</span> 🛩 </p><br />
              <div className="transition transform duration-500 opacity-0 translate-x-32" data-class-in="translate-x-0 opacity-100" data-class-out="translate-x-32 opacity-0">
                <p>
                  We welcome all PFPs and Normies.
                  <br />
                  <br />
                </p>
                <p>
                  JetGetter Club was founded to build the best travel community
                  in Web3 & our NFTs will give you access to some of the best
                  experiences in the world. Bond with others over your passion
                  to see the world and be put on to things you never knew of
                  before. This is not some cookie cutter shit either, the way we
                  see travel is about exploring cultures & places to the fullest
                  not just tourist attractions (though those are still fun).
                  When our Mint Sells out, we will be sending 20 people on a
                  trip to one of our partnered destinations. <br />
                  <br />
                </p>
                <p>
                  There is one thing we know for sure, more people need to
                  travel and more people need to be invested into crypto. Our
                  goal is to help onboard in both ways while we catch vibes
                  together. Life is about balance and doing the things that you
                  love, even if you don't travel if you believe in that ethos,
                  you're in the right place.
                  <br />
                  <br />
                </p>
                <p>
                  Accepting crypto for curated travel bookings & creating a
                  platform to provide resources for the best experiences in the
                  world.
                  <br />
                  <br />
                </p>
              </div>
              <br />
              <p><span className="underline">WHAT DOES IT MEAN TO BE A JETGETTER ?</span> 🤔</p><br />
              <div className="transition transform duration-500 opacity-0 translate-x-32" data-class-in="translate-x-0 opacity-100" data-class-out="translate-x-32 opacity-0">
                <p>
                  It's a lifestyle, rep your PFP online & do JetGetter shit IRL.
                  <br />
                  <br />
                </p>
                <p>
                  Simply put, you're a dope individual that knows how to enjoy
                  life. You're a tastemaker. You're open minded. You want to
                  experience the most you can in this life. You like good food.
                  You like to learn about other cultures & you use all these
                  things to shape your perspective in life. Lastly, you
                  understand the balance between wealth and enjoying the fruits
                  of your labor & if you're none of these things but want to
                  learn, we're here to welcome you. <br />
                  <br />
                </p>
                <p>
                  There's much more to being a JetGetter but we'll let our
                  community determine what that means.
                  <br />
                  <br />
                </p>
              </div>
              <br />
              <p><span className="underline">WHAT ARE WE BUILDING ?</span> 🧱</p><br />
              <div className="pl-20">
                <div className="grid grid-cols-3 gap-3">
                  <div id="community">
                    1. <span className="underline">COMMUNITY</span>:
                  </div>
                  <div className="col-span-2">
                    <p>Our community will be the “Travel Influencers”, but the most
                    authentic ones you've come across. People coming together to
                    share their experiences with others, learn from one another,
                    form bonds that may lead to taking trips together, meetups
                    when you're in each others' cities, and just an overall
                    place to have fun around similar interests.</p>
                  </div>
                  <div id="media">
                    2. <span className="underline">MEDIA</span>:
                  </div>
                  <div className="col-span-2">
                    <p>How do we showcase our community as the tastemakers of Web3?
                    We build & use our platform to showcase our expertise by
                    providing quality travel content that is authentic &
                    informative. We'll be looking for video editors & quality
                    content created to be featured on various social media
                    pages. This is an opportunity for us to create partnerships,
                    reward & showcase members of our community, bring some
                    realness to the travel industry and grow the overall brand.
                    Aside from creating content, there has been a rising desire
                    from our community to put all the info we share in discord
                    in a consolidated way. Post mint we'll explore building a
                    social media-like platform to have all the information
                    stored in an easily accessible way.</p>
                  </div>
                  <div id="travel">
                    3. <span className="underline">TRAVEL</span>:
                  </div>
                  <div className="col-span-2">
                    <p>This is the alpha you've been waiting for. We are suppliers
                    of full vacation packages in a number of countries including
                    India, Dubai, Greece, Maldives, and Bhutan. What that mean
                    is we already have partnerships with airlines, hotels,
                    drivers, and guides where we have curated itineraries that
                    are customizable based on your interests upon your request.
                    Our partnerships with airlines for booking flights are
                    currently only for those flying out of the US but anyone
                    international can still take advantage of everything else in
                    any of those destinations. These trips are also perfect for
                    NFT communities to connect IRL as we can service up to a 500
                    person trip.</p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
