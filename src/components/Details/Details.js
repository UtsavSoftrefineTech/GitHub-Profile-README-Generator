import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input/Input";
import Heading from "./Heading/Heading";
import Category from "./Category/Category";
import SocialLinks from "./SocialLinks/SocialLinks";

// Details Styling
const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem 4rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const BreakPoint = styled.div`
  height: 2rem;
  margin-top: 2rem;
`;

const Details = () => {
  // handle the data based on the user input using useState
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: { title: "Hi 👋, I'm", name: "" },
          subtitle: { title: "A passionate frontend developer from India" },
          work: [
            {
              title: "🔭 I’m currently working on",
              project: "",
              link: "",
              placeholder: "project name",
            },
            {
              title: "👯 I’m looking to collaborate on",
              project: "",
              link: "",
              placeholder: "project name",
            },
            {
              title: "🤝 I’m looking for help with",
              project: "",
              link: "",
              placeholder: "project name",
            },
            {
              title: "🌱 I’m currently learning",
              skills: "",
              placeholder: "Framework course etc.",
            },
            {
              title: "💬 Ask me about",
              topics: "",
              placeholder: "react, vue and gsap",
            },
            {
              title: "📫 How to reach me",
              email: "",
              placeholder: "example@gmail.com",
            },
            {
              title: "👨‍💻 All of my projects are available at",
              portfolio: "",
              placeholder: "portfolio link",
            },
            {
              title: "📝 I regularly write articles on",
              platforms: "",
              placeholder: "blog link",
            },
            {
              title: "📄 Know about my experiences",
              resume: "",
              placeholder: "resume link",
            },
            {
              title: "⚡ Fun fact",
              fact: "",
              placeholder: "I think I am funny",
            },
          ],
        };
  });

  // handle the input change
  const handleInputChange = (category, field, value, index = null) => {
    setData((prevData) => {
      const newData = { ...prevData }; // Copy the object

      if (index !== null) {
        newData[category][index][field] = value; // index passed then update the array
      } else {
        newData[category][field] = value;
      }
      return newData;
    });
  };

  // handle the skills based on the user clicked skills
  const [skills, setSkills] = useState(() => {
    const storedSkills = localStorage.getItem("skills");
    console.log("---------------", storedSkills);
    return storedSkills ? JSON.parse(storedSkills) : [];
  });

  // handle the selected skills
  const handleSelectedSkillsChange = (selectedSkills) => {
    setSkills(selectedSkills);
  };

  // handle the social links based on the user input using useState
  const [socialLinks, setSocialLinks] = useState(() => {
    const storedSocialLinks = localStorage.getItem("socialLinks");

    return storedSocialLinks
      ? JSON.parse(storedSocialLinks)
      : [
          {
            title: "GitHub",
            placeholder: "github username",
            link: "https://github.com/",
            src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
            value: "",
          },
          {
            title: "Dev.to",
            placeholder: "dev.to username",
            link: "https://dev.to/",
            src: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-512.png",
            value: "",
          },
          {
            title: "CodeSandbox",
            placeholder: "codesandbox username",
            link: "https://codesandbox.io/",
            src: "https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png",
            value: "",
          },
          {
            title: "LinkedIn",
            placeholder: "linkedin username",
            link: "https://in.linkedin.com/",
            src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
            value: "",
          },
          {
            title: "Facebook",
            placeholder: "facebook username",
            link: "https://www.facebook.com/",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
            value: "",
          },
          {
            title: "Dribbble",
            placeholder: "dribble username",
            link: "https://dribbble.com/",
            src: "https://cdn-icons-png.flaticon.com/512/408/408743.png",
            value: "",
          },
          {
            title: "Hashnode",
            placeholder: "hashnode username (with @)",
            link: "https://hashnode.com/",
            src: "https://iconape.com/wp-content/png_logo_vector/cib-hashnode.png",
            value: "",
          },
          {
            title: "YouTube",
            placeholder: "youtube channel name",
            link: "https://www.youtube.com/",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
            value: "",
          },
          {
            title: "Hackerrank",
            placeholder: "hackerrank username",
            link: "https://www.hackerrank.com/",
            src: "https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3628233-3031053.png",
            value: "",
          },
          {
            title: "Leetcode",
            placeholder: "leetcode username",
            link: "https://leetcode.com/",
            src: "https://www.svgrepo.com/show/306328/leetcode.svg",
            value: "",
          },
          {
            title: "HackerEarth",
            placeholder: "hackerearth username (with @)",
            link: "https://www.hackerearth.com/",
            src: "https://static-00.iconduck.com/assets.00/hackerearth-icon-444x512-0heomwse.png",
            value: "",
          },
          {
            title: "Discord",
            placeholder: "Discord invite (only code)",
            link: "https://discord.com/",
            src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
            value: "",
          },
          {
            title: "Twitter",
            placeholder: "twitter username",
            link: "https://twitter.com/",
            src: "https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png",
            value: "",
          },
          {
            title: "Codepen",
            placeholder: "codepen username",
            link: "https://codepen.io/",
            src: "https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-codepen-4550862_121336.png",
            value: "",
          },
          {
            title: "StackOverflow",
            placeholder: "stackoverflow user ID",
            link: "https://stackoverflow.com/",
            src: "https://cdn-icons-png.flaticon.com/512/2111/2111690.png",
            value: "",
          },
          {
            title: "Instagram",
            placeholder: "instagram username",
            link: "https://www.instagram.com/",
            src: "https://cdn-icons-png.flaticon.com/512/1384/1384031.png",
            value: "",
          },
          {
            title: "Kaggle",
            placeholder: "kaggle username",
            link: "https://www.kaggle.com/",
            src: "https://cdn.iconscout.com/icon/free/png-256/free-kaggle-3628281-3031974.png",
            value: "",
          },
          {
            title: "Behance",
            placeholder: "behance username",
            link: "https://www.behance.net/",
            src: "https://cdn-icons-png.flaticon.com/512/733/733594.png",
            value: "",
          },
          {
            title: "Medium",
            placeholder: "medium username (with @)",
            link: "https://medium.com/",
            src: "https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png",
            value: "",
          },
          {
            title: "Codechef",
            placeholder: "codechef username",
            link: "https://www.codechef.com/",
            src: "https://static-00.iconduck.com/assets.00/codechef-icon-380x512-r1v87w22.png",
            value: "",
          },
          {
            title: "Codeforces",
            placeholder: "codeforces username",
            link: "https://codeforces.com/",
            src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png",
            value: "",
          },
          {
            title: "Topcoder",
            placeholder: "topcoder username",
            link: "https://www.topcoder.com/",
            src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/topcoder-512.png",
            value: "",
          },
          {
            title: "GeeksforGeeks",
            placeholder: "GFG (<username>/profile)",
            link: "https://www.geeksforgeeks.org/",
            src: "https://static-00.iconduck.com/assets.00/geeksforgeeks-icon-512x264-y71dixbv.png",
            value: "",
          },
          {
            title: "Reddit",
            placeholder: "RSS feed URL",
            link: "https://rss.com/",
            src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
            value: "",
          },
        ];
  });

  // generate the final link for the user navigate to the social platform
  for (const platform of socialLinks) {
    platform.value
      ? (platform.finallink = platform.link + platform.value)
      : (platform.finallink = "");
  }

  // handle the social links change
  const handleSocialLinkChange = (index, value) => {
    setSocialLinks((prevData) => {
      const newData = [...prevData];
      newData[index].value = value;
      return newData;
    });
  };

  // store the data in the local storage when the data changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // store the skills in the local storage when the skills changes
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  // store the social links in the local storage when the social links changes
  useEffect(() => {
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));
  }, [socialLinks]);

  // initialize the data in the local storage when the component mounts
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, []);

  return (
    <DetailsContainer>
      <Section>
        <Heading heading="Details"></Heading>
        <Input
          type="text"
          name="title"
          id="title"
          value={data.name.title}
          onChange={(value) => handleInputChange("name", "title", value)}
          width="20%"
        />
        <Input
          type="text"
          name="name"
          id="name"
          value={data.name.name}
          onChange={(value) => handleInputChange("name", "name", value)}
          placeholder="name"
          width="40%"
        />
      </Section>
      <Section>
        <Heading heading="Subtitle"></Heading>
        <Input
          type="text"
          name="subtitle"
          id="subtitle"
          value={data.subtitle.title}
          onChange={(value) => handleInputChange("subtitle", "title", value)}
          width="70%"
        />
      </Section>
      <Section>
        <Heading heading="Work"></Heading>
        {data.work.map((workItem, index) => (
          <div key={index}>
            <Input
              type="text"
              name="title"
              id="title"
              value={workItem.title}
              width="30%"
              onChange={(value) =>
                handleInputChange("work", "title", value, index)
              }
            />

            <Input
              type="text"
              name="projectName"
              id="projectName"
              value={workItem.project}
              onChange={(value) =>
                handleInputChange("work", "project", value, index)
              }
              width={index < 3 ? "25%" : "40%"}
              placeholder={workItem.placeholder}
            />
            {index < 3 && (
              <Input
                type="text"
                name="projectLink"
                id="projectLink"
                value={workItem.link}
                onChange={(value) =>
                  handleInputChange("work", "link", value, index)
                }
                width="25%"
                placeholder="project link"
              />
            )}

            <BreakPoint />
          </div>
        ))}
      </Section>
      <Section>
        <Category
          skills={skills}
          onSelectedSkillsChange={handleSelectedSkillsChange}
        />
      </Section>
      <Section>
        <Heading heading="Social"></Heading>
        <SocialLinks
          socialLinks={socialLinks}
          onSocialLinkChange={handleSocialLinkChange}
        />
      </Section>
    </DetailsContainer>
  );
};

export default Details;
