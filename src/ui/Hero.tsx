import { Text } from "../components/text";
import classes from "./hero.module.css";
import iGitHub from "../assets/logos/github-octocat.svg";
import iLinkedIn from "../assets/logos/linkedIn.png";
import iBlog from "../assets/blog.png"
import styles from './text.module.css';
const linkedInURL = "https://www.linkedin.com/in/carlbecker/";
const gitHubURL = "https://github.com/klequis";
const blogURL = "https://carlbecker.dev/";

function Social() {
  return (
    <div class={classes.socialOuter}>
      <div class={classes.socialInner}>
        <a href={gitHubURL}>
          <img src={iGitHub} class={classes.socialLogo} alt="github logo" />
        </a>
        <a href={linkedInURL}>
          <img src={iLinkedIn} class={classes.socialLogo} alt="github logo" />
        </a>
        <a href={blogURL}>
          <img src={iBlog} class={classes.socialLogo} alt="github logo" />
        </a>
      </div>
    </div>
  );
}

export function Title() {
  return (
    <header class={classes.titleHeader}>
      <Text textAlign="center" marginBottom={0} variant="h1">
        Carl Becker
      </Text>
      <Social />
    </header>
  );
}
