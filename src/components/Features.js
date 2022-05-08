import iconBrand from "../assets/images/icon-brand-recognition.svg";
import iconDetailed from "../assets/images/icon-detailed-records.svg";
import iconFully from "../assets/images/icon-fully-customizable.svg";

function FeaturesCards() {
  const cardsInfo = [
    {
      title: "Brand Recognition",
      body: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
      icon: iconBrand,
      translate: "translate-y-0",
    },
    {
      title: "Detailed Records",
      body: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: iconDetailed,
      translate: "translate-y-10",
    },
    {
      title: "Fully Customizable",
      body: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: iconFully,
      translate: "translate-y-20",
    },
  ];

  const cards = cardsInfo.map((element) => {
    return (
      <div
        className={`max-w-md bg-white mt-2 px-8 pb-12 rounded-md text-center ${element.translate}`}
      >
        <div className="p-5 bg-dark-violet -translate-y-2/4 inline-block rounded-full">
          <img
            src={element.icon}
            alt={`Icon of ${element.title}`}
            className="w-12 h-12"
          />
        </div>
        <h3 className="text-2xl font-bold text-very-dark-violet leading-none">
          {element.title}
        </h3>
        <p className="text-base text-medium text-grayish-violet mt-5">
          {element.body}
        </p>
      </div>
    );
  });

  return cards;
}

function Features() {
  return (
    <section className="w-full bg-light-gray text-center px-6 pt-20 pb-40">
      <div className="container mx-auto max-w-6xl grid place-content-center gap-24">
        <div>
          <h2 className="text-[28px] font-bold text-very-dark-violet mb-5">
            Advanced Statistics
          </h2>
          <p className="text-grayish-violet font-medium max-w-xs mx-auto p-0">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="grid gap-24 lg:grid-cols-3 lg:grid-rows-1 lg:gap-11 relative">
          <div className="w-2 h-full bg-cyan absolute right-2/4 left-2/4 -translate-x-2/4 lg:w-full lg:h-2 lg:top-40 lg:-translate-y-2/4"></div>
          <FeaturesCards />
        </div>
      </div>
    </section>
  );
}

export default Features;
