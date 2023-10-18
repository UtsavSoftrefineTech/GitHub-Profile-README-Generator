import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Header Styling
const Header = () => {
  const Header = styled.header`
    height: min-content;
    padding-bottom: 2rem;
    background-color: #f5f5f5;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  `;

  const Title = styled.p`
    font-weight: 500;
    text-align: center;
    padding: 2rem 0;
    font-size: 3rem;
    color: #333;

    @media only screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  `;

  const Btns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `;

  const Btn = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 5px;
    background-color: #f5f5f5;
    font-size: 1.5rem;
    cursor: pointer;
    border: 1px solid black;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 450px) {
      font-size: 1.2rem;
      height: 3rem;
      padding: 0 0.5rem;
    }

    &:hover {
        background-color: #333;
        color: #f5f5f5;
        }
    }


  `;

  // State for the star and fork count
  const [star, setStar] = useState(0);
  const [fork, setFork] = useState(0);

  // Fetch the data from the GitHub API
  const fetchData = async () => {
    const res = await fetch(
      "https://api.github.com/UtsavSoftrefineTech/GitHub-Profile-README-Generator"
    );
    const data = await res.json();
    setStar(data.stargazers_count);
    setFork(data.forks_count);
  };

  // Open the GitHub repo in a new tab with the fork option
  const openGitHubRepoFork = () => {
    window.open(
      "https://github.com/UtsavSoftrefineTech/GitHub-Profile-README-Generator/fork",
      "_blank"
    );
  };

  // Open the GitHub repo in a new tab
  const openGitHubRepoStar = () => {
    window.open(
      "https://github.com/UtsavSoftrefineTech/GitHub-Profile-README-Generator",
      "_blank"
    );
  };

  // Fetch the data every 6 seconds
  useEffect(() => {
    fetchData();
    setInterval(fetchData, 6000);
    return () => {};
  }, []);

  return (
    <>
      <Header>
        <Title>GitHub Profile README Generator</Title>
        <Btns>
          <Btn onClick={openGitHubRepoStar}>
            <p>
              <ion-icon name="star-outline"></ion-icon>
            </p>
            <p>Star this repo</p>
            <p>{star}</p>
          </Btn>
          <Btn onClick={openGitHubRepoFork}>
            <p>
              <ion-icon name="git-network-outline"></ion-icon>
            </p>
            <p>Fork on GitHub</p>
            <p>{fork}</p>
          </Btn>
        </Btns>
      </Header>
    </>
  );
};

export default Header;
