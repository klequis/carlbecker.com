import iGitHub from "../assets/logos/github-octocat.svg";
import iLinkedIn from "../assets/logos/linkedIn.png";
import iBlog from "../assets/blog.png";

const linkedInURL = "https://www.linkedin.com/in/carlbecker/";
const gitHubURL = "https://github.com/klequis";
const blogURL = "https://carlbecker.dev/";
const logoSocial = "logoSocial";

function Social() {
  return (
    <div>
      <div>
        <a href={gitHubURL}>
          <img src={iGitHub} class={logoSocial} alt="github logo" />
        </a>
        <a href={linkedInURL}>
          <img src={iLinkedIn} class={logoSocial} alt="github logo" />
        </a>
        <a href={blogURL}>
          <img src={iBlog} class={logoSocial} alt="github logo" />
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header>
      <section class="section-blue">
        <h1>Carl Becker</h1>
        <Social />
        <p>
          Hi I'm Carl. I started my adult as a horse trainer and riding
          instructor. Later I automated spreadsheet models for Morgan Stanley,
          became a Windows developer, development manager, and product manger.
          I'm now retired and focused on learning and writing. My current
          interest is SolidJS and SolidStart. I just published my first book,
          "SolidStart Routing".
        </p>
      </section>
    </header>
  );
}
