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

const About = () => {
  // animate.observeAll();

  return (
    <div className="bg-lounge-white-couch">
      {/* outer container for all roadmap items */}
      <div className="relative">
        <Header />
        {/* OG blueprint */}
        <div className="bg-top sm:bg-contain bg-[url('./components/assets/blueprint2.png')] bg-no-repeat">
          <div className="text-white w-full pt-14 sm:pt-20">
            <div className="md:text-[90px] text-[65px] text-center font-jose text-lounge-gold pt-4">
              Holder Value
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="my-2 px-8 text-[30px]">
                What can you expect when you diamond hand a diamond jet?
              </div>
              <ul className="px-8 py-4">
                <li>- Membership to an exclusive international community of travel lovers with connections & resources all over the world</li>
                <li>- Private Bookings & Experiences with benefits</li>
                <li>- Referral Bonuses when a booking happens because of you</li>
                <li>- Free trip for leading a group of 12+ people</li>
                <li>- Passive Rewards for Jets parked in The Hangar</li>
                <li>- Exclusive Merch</li>
              </ul>
              <p className="pt-6 px-8 italic">The ultimate goal is to send every holder on vacation</p>
            </div>
            <div className="lg:mx-60 md:mx-20 px-10">
              
                   
              <div className="my-2">
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  <div className="text-lounge-gold sm:text-[35px] text-[22px] pt-16 mb-20 text-center font-caveat hover:cursor-pointer">
                    🌈 Click Here To Meet Our Dope Team 
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* expanded blueprint */}
          <div className="bg-lounge-white-couch">
            <img src={jet} className="mx-auto px-28" alt="gold jet" />
            <div className="max-w-3xl mx-auto px-6 lg:px-0 text-slate-700">
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
                <br />
                {/* about the team */}
                <div id="team" className="max-w-3xl mx-auto px-6 ">
                  <p>
                    <span className="text-[35px]">OUR TEAM ❤️</span>
                  </p>
                  <br />
                  <div>
                    <div className="md:grid md:grid-cols-3 md:gap-3">
                      <div className="my-auto py-4">
                        <div className="rounded-full overflow-clip md:w-[200px] w-[150px]">
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
                          creating merchandise to booking shows. His successes
                          and failures along the way is what fuels this project.
                          The travel aspect is a family affair, generations of
                          experience in the industry has led to us being the
                          suppliers for the experiences we currently offer. The
                          destinations started with the mother land (India) and
                          expanded from there specifically to places that take
                          an extra effort to plan and be in tune with the
                          culture. These itineraries have been booked in web2
                          for over a decade, Maanz plans to use web3 to inspire
                          more people to take trips that change your life.
                        </p>
                      </div>
                      <div className="my-auto py-4">
                        <div className="rounded-full overflow-clip md:w-[200px] w-[150px]">
                          <img src={twenty8G} alt="28G" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <span className="font-caveat text-3xl underline">
                          28G
                        </span>
                        <p className="py-4">
                          Our co-founder 28G likes to keep it low key because
                          real Gs move in silence ...lol. Her background is in
                          tech, philanthropy and nonprofit building teams,
                          creating strategy and partnering with CEOs & Directors
                          to get shit done. She's currently a project manager in
                          Web3 at a leading brand within the Solana ecosystem.
                        </p>
                      </div>
                      <div className="my-auto py-4">
                        <div className="rounded-full overflow-clip md:w-[200px] w-[150px]">
                          <img src={travel_og} alt="Travel OG" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <span className="font-caveat text-3xl underline">
                          Travel OG
                        </span>
                        <p className="py-4">
                          The one behind the itinerary building, partnerships
                          and supply of our destinations. The connections in the
                          travel industry run deep. He started his career
                          working with his dad to facilitate travel for
                          Bollywood celebrities in India. With over 40 years of
                          experience in travel, he's been facilitating these
                          trips for individuals and groups of people for over a
                          decade in web2 and also has experience building
                          booking systems.
                        </p>
                      </div>
                      <div className="my-auto py-4">
                        <div className="rounded-full overflow-clip md:w-[200px] w-[150px]">
                          <img src={matt} alt="matt" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <span className="font-caveat text-3xl underline">
                          matt.sol
                        </span>
                        <p className="py-4">
                          Matt is our lead dev and self-proclaimed biggest fan.
                          He started out in the engineering world working a
                          stale government job and is now a full-time Web3 dev,
                          working with the likes of DeGods, Mickey DeGods, and,
                          of course, us. He's traveled internationally a few
                          times but is inspired through this project to push
                          further outside of his comfort zone and see the world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-[11px] mt-20 pb-8">Copywrite JetGetter Club 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
