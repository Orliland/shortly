import React, { Component } from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const MenuLinks = (props) => {
  return props.items.map((link, index) => {
    return (
      <li className="my-3" key={index}>
        <a
          href={"/" + link.toLowerCase()}
          className="text-gray hover:text-cyan"
        >
          {link}
        </a>
      </li>
    );
  });
};

const FooterMenu = (props) => {
  return props.items.map((item, index) => {
    return (
      <div key={index}>
        <h3 className="text-base font-bold mb-3">{item[0]}</h3>
        <ul>
          <MenuLinks items={item[1]} />
        </ul>
      </div>
    );
  });
};

const SocialLinks = (props) => {
  return props.links.map((link, index) => {
    return (
      <a href={"/" + link} key={index}>
        <IconContext.Provider value={{ size: "1.5em" }}>
          {link[0]}
        </IconContext.Provider>
      </a>
    );
  });
};

class Footer extends Component {
  state = {
    footerMenu: [
      ["Features", ["Link Shortening", "Branded Links", "Analytics"]],
      ["Resourses", ["Blog", "Developers", "Support"]],
      ["Company", ["About", "Our Team", "Careers", "Contact"]],
    ],
    socialLinks: [
      [<FaFacebookSquare />, "https://facebook.com/shortly"],
      [<FaTwitter />, "htttps://twitter.com/shortly"],
      [<FaPinterest />, "https://pinterest.com/shortly"],
      [<FaInstagram />, "https://instagram/shortly"],
    ],
  };

  render() {
    const { footerMenu, socialLinks } = this.state;

    return (
      <footer className="w-full bg-very-dark-violet text-white text-center p-14">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-4 lg:grid-rows-1">
          <h2 className="text-4xl font-bold mb-4 lg:justify-self-start">
            Shortly
          </h2>
          <div className="flex flex-col gap-6 md:flex-row justify-center md:gap-20 md:text-left lg:col-span-2">
            <FooterMenu items={footerMenu} />
          </div>
          <div className="flex gap-6 justify-center max-h-0">
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
