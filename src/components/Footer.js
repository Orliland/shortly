import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";

function FooterMenuLink(props) {
  return (
    <li className="my-3">
      <a
        href={"/" + props.value.toLowerCase()}
        className="text-gray-light hover:opacity-70"
      >
        {props.value}
      </a>
    </li>
  );
}

function FooterMenu(props) {
  let menuLinks = props.value[1].map((element) => {
    return <FooterMenuLink value={element} />;
  });
  return (
    <div>
      <h3 className="text-base font-bold mb-3">{props.value[0]}</h3>
      <ul>{menuLinks}</ul>
    </div>
  );
}

function SocialLink(props) {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <a href={"/" + props.value[1]} className="hover:opacity-70">
        {props.value[0]}
      </a>
    </IconContext.Provider>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-dark text-white text-center p-14">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-4 lg:grid-rows-1">
        <h2 className="text-4xl font-bold mb-4 lg:justify-self-start">
          Shortly
        </h2>
        <div className="flex flex-col gap-6 md:flex-row justify-center md:gap-20 md:text-left lg:col-span-2">
          <FooterMenu
            value={[
              "Features",
              ["Link Shortening", "Branded Links", "Analytics"],
            ]}
          />
          <FooterMenu
            value={["Resourses", ["Blog", "Developers", "Support"]]}
          />
          <FooterMenu
            value={["Company", ["About", "Our Team", "Careers", "Contact"]]}
          />
        </div>

        <div className="flex gap-6 justify-center">
          <SocialLink
            value={[<FaFacebookSquare />, "https://facebook.com/shortly"]}
          />
          <SocialLink value={[<FaTwitter />, "htttps://twitter.com/shortly"]} />
          <SocialLink
            value={[<FaPinterest />, "https://pinterest.com/shortly"]}
          />
          <SocialLink value={[<FaInstagram />, "https://instagram/shortly"]} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
