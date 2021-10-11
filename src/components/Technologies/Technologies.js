import React from "react";
import {
  DiApple,
  DiAppstore,
  DiAws,
  DiCloud9,
  DiDocker,
  DiFirebase,
  DiGithub,
  DiJenkins,
  DiPhonegap,
  DiReact,
  DiScrum,
  DiTerminal,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range tehcnologie in the web development worlde which
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            node.js, Spring Boot, Laravel, Symfony, Django and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Adobe XD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Docker, Jenkins, SonarQube, Git and Ansible
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhonegap size="3rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiScrum size="3rem" />
        <ListContainer>
          <ListTitle>Methodology</ListTitle>
          <ListParagraph>Agile, Scrum and UML</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
