import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { pdf } from "../../constants/constants";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HI THERE! <br />
        It's Mehdy
      </SectionTitle>
      <SectionText>
        Full Stack Web Developer passionate about creating interactive web
        applications.
      </SectionText>
      <a href={pdf.image}>
        <Button>
          {" "}
          <AiOutlineDownload />
          &nbsp; My Resume{" "}
        </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
