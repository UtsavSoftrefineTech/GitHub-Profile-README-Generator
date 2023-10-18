import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";

// Social Links Styling
const SocialContainer = styled.div`
  margin: 2rem;
  padding: 2rem;
  display: grid;
  row-gap: 3rem;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  img {
    height: 3rem;
    width: 3rem;
    filter: saturate(0);
  }
`;

const ErrrorBox = styled.div`
  height: min-content;
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 2;
`;

const SocialLinks = (props) => {
  // Get the social links from props
  const { socialLinks } = props;

  // validationErrors is an array of error messages for each social link
  const [validationErrors, setValidationErrors] = useState(
    new Array(socialLinks.length).fill("")
  );

  // Validate the input based on the social link
  const validateInput = (index, value) => {
    const linkTitle = socialLinks[index].title;
    let isValid = true;
    let errorMessage = "";

    // Validate the input based on the social link with particular social link regex
    switch (linkTitle) {
      case "GitHub":
        isValid = /^[a-zA-Z\d]([a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/.test(value);
        errorMessage = "Invalid GitHub username";
        break;
      case "Dev.to":
        isValid = /^[a-zA-Z0-9_]*$/.test(value);
        errorMessage = "Invalid Dev.to username";
        break;
      case "CodeSandbox":
        isValid = /^[a-z0-9-]*$/.test(value);
        errorMessage = "Invalid CodeSandbox username";
        break;
      case "LinkedIn":
        isValid = /^[a-zA-Z0-9-_]*$/.test(value);
        errorMessage = "Invalid LinkedIn username";
        break;
      case "Facebook":
        isValid = /^[a-zA-Z0-9.-]*$/.test(value);
        errorMessage = "Invalid Facebook username";
        break;
      case "Dribbble":
        isValid = /^[a-z0-9-]*$/.test(value);
        errorMessage = "Invalid Dribbble username";
        break;
      case "Hashnode":
        isValid = /^@[a-zA-Z0-9-]*$/.test(value);
        errorMessage = "Invalid Hashnode username";
        break;
      case "YouTube":
        isValid = /^[a-zA-Z0-9-]*$/.test(value);
        errorMessage = "Invalid YouTube channel name";
        break;
      case "Hackerrank":
        isValid = /^[a-zA-Z0-9_]*$/.test(value);
        errorMessage = "Invalid Hackerrank username";
        break;
      case "Leetcode":
        isValid = /^[a-zA-Z0-9_]*$/.test(value);
        errorMessage = "Invalid Leetcode username";
        break;
      case "HackerEarth":
        isValid = /^@[a-zA-Z0-9-]*$/.test(value);
        errorMessage = "Invalid HackerEarth username";
        break;
      case "Discord":
        isValid = /^[a-zA-Z0-9]+$/.test(value);
        errorMessage = "Invalid Discord invite code";
        break;
      case "Twitter":
        isValid = /^[a-zA-Z0-9_.]*$/.test(value);
        errorMessage = "Invalid Twitter username";
        break;
      case "Codepen":
        isValid = /^[a-zA-Z0-9_]*$/.test(value);
        errorMessage = "Invalid Codepen username";
        break;
      case "StackOverflow":
        isValid = /^[a-zA-Z0-9_]*$/.test(value);
        errorMessage = "Invalid StackOverflow user ID";
        break;
      case "Instagram":
        isValid = /^[a-zA-Z0-9._]*$/.test(value);
        errorMessage = "Invalid Instagram username";
        break;
      case "Kaggle":
        isValid = /^[a-zA-Z0-9_]*$/.test(value);
        errorMessage = "Invalid Kaggle username";
        break;
      case "Behance":
        isValid = /^[a-zA-Z0-9-_]*$/.test(value);
        errorMessage = "Invalid Behance username";
        break;
      case "Medium":
        isValid = /^@[a-zA-Z0-9-]*$/.test(value);
        errorMessage = "Invalid Medium username";
        break;
      case "Codechef":
        isValid = /^[a-zA-Z0-9_]*$/.test(value);
        errorMessage = "Invalid Codechef username";
        break;
      case "Codeforces":
        isValid = /^[a-zA-Z0-9-]*$/.test(value);
        errorMessage = "Invalid Codeforces username";
        break;
      case "Topcoder":
        isValid = /^[a-zA-Z0-9-_]*$/.test(value);
        errorMessage = "Invalid Topcoder username";
        break;
      case "GeeksforGeeks":
        isValid = /^GFG\/[a-zA-Z0-9-_]*$/.test(value);
        errorMessage = "Invalid GeeksforGeeks profile";
        break;
      case "RSS":
        isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(value);
        errorMessage = "Invalid RSS feed URL";
        break;
      default:
        break;
    }

    // Clear the error message if the input is empty
    if (value.trim() === "") {
      errorMessage = "";
      isValid = true;
    }

    // Update the validationErrors array
    const errors = [...validationErrors];
    errors[index] = isValid ? "" : errorMessage;

    setValidationErrors(errors);
  };

  return (
    <>
      <SocialContainer>
        {socialLinks.map((socialLink, index) => {
          return (
            <Social key={socialLink.title}>
              <Icon>
                <img
                  src={socialLink.src}
                  alt={socialLink.placeholder.split(" ")[0]}
                />
              </Icon>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder={socialLink.placeholder}
                width="100%"
                value={socialLink.value}
                onChange={(value) => {
                  props.onSocialLinkChange(index, value);
                  validateInput(index, value);
                }}
              />
            </Social>
          );
        })}
      </SocialContainer>

      <ErrrorBox>
        {validationErrors.map(
          (error, index) =>
            error && (
              <div key={index} style={{ color: "red" }}>
                {error}
              </div>
            )
        )}
      </ErrrorBox>
    </>
  );
};

export default SocialLinks;
