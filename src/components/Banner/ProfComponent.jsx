import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiGithubLine  } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Slide } from "react-awesome-reveal";
import Sagar from "../assets/Sagar.jpeg";

const ProfComponent = () => {
  const scrollDown = () => {
    window.scroll({
      top: document.body.scrollHeight, // Scroll to the bottom of the screen
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <br></br>
          <br></br>
          <h2>
            Hello <span className="green">I'am</span>
          </h2>
          <h1 className="green">SAGAR PRABHU</h1>
          <hr></hr>
          <br></br>
          
          <p>
            A Computer Science Master's student at Indiana University, a passionate learner and computer freak who loves developing 
            software applications, a enthusiast of learning new technologies...  
          </p>
          
          <button onClick={scrollDown}>Let's talk</button>
          <br></br>
          <br></br>
          <br></br>
          <p>Want to know more about me, Visit:</p>
            
          <Social>
            <div className="social-icons">
            <h2>LinkedIn</h2>
              <span>
                <a href="https://www.linkedin.com/in/sagarprabhu98/">
                  <FaLinkedinIn />
                </a>
              </span>
              <br></br>
              <h2>Github</h2>
              <span>
                <a href="https://github.com/sagarsp123">
                  <RiGithubLine/>
                </a>
              </span>
              <br></br>
              <h2>Resume</h2>
              <span>
                <a href="https://drive.google.com/file/d/1RfWMChbLTtffRdOAXYuKjv2afK-lccsT/view?usp=sharing">
                <GrDocumentPdf/>
                </a>
              </span>
              
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={Sagar}
            alt="profile"
            height="500"
            width="50"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
