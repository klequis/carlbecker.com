import { Hero } from "./ui/hero";
import { LatestActivities } from "./ui/latest-activities";
import { TVC } from "./ui/tvc";
import { ThePast } from "./ui/the-past";
import { MS } from "./ui/ms";
import { TR } from "./ui/tr";
import { NYCWPFC } from "./ui/nyc-wpf-c";
import { OnceUponATime } from "./ui/once-upon-time";
// This is home.jsx in previous project

function App() {
  return (
    <div>
      <Hero />
      <LatestActivities />
      <TVC />
      <ThePast />
      <MS />
      <TR />
      <NYCWPFC />
      <OnceUponATime />
    </div>
  );
}

export default App;