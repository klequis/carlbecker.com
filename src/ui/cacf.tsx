import { Section } from "../components/xx.section";
import iCACF from "../assets/logos/cacf.png";
export const CACF = () => {
  return (
    <section class="section-white">
      <div class="text-container">
        <h2>Coalition for Asian American Children & Families</h2>
        <h3>Former Board Member</h3>
      </div>
      <div class="logo-container">
        <img
          src={iCACF}
          class="logoCACF"
          alt="Coalition for Asian American Children & Families logo"
        />
      </div>
    </section>
  );
};
