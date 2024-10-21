import iGitHub from "../assets/logos/github-octocat.svg";
import iLinkedIn from "../assets/logos/linkedIn.png";
import iBlog from "../assets/blog.png";
import iBook from "../assets/book.png";

const linkedInURL = "https://www.linkedin.com/in/carlbecker/";
const gitHubURL = "https://github.com/klequis";
const blogURL = "https://carlbecker.dev/";
const logoSocial = "logoSocial";
const authorURL = "https://leanpub.com/u/carlbecker";

export const Social = (props: {class: string}) => {
  return (
    <div>
      <div>
        <a href={authorURL}>
          <img src={iBook} class={logoSocial} alt="link to Carl Becker author profile" title="  Carl's Books" />
        </a>
        <a href={linkedInURL}>
          <img
            src={iLinkedIn}
            class={logoSocial}
            alt="link to Carl Becker LinkedIn profile"
            title="LinkedIn"
          />
        </a>
        <a href={blogURL}>
          <img
            src={iBlog}
            class={logoSocial}
            alt="link to Carl Becker's blog"
            title="Carl Becker's Blog"
          />
        </a>
        <a href={gitHubURL}>
          <img
            src={iGitHub}
            class={logoSocial}
            alt="link to Carl Becker on GitHub"
            title="klequis on GitHub"
          />
        </a>
        
      </div>
    </div>
  );
}