import { Social } from "./social";

export function Header() {
  return (
    <header>
      <div class="container">
        <h1>Carl Becker</h1>
        <Social />
        <p class="header-text">
          Hi I'm Carl. I started my adult as a horse trainer and riding
          instructor. Later I automated spreadsheet models for Morgan Stanley,
          became a Windows developer, development manager, and product manger.
          I'm now retired and focused on learning and writing. My current
          interest is SolidJS and SolidStart. I just published my first book,
          "SolidStart Routing".
        </p>
      </div>
    </header>
  );
}
