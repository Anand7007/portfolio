import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/anand-singh-b7148822b"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/Anand7007"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      <a
        href="https://codepen.io/anandisonline"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Codepen} alt="codepen" />
      </a>
    </section>
  );
};

export default NavigationSocials;
