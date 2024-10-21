import { Section } from "../components/section"
import iCACF from '../assets/logos/cacf.png'
export const CACF = () => {
  return (
    <Section backgroundColor="white">
      <h2>Coalition for Asian American Children & Families</h2>
      <h3>Former Board Member</h3>
      <img src={iCACF} alt="Coalition for Asian American Children & Families logo" />
    </Section>
  )
}