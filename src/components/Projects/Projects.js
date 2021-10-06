import React, { useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Cars,
} from "./ProjectsStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { pic, projects } from "../../constants/constants";
import Modal from "styled-react-modal";
import Button from "../../styles/GlobalComponents/Button";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [ide, setIde] = useState(0);
  const toggleModal = (ide) => {
    setOpacity(0);
    setIsOpen(!isOpen);
    setIde(ide);
    console.log(ide);
  };

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
          {projects.map(
            ({
              id,
              image,
              title,
              description,
              tags,
              source,
              visit,
              image2,
            }) => (
              <BlogCard key={id}>
                <Img src={image} onClick={() => toggleModal(id)} />
                <div onClick={() => toggleModal(id)}>see more</div>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description} </CardInfo>
                <div>
                  <br />
                  <TitleContent> Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={visit}>Code</ExternalLinks>
                  <ExternalLinks href={source}>Source</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
          <StyledModal
            isOpen={isOpen}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
            opacity={opacity}
            backgroundProps={{ opacity }}
          >
            <Carousel stopOnHover autoPlay>
              <Cars>
                {" "}
                <Img src={projects[ide]?.image} />
              </Cars>
              <Img src={projects[ide]?.image1} />
              <Img src={projects[ide]?.image2} />
              <Img src={projects[ide]?.image3} />
            </Carousel>
            <button onClick={toggleModal}>Close</button>
          </StyledModal>
        </GridContainer>
      </Section>
    </>
  );
};
export default Projects;
