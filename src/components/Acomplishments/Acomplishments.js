import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { certif } from "../../constants/constants";

const data = [
  { number: "Angular", file: "/images/angular.pdf" },
  {
    number: "Bootstrap",
    file: "/images/Bootstrap.pdf",
  },
  { number: "MERN", file: "/images/Nodejs.pdf" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <a href={card.file}>
            <BoxNum>{`${card.number}`}</BoxNum>
            <BoxText>
              {" "}
              <AiOutlineDownload />
            </BoxText>
          </a>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
