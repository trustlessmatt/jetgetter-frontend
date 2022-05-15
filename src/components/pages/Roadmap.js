import Header from "../Header";

const Roadmap = () => {
  return (
    <div>
      {/* outer container for all roadmap items */}
      <div className="relative bg-top bg-[url('./components/assets/blueprint_ext.PNG')] ">
        <Header />
        {/* OG blueprint */}
        <div className="w-full pt-64 bg-top bg-[url('./components/assets/blueprint.PNG')] bg-no-repeat pb-52">
          <div className="mx-40 px-8">
            <p className="text-white">
              What is the JetGetter Club ?<br />
              <div className="pl-20">
                <p>
                  Web3 travel brand centered around enjoying life through travel
                  and more...
                </p>
              </div>
              <br />
              Who are JetGetters ?<br />
              <div className="pl-20">
                <p>
                  JetGetters are tastemakers that know the best spots around the
                  world.
                </p>
              </div>
              <br />
            </p>
            <p className="text-white">
              What is the JetGetter Club building ?<br />
              <div className="pl-20">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    1. <span className="underline">COMMUNITY</span>:
                  </div>
                  <div className="col-span-2 font-caveat ">
                    We are building a community that wants to experience the
                    world.
                    <br />
                    Supporting each other, sharing experiences, and providing
                    valuable travel gems are a few things you can expect.
                  </div>
                  <div>
                    2. <span className="underline">MEDIA</span>:
                  </div>
                  <div className="col-span-2 font-caveat">We are creating a
                  media outlet to share authentic travel content from and for a
                  diverse group of people.
                  </div>
                  <div>
                    3. <span className="underline">TRAVEL</span>:
                  </div>
                  <div className="col-span-2 font-caveat ">
                    Book curated trips directly with the JetGeter Club using SOL + USD.
                    <br />
                    Our partnered destinations: India, Dubai, Greece, Maldives, Bhutan, and a few more...
                  </div>
                </div>
              </div>
            </p>
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
          </div>
        </div>
        {/* expanded blueprint */}
        <div className="w-full pt-64 pb-52">
        Expanded blueprint here...
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
