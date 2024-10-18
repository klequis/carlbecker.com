import { Component } from "solid-js";
import { Section } from "../components/section";
import { ParaWrap } from "../components/para-wrap";
import { Text } from '../components/text'
import iTitlePage from '../assets/title_page.png'

export const About: Component = () => {
  return (
    <Section
      flexDirection="column"
      backgroundColor="white"
      gap="1em"
      title="Software Developer"
    >
      <ParaWrap>
        <Text variant="p" textAlign="center">
        Hi I'm Carl. I started my adult as a horse trainer and riding
        instructor. Later I automated spreadsheet models for Morgan Stanley,
        became a Windows developer, development manager, and product manger. I'm
        now retired and focused on learning and writing. My current interest is
        SolidJS and SolidStart. I just published my first book, "SolidStart
        Routing".
        </Text>
        <img src={iTitlePage} style="max-height: 225px" alt="book: SolidStart Routing" />
      </ParaWrap>
    </Section>
  );
}
