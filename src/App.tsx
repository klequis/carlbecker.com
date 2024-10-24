import { Header } from "./ui/header";
import { LatestActivities as SolidStartRouting } from "./ui/solid-start-routing";
import { TVC } from "./ui/tvc";
import { ThePast } from "./ui/the-past";
import { MS } from "./ui/ms";
import { TR } from "./ui/tr";
import { NYCWPFC } from "./ui/nyc-wpf-c";
import { OnceUponATime } from "./ui/once-upon-time";
import { HKNC } from "./ui/hknc";
import { CACF } from "./ui/cacf";
import { Footer } from "./ui/footer";

// This is home.jsx in previous project

function App() {
  return (
    <>
      <Header />
      <SolidStartRouting />
      <TVC />
      <ThePast />
      <MS />
      <TR />
      <NYCWPFC />
      <OnceUponATime />
      <HKNC />
      <CACF />
      <Footer />
    </>
  );
}

export default App;
