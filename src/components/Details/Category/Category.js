import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import Heading from "../Heading/Heading";

// Category data
const categorizedSkills = {
  language: {
    title: "Programming Languages",
    skills: [
      "c",
      "cplusplus",
      "csharp",
      "go",
      "java",
      "javascript",
      "typescript",
      "php",
      "perl",
      "ruby",
      "scala",
      "python",
      "swift",
      "objectivec",
      "clojure",
      "rust",
      "haskell",
      "coffeescript",
      "elixir",
      "erlang",
      "nim",
    ],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      "https://api.iconify.design/logos-perl.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
      "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg",
      "https://www.vectorlogo.zone/logos/erlang/erlang-official.svg",
      "https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg",
    ],
  },
  frontend_dev: {
    title: "Frontend Development",
    skills: [
      "vuejs",
      "react",
      "svelte",
      "angularjs",
      "angular",
      "backbonejs",
      "bootstrap",
      "vuetify",
      "css3",
      "html5",
      "pug",
      "gulp",
      "sass",
      "redux",
      "webpack",
      "babel",
      "tailwind",
      "materialize",
      "bulma",
      "gtk",
      "qt",
      "wx_widgets",
      "ember",
    ],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
      "https://angular.io/assets/images/logos/angular/angular.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      "https://bestofjs.org/logos/vuetify.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      "https://cdn.worldvectorlogo.com/logos/pug.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
      "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg",
      "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg",
    ],
  },
  backend_dev: {
    title: "Backend Development",
    skills: [
      "nodejs",
      "spring",
      "express",
      "graphql",
      "kafka",
      "solr",
      "rabbitMQ",
      "hadoop",
      "nginx",
      "openresty",
      "nestjs",
    ],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
      "https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg",
      "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
      "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
      "https://openresty.org/images/logo.png",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg",
    ],
  },
  mobile_dev: {
    title: "Mobile App Development",
    skills: [
      "android",
      "flutter",
      "dart",
      "kotlin",
      "nativescript",
      "xamarin",
      "reactnative",
      "ionic",
      "apachecordova",
    ],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
      "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg",
      "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg",
      "https://reactnative.dev/img/header_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
      "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg",
    ],
  },
  ai: {
    title: "AI/ML",
    skills: [
      "tensorflow",
      "pytorch",
      "pandas",
      "seaborn",
      "opencv",
      "scikit_learn",
    ],
    icons: [
      "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
      "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    ],
  },
  database: {
    title: "Database",
    skills: [
      "mongodb",
      "mysql",
      "postgresql",
      "redis",
      "oracle",
      "cassandra",
      "couchdb",
      "hive",
      "realm",
      "mariadb",
      "cockroachdb",
      "elasticsearch",
      "sqlite",
      "mssql",
    ],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
      "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg",
      "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
      "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
      "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
      "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg",
      "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
      "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    ],
  },
  data_visualization: {
    title: "Data Visualization",
    skills: ["d3js", "chartjs", "canvasjs", "kibana", "grafana"],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
      "https://www.chartjs.org/media/logo-title.svg",
      "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
      "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
      "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
    ],
  },
  devops: {
    title: "Devops",
    skills: [
      "aws",
      "docker",
      "jenkins",
      "gcp",
      "kubernetes",
      "bash",
      "azure",
      "vagrant",
      "circleci",
      "travisci",
    ],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
      "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
      "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      "https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg",
      "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
      "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg",
    ],
  },
  baas: {
    title: "Backend as a Service(BaaS)",
    skills: ["firebase", "appwrite", "amplify", "heroku"],
    icons: [
      "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
      "https://docs.amplify.aws/assets/logo-dark.svg",
      "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    ],
  },
  framework: {
    title: "Framework",
    skills: [
      "django",
      "dotnet",
      "electron",
      "symfony",
      "laravel",
      "codeigniter",
      "rails",
      "flask",
      "quasar",
    ],
    icons: [
      "https://cdn.worldvectorlogo.com/logos/django.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
      "https://symfony.com/logos/symfony_black_03.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
      "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      "https://cdn.quasar.dev/logo/svg/quasar-logo.svg",
    ],
  },
  testing: {
    title: "Testing",
    skills: [
      "cypress",
      "selenium",
      "jest",
      "mocha",
      "puppeteer",
      "karma",
      "jasmine",
    ],
    icons: [
      "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
      "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
      "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
      "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
      "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg",
      "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
    ],
  },
  software: {
    title: "Software",
    skills: [
      "illustrator",
      "photoshop",
      "xd",
      "figma",
      "blender",
      "sketch",
      "invision",
      "framer",
      "matlab",
      "postman",
    ],
    icons: [
      "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
      "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
      "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      "https://download.blender.org/branding/community/blender_community_badge_white.svg",
      "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
      "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
      "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
      "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    ],
  },
  static_site_generator: {
    title: "Static Site Generators",
    skills: [
      "gatsby",
      "gridsome",
      "hugo",
      "jekyll",
      "nextjs",
      "nuxtjs",
      "11ty",
      "scully",
      "sculpin",
      "sapper",
      "vuepress",
      "hexo",
      "middleman",
    ],
    icons: [
      "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
      "https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg",
      "https://api.iconify.design/logos-hugo.svg",
      "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
      "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
      "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg",
      "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg",
      "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg",
      "https://avatars.githubusercontent.com/u/23617963?v=4&s=400",
      "https://vuepress.vuejs.org/hero.png",
      "https://www.vectorlogo.zone/logos/hexoio/hexoio-icon.svg",
      "https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg",
    ],
  },
  game_engines: {
    title: "Game Engines",
    skills: ["unity", "unreal"],
    icons: [
      "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
      "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
    ],
  },
  automation: {
    title: "Automation",
    skills: ["zapier", "ifttt"],
    icons: [
      "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
      "https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg",
    ],
  },
  other: {
    title: "Other",
    skills: ["linux", "git", "arduino"],
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
    ],
  },
};

// Category Styling
const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryHeading = styled.div`
  padding: 0.5rem;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 1rem 0;
  border-bottom: 2px solid #ccc;
  letter-spacing: 0.2rem;
`;

const CategoryContainer = styled.div`
  width: 100%;
  // display: flex;
  // flex-wrap: wrap;
  // gap: 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // @media screen and (max-width: 400px) {
  //   grid-template-columns: repeat(1, 1fr);
  //   place-items: center;
  // }

  .box {
    display: flex;
    align-items: center;
    padding: 1rem;
    position: relative;
  }

  .checkbox-label__input {
    position: absolute;
    opacity: 0;
  }

  .checkbox-label__control {
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    vertical-align: middle;
    background-color: #f7fafc;
    border: 2px solid #ccc;
    transform: scale(0.75);
  }

  .checkbox-label__input:checked + .checkbox-label__control::after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 1rem;
    height: 1rem;
    background-color: #5a01a7;
  }

  .checkbox-label__input:hover + .checkbox-label__control,
  .checkbox-label__input:focus + .checkbox-label__control {
    box-shadow: 0 0 0 8px rgba(10, 10, 35, 0.1);
  }

  .skillimg {
    height: 5rem;
    width: 5rem;
  }

  .tooltip {
    visibility: hidden;
    display: flex;
    align-items: center;
    background-color: #333;
    color: #fff;
    margin-left: 1rem;
    padding: 1rem 2rem;
    font-size: 1.4rem;

    @media screen and (max-width: 768px) {
      padding: 1rem;
      left: 2rem;
      margin-left: 0.5rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  .box:hover {
    cursor: pointer;
  }

  .box:hover .tooltip {
    visibility: visible;
  }
`;

const Category = ({ skills, onSelectedSkillsChange }) => {
  // Search input state and selected skills state
  const [searchInput, setSearchInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState(skills);

  // Filter the categorizedSkills object based on the search input
  const filteredSkills = Object.keys(categorizedSkills).reduce(
    (result, categoryKey) => {
      const category = categorizedSkills[categoryKey];
      const filteredCategory = {
        ...category,
        skills: category.skills.filter((skill) =>
          skill.toLowerCase().includes(searchInput.toLowerCase())
        ),
      };
      if (filteredCategory.skills.length > 0) {
        result[categoryKey] = filteredCategory;
      }
      return result;
    },
    {}
  );

  // Clear the search input
  const handleClearSearch = () => {
    setSearchInput("");
  };

  // Handle checkbox change
  const handleCheckboxChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills((prevSelectedSkills) =>
        prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill)
      );
    } else {
      setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    }
  };

  // Check if a skill should be checked based on the selectedSkills array
  const isSkillChecked = (skill) => {
    return selectedSkills.includes(skill);
  };

  // Update the selectedSkills array in the parent component
  useEffect(() => {
    onSelectedSkillsChange(selectedSkills);
  }, [selectedSkills]);

  return (
    <>
      <CategoryHeader>
        <Heading heading="Skills"></Heading>
        <SearchBar
          placeholder="Search...."
          value={searchInput}
          onSearch={(value) => setSearchInput(value)}
          onClear={handleClearSearch}
        />
      </CategoryHeader>

      {Object.keys(filteredSkills).map((categoryKey) => {
        const category = filteredSkills[categoryKey];
        return (
          <div key={categoryKey}>
            <CategoryHeading>
              <p>{category.title}</p>
            </CategoryHeading>

            <CategoryContainer>
              {category.skills.map((skill, index) => (
                <label htmlFor={skill} key={index} className="box">
                  <input
                    id={skill}
                    type="checkbox"
                    className="checkbox-label__input"
                    checked={isSkillChecked(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                  />
                  <span className="checkbox-label__control" />
                  <img
                    className="skillimg"
                    src={category.icons[index]}
                    alt={skill}
                  />
                  <span className="tooltip">{skill}</span>
                </label>
              ))}
            </CategoryContainer>
          </div>
        );
      })}
    </>
  );
};

export default Category;
