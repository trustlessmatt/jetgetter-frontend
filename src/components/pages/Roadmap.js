import Header from "../Header";
import jet from "../assets/jet.png";
// import animate from "../animate";

// team pfps
import matt from "../assets/6695-dead.jpg";
import maanz from "../assets/9460-dead.png";
import twenty8G from "../assets/28G.jpeg";
import travel_og from "../assets/travel_og.jpeg";

// smooth scrolling
import { Link } from "react-scroll";

const Roadmap = () => {
  // animate.observeAll();

  return (
    <div className="bg-lounge-white-couch">
      {/* outer container for all roadmap items */}
      <div className="relative">
        <Header />
        {/* OG blueprint */}
        <div className="bg-top bg-[url('./components/assets/blueprint.PNG')] bg-no-repeat">
          <div className="text-white w-full pt-60">
            <div className="md:text-[90px] text-[40px] text-center font-jose text-lounge-gold pt-8">
              BLUEPRINT
            </div>
            <div className="md:text-[30px] text-[18px] text-center font-jose text-lounge-gold pt-2">
              (Click gold elements to jump to details in Expanded Blueprint)
            </div>
            <div className="lg:mx-60 md:mx-20 px-10">
              <div>
                <p className="py-8">
                  <em>What is the JetGetter Club ?</em>
                  <br />
                </p>
                <div className="md:pl-20">
                  <p>
                    Web3 travel brand centered around enjoying life through
                    travel and more...
                  </p>
                </div>
                <br />
                <p className="py-8">
                  <em>Who are JetGetters ?</em>
                  <br />
                </p>
                <div className="md:pl-20">
                  <p>
                    JetGetters are tastemakers that know the best spots around
                    the world.
                  </p>
                </div>
                <br />
              </div>
              <div>
                <p className="py-8">
                  <em>What is the JetGetter Club building ?</em>
                  <br />
                </p>
                <div className="md:pl-20">
                  <div className="md:grid md:grid-cols-3 md:gap-3">
                    <div>
                      <Link
                        to="community"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                      >
                        <span className="text-lounge-gold hover:cursor-pointer">
                          COMMUNITY:
                        </span>
                      </Link>
                    </div>
                    <div className="md:col-span-2">
                      <p>
                        We are building a community that wants to experience the
                        world.
                        <br />
                        Supporting each other, sharing experiences, and
                        providing valuable travel gems are a few things you can
                        expect.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="media"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                      >
                        <span className="text-lounge-gold hover:cursor-pointer">
                          MEDIA:
                        </span>
                      </Link>
                    </div>
                    <div className="col-span-2">
                      <p>
                        We are creating a media outlet to share authentic travel
                        content from and for a diverse group of people.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="travel"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                      >
                        <span className="text-lounge-gold hover:cursor-pointer">
                          TRAVEL:
                        </span>
                      </Link>
                    </div>
                    <div className="col-span-2">
                      <p>
                        Book curated trips directly with the JetGeter Club using
                        SOL + USD.
                        <br />
                        Our partnered destinations: India, Dubai, Greece,
                        Maldives, Bhutan, and a few more...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
              // className="transition transform duration-500 opacity-0 translate-x-32"
              // data-class-in="translate-x-0 opacity-100"
              // data-class-out="translate-x-32 opacity-0"
              >
                <p className="text-white py-8">Jet Hodler Perks:</p>
                <p className="pb-20">
                  - 20 Hodlers will be gifted a vacation to one of our partnered
                  destinations (details post-mint)
                  <br />
                  - Exclusive pricing on trip bookings through the JetGetter
                  Club + any products we sell
                  <br />
                  - Access to the best travel community in Web3
                  <br />- A 3D NFT of a Jet created by a Jeweler
                </p>
              </div>
              <div className="my-2">
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  <div className="text-lounge-gold sm:text-[40px] text-[22px] pb-8 font-caveat hover:cursor-pointer">
                    Click Here To Meet Our Dope Team 🌈
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* expanded blueprint */}
          <div className=" bg-lounge-white-couch">
            <img src={jet} className="mx-auto px-28" alt="gold jet" />
            <div className="lg:mx-60 md:mx-20 px-10 text-slate-700">
              <div>
                <p>
                  <em>
                    For the new wave of travelers. Securing the bag & catching
                    vibes. Living life unapologetically.
                  </em>
                  <br />
                  <br />
                </p>
                <p>
                  <span>INTRODUCTION 🛬</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    Once in a lifetime experiences should be for everyone. For
                    the average person, traveling to another state can already
                    be a tall task let alone another country or around the
                    world. As the tourism industry bounces back and grows, we
                    believe travel should be accessible to everyone. Others may
                    want to keep it as a fantasy or believe it's something only
                    wealthy or retired people can do. Fuck that. We're here to
                    see everyone experience the world.
                    <br />
                    <br />
                  </p>
                  <p>
                    With over a decade facilitating experiences around the world
                    & generations in the travel industry, we are pioneering
                    travel in Web3. While others just look to make a profit &
                    the rest want to keep it out of reach, we're a group of
                    passionate travelers that wants to connect the world. Our
                    philosophy is simple: Traveling will change your life.
                    <br />
                    <br />
                  </p>
                  <p>
                    This is an investment in enhancing your life. Think of it as
                    replacing travel credit card perks & shit. Your NFT is an
                    exclusive access pass to a growing brand & community in this
                    space, one that will reward its holders, provide value to
                    the ecosystem, and have everyone enjoying life while we do
                    it.
                  </p>
                </div>
                <br />
                <p>
                  <span>30 SECONDS IN AN ELEVATOR ⏱</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    <em>"What is JetGetter Club ?"</em>
                    <br />
                    <br />
                  </p>
                  <p>
                    A Brand utilizing Web3 to make travel accessible & build the
                    dopest travel community in the world. <br />
                    <br />
                  </p>
                  <p>
                    <em>"How ?"</em>
                    <br />
                    <br />
                  </p>
                  <p>
                    Accepting crypto for curated travel bookings & creating a
                    platform to provide resources for the best experiences in
                    the world.
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>WHY JETGETTER ? 🛩</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    We welcome all PFPs and Normies.
                    <br />
                    <br />
                  </p>
                  <p>
                    JetGetter Club was founded to build the best travel
                    community in Web3 & our NFTs will give you access to some of
                    the best experiences in the world. Bond with others over
                    your passion to see the world and be put on to things you
                    never knew of before. This is not some cookie cutter shit
                    either, the way we see travel is about exploring cultures &
                    places to the fullest not just tourist attractions (though
                    those are still fun). When our Mint Sells out, we will be
                    sending 20 people on a trip to one of our partnered
                    destinations. <br />
                    <br />
                  </p>
                  <p>
                    There is one thing we know for sure, more people need to
                    travel and more people need to be invested into crypto. Our
                    goal is to help onboard in both ways while we catch vibes
                    together. Life is about balance and doing the things that
                    you love, even if you don't travel if you believe in that
                    ethos, you're in the right place.
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>WHAT DOES IT MEAN TO BE A JETGETTER ? 🤔</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    It's a lifestyle, rep your PFP online & do JetGetter shit
                    IRL.
                    <br />
                    <br />
                  </p>
                  <p>
                    Simply put, you're a dope individual that knows how to enjoy
                    life. You're a tastemaker. You're open minded. You want to
                    experience the most you can in this life. You like good
                    food. You like to learn about other cultures & you use all
                    these things to shape your perspective in life. Lastly, you
                    understand the balance between wealth and enjoying the
                    fruits of your labor & if you're none of these things but
                    want to learn, we're here to welcome you. <br />
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
                <p>
                  <span>WHAT ARE WE BUILDING ? 🧱</span>
                </p>
                <br />
                <div className="md:pl-20">
                  <div className="md:grid md:grid-cols-3 md:gap-3">
                    <div id="community">
                      <span className="text-lounge-gold font-opensans">
                        COMMUNITY:
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="pb-2">
                        Our community will be the “Travel Influencers”, but the
                        most authentic ones you've come across. People coming
                        together to share their experiences with others, learn
                        from one another, form bonds that may lead to taking
                        trips together, meetups when you're in each others'
                        cities, and just an overall place to have fun around
                        similar interests.
                      </p>
                    </div>
                    <div id="media">
                      <span className="text-lounge-gold font-opensans">
                        MEDIA:
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="pb-2">
                        How do we showcase our community as the tastemakers of
                        Web3? We build & use our platform to showcase our
                        expertise by providing quality travel content that is
                        authentic & informative. We'll be looking for video
                        editors & quality content created to be featured on
                        various social media pages. This is an opportunity for
                        us to create partnerships, reward & showcase members of
                        our community, bring some realness to the travel
                        industry and grow the overall brand. Aside from creating
                        content, there has been a rising desire from our
                        community to put all the info we share in discord in a
                        consolidated way. Post mint we'll explore building a
                        social media-like platform to have all the information
                        stored in an easily accessible way.
                      </p>
                    </div>
                    <div id="travel">
                      <span className="text-lounge-gold font-opensans">
                        TRAVEL:
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="pb-2">
                        <em>This is the alpha you've been waiting for. </em>We
                        are suppliers of full vacation packages in a number of
                        countries including India, Dubai, Greece, Maldives, and
                        Bhutan. What that mean is we already have partnerships
                        with airlines, hotels, drivers, and guides where we have
                        curated itineraries that are customizable based on your
                        interests upon your request. Our partnerships with
                        airlines for booking flights are currently only for
                        those flying out of the US but anyone international can
                        still take advantage of everything else in any of those
                        destinations. These trips are also perfect for NFT
                        communities to connect IRL as we can service up to a 500
                        person trip.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <p>
                  <span>WHAT TO EXPECT 30-60 DAYS POST MINT ? 🔜</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    - A few days after mint out, we'll have a 24 day stake to
                    give 20 people a free trip.
                    <br />
                    - Bookings will be live on our website for the whole
                    ecosystem with JetGetters receiving exclusive pricing.
                    <br />
                    - Tokens of notable PFP projects will be announced as a form
                    of payment. <br />
                    - We'll start building a platform to consolidate the best
                    travel information collected by our community
                    <br />
                    - Open to all NFT Communities to book group trips for up to
                    500 people, let us handle the logistics of connecting your
                    community IRL
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>THE 24 DAY STAKE 🛫</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    Up until this point staking has been for a token that can be
                    redeemed for things. But what if we skipped that process?
                    <br />
                    <br />
                  </p>
                  <p>
                    We're going to test it. We had planned to give 20 people a
                    trip post mint, here's how we'll do it:
                    <br />
                    <br />
                  </p>
                  <p>
                    Two days after mint, those who want to qualify will stake &
                    lock up their jet for 24 days (If you want to unstake it
                    will be .24 SOL). After 24 days, 7 jets will be selected to
                    receive an airdrop of a 1/1 NFT designed by an artist we
                    hire. This NFT will be your booking confirmation, and the
                    destination will be in the metadata. Now you have some
                    decisions to make...
                    <br />
                    <br />
                  </p>
                  <p>
                    1. Keep your 1/1 NFT because you love the art (it will
                    always be redeemable)
                    <br />
                    2. Redeem your NFT for a trip & acquire a new NFT
                    <br />
                    3. Sell this NFT on the open market to someone that would
                    like the above options
                    <br />
                    <br />
                  </p>
                  <p>
                    This will be the first staking that only takes into account
                    the time you staked rather than the amount of tokens you
                    have. This isn't to say a token won't be coming, but we
                    think this can be a fun new way to reward our hodlers
                    immediately.
                    <br />
                    <br />
                  </p>
                  <p>
                    This process will be repeated until 20 NFTs backed by trips
                    are given out. Trips won’t be the only things backing NFTs
                    though.
                    <br />
                    <br /> What about the people that don’t get selected? All
                    good, we’ll have plenty of opportunities to earn rewards and
                    we’ll be able to see who has staked the longest even when
                    the 24 day snapshot is up.. <br />
                    <br />
                    If you buy our NFT on secondary while the 24 Day stake has
                    commenced, you can still stake right away. Our thinking here
                    is that we’ll determine who the diamond hands are by the
                    number of total days staked & we’ll have plenty for those
                    Diamond Jet Holders to come.
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>PARTNERED DESTINATIONS CONTINUED</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    We understand that all inclusive vacation packages aren't
                    for everyone; trust me we're right there with you. Our 'All
                    inclusive' is more about ensuring you get an authentic
                    experience - not cheap liquor and prepaid food within a
                    resort. The destinations we have built itineraries for and
                    are partnered with are ones that take an extra level of
                    effort to prepare for your arrival. <br />
                    <br />
                    Not every destination needs to be all inclusive or planned
                    out so much in advance, that's why the destinations we are
                    partnered with are the ones where it is better to be more
                    prepared. Preparation and local knowledge is key when
                    visiting these countries, you don't want to show up and not
                    be able to do something. The logistics behind these
                    destinations matter a lot more. <br />
                    <br />
                    The bookings will be available to everyone in SOL, USD, &
                    $DUST with holders of our Jet NFT receiving exclusive
                    pricing. Currently we are exploring how to integrate these
                    payment methods within our website.
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>INNOVATIONS & SOLUTIONS FOR THE TOURISM INDUSTRY</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    We want to put more power into the hands of our tour guides
                    and drivers. These people are the ones making the experience
                    for the tourists and usually get taken advantage of by
                    different tour companies. We are our own tour company,
                    meaning our people get paid on time and get paid well for
                    the experiences they provide.
                    <br />
                    <br />
                    We are a US based company & in the US only 33% of people
                    have an active passport. We can only imagine what those
                    numbers could be around the world.
                    <br />
                    <br />
                    When it comes to an international trip, we know there can be
                    roadblocks like having the financial ability, getting time
                    off, or just the effort that goes into planning. Now we can
                    try to write your work a note but if you can get the time
                    off, we will solve #1 & #3. The other aspect here is being a
                    part of the Solana community as individuals for so long
                    we've loved seeing stories of people winning on their plays.
                    We want to provide you an opportunity to celebrate & reflect
                    on those wins without having to convert it. This is also an
                    opportunity to use strong alt coins from NFT projects within
                    the ecosystem!
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>WHY SOLANA ? ⛓</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    We believe Solana will be the blockchain for mass adoption
                    and because we are planning to accept crypto payments we
                    want to ensure fees will be low.
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>JET RESERVE 💰</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    The Jet Reserve is our treasury that will be used to grow
                    and expand this brand. It will be initially funded with a
                    percentage from mint. From there it will be sustained by
                    revenue from our bookings, percentages from our royalties
                    and more. Let's just say we'll be making minting fun again
                    in the near future 👀
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>FUTURE STAKING 🌴</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    We plan to explore having our own coin that can be used
                    within our ecosystem. Tokenomics have not been established
                    yet but the idea will be that you can use this coin for
                    bookings, raffles, and plenty more.
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <p>
                  <span>FASHION, NOT MERCH 🕺🏽💃🏻</span>
                </p>
                <br />
                <div
                // className="transition transform duration-500 opacity-0 translate-x-32"
                // data-class-in="translate-x-0 opacity-100"
                // data-class-out="translate-x-32 opacity-0"
                >
                  <p>
                    Seems to be on every roadmap nowadays & why not? If you're a
                    part of an incredible community and brand you want to rep it
                    properly in your life. Merch can be done, but we are more
                    interested in fashion & luxury pieces.
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                {/* about the team */}
                <div id="team"></div>
                <p>
                  <span className="text-[35px]">OUR TEAM ❤️</span>
                </p>
                <br />
                <div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-3">
                    <div className="my-auto">
                      <div className="rounded-full overflow-clip sm:w-[200px] w-[150px]">
                        <img src={maanz} alt="airmaanz" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="font-caveat text-3xl underline">
                        AirMaanz
                      </span>
                      <p className="py-4">
                        Our founder Maanz comes from a background in business
                        development in startup & tech companies but travel
                        changed his life. He's also explored independent
                        ventures in the music industry, ecommerce, and travel
                        industry ranging from social media influencer to
                        creating merchandise to booking shows. His successes and
                        failures along the way is what fuels this project. The
                        travel aspect is a family affair, generations of
                        experience in the industry has led to us being the
                        suppliers for the experiences we currently offer. The
                        destinations started with the mother land (India) and
                        expanded from there specifically to places that take an
                        extra effort to plan and be in tune with the culture.
                        These itineraries have been booked in web2 for over a
                        decade, Maanz plans to use web3 to inspire more people
                        to take trips that change your life.
                      </p>
                    </div>
                    <div className="my-auto">
                      <div className="rounded-full overflow-clip sm:w-[200px] w-[150px]">
                        <img src={twenty8G} alt="28G" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="font-caveat text-3xl underline">
                        28G
                      </span>
                      <p className="py-4">
                        Our co-founder 28G likes to keep it low key because real
                        Gs move in silence ...lol. Her background is in tech,
                        philanthropy and nonprofit building teams, creating
                        strategy and partnering with CEOs & Directors to get
                        shit done. She's currently a project manager in Web3 at
                        a leading brand within the Solana ecosystem.
                      </p>
                    </div>
                    <div className="my-auto">
                      <div className="rounded-full overflow-clip sm:w-[200px] w-[150px]">
                        <img src={travel_og} alt="Travel OG" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="font-caveat text-3xl underline">
                        Travel OG
                      </span>
                      <p className="py-4">
                        The one behind the itinerary building, partnerships and
                        supply of our destinations. The connections in the
                        travel industry run deep. He started his career working
                        with his dad to facilitate travel for Bollywood
                        celebrities in India. With over 40 years of experience
                        in travel, he's been facilitating these trips for
                        individuals and groups of people for over a decade in
                        web2 and also has experience building booking systems.
                      </p>
                    </div>
                    <div className="my-auto">
                      <div className="rounded-full overflow-clip sm:w-[200px] w-[150px]">
                        <img src={matt} alt="matt" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="font-caveat text-3xl underline">
                        matt.sol
                      </span>
                      <p className="py-4">
                        Matt is our lead dev and self-proclaimed biggest fan. He
                        started out in the engineering world working a stale
                        government job and is now a full-time Web3 dev, working
                        with the likes of DeGods, Mickey DeGods, and, of course,
                        us. He's traveled internationally a few times but is
                        inspired through this project to push further outside of
                        his comfort zone and see the world.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
