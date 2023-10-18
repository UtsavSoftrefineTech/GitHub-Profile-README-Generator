import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import ActionButton from "../ActionButton/ActionButton";

// ReadmePad Styling
const ActionButtonWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReadmePadWrapper = styled.div`
  height: min-content;
  width: 90%;
  margin: 0 auto;
  line-height: 2;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  border: 1px solid black;
  padding: 3rem 6rem;
  font-family: Arial, sans-serif;

  @media only screen and (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;

const ReadmePad = ({ toggleActionButtons }) => {
  // State for the readme pad
  const [data, setData] = useState({});
  const [skills, setSkills] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  // Fetch the data from the Local Storage API
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));
    const localSkills = JSON.parse(localStorage.getItem("skills"));
    const localSocialLinks = JSON.parse(localStorage.getItem("socialLinks"));

    setData(localData);
    setSkills(localSkills);
    setSocialLinks(localSocialLinks);
  }, []);

  // Function to generate the markdown
  const getSkillImage = (skill) => {
    // Create a mapping of skills to image URLs
    const skillImageMap = {
      c: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      cplusplus:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      csharp:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      go: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
      java: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      javascript:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      typescript:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      php: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      perl: "https://api.iconify.design/logos-perl.svg",
      ruby: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
      scala:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
      python:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      swift:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
      objectivec:
        "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
      clojure:
        "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
      rust: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg",
      haskell:
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
      coffeescript:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg",
      elixir:
        "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg",
      erlang: "https://www.vectorlogo.zone/logos/erlang/erlang-official.svg",
      nim: "https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg",
      vuejs:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      react:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      svelte:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
      angularjs:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
      angular: "https://angular.io/assets/images/logos/angular/angular.svg",
      backbonejs:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg",
      bootstrap:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      vuetify: "https://bestofjs.org/logos/vuetify.svg",
      css3: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      html5:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      pug: "https://cdn.worldvectorlogo.com/logos/pug.svg",
      gulp: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",
      sass: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      redux:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      webpack:
        "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
      babel: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
      tailwind:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      materialize:
        "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
      bulma:
        "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg",
      gtk: "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg",
      qt: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
      wx_widgets:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg",
      ember:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg",
      nodejs:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      spring: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      express:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      graphql: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      kafka:
        "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
      solr: "https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg",
      rabbitMQ: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
      hadoop:
        "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
      nginx:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
      openresty: "https://openresty.org/images/logo.png",
      nestjs:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg",
      android:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
      flutter: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      dart: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
      kotlin:
        "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      nativescript:
        "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg",
      xamarin:
        "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg",
      reactnative: "https://reactnative.dev/img/header_logo.svg",
      ionic:
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
      apachecordova:
        "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg",
      tensorflow:
        "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      pytorch: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
      pandas:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
      seaborn: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      opencv: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
      scikit_learn:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      mongodb:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      mysql:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      postgresql:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      redis:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
      oracle:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
      cassandra:
        "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg",
      couchdb:
        "https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg",
      hive: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
      realm:
        "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
      mariadb: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
      cockroachdb: "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg",
      elasticsearch:
        "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
      sqlite: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      mssql:
        "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      d3js: "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
      chartjs: "https://www.chartjs.org/media/logo-title.svg",
      canvasjs:
        "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
      kibana:
        "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
      grafana: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
      aws: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      docker:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      jenkins: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
      gcp: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      kubernetes:
        "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      bash: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
      azure:
        "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      vagrant: "https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg",
      circleci: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
      travisci:
        "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg",
      firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      appwrite:
        "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
      amplify: "https://docs.amplify.aws/assets/logo-dark.svg",
      heroku: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
      django: "https://cdn.worldvectorlogo.com/logos/django.svg",
      dotnet:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
      electron:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
      symfony: "https://symfony.com/logos/symfony_black_03.svg",
      laravel:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
      codeigniter: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
      rails:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      flask:
        "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      quasar: "https://cdn.quasar.dev/logo/svg/quasar-logo.svg",
      cypress:
        "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
      selenium:
        "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
      jest: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      mocha: "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
      puppeteer:
        "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
      karma:
        "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg",
      jasmine: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
      illustrator:
        "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
      photoshop:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
      xd: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
      figma: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      blender:
        "https://download.blender.org/branding/community/blender_community_badge_white.svg",
      sketch: "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
      invision:
        "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
      framer: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
      matlab:
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
      postman:
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      gatsby: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
      gridsome: "https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg",
      hugo: "https://api.iconify.design/logos-hugo.svg",
      jekyll: "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
      nextjs: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      nuxtjs: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
      "11ty":
        "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg",
      scully:
        "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg",
      sculpin:
        "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg",
      sapper: "https://avatars.githubusercontent.com/u/23617963?v=4&s=400",
      vuepress: "https://vuepress.vuejs.org/hero.png",
      hexo: "https://www.vectorlogo.zone/logos/hexoio/hexoio-icon.svg",
      middleman:
        "https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg",
      unity: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
      unreal:
        "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
      zapier: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
      ifttt: "https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg",
      linux:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      arduino: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
    };

    // Check if the skill exists in the mapping
    if (skillImageMap.hasOwnProperty(skill)) {
      return skillImageMap[skill];
    }

    // If the skill is not found in the mapping, return a default image URL or an empty string
    return "url_to_default_image";
  };

  // Function to get the skill links
  const getSkillLinks = (skill) => {
    const skillLinks = {
      c: "https://en.wikipedia.org/wiki/C_(programming_language)",
      cplusplus: "https://en.wikipedia.org/wiki/C%2B%2B",
      csharp: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      go: "https://en.wikipedia.org/wiki/Go_(programming_language)",
      java: "https://en.wikipedia.org/wiki/Java_(programming_language)",
      javascript: "https://en.wikipedia.org/wiki/JavaScript",
      typescript: "https://en.wikipedia.org/wiki/TypeScript",
      php: "https://en.wikipedia.org/wiki/PHP",
      perl: "https://en.wikipedia.org/wiki/Perl",
      ruby: "https://en.wikipedia.org/wiki/Ruby_(programming_language)",
      scala: "https://en.wikipedia.org/wiki/Scala_(programming_language)",
      python: "https://en.wikipedia.org/wiki/Python_(programming_language)",
      swift: "https://en.wikipedia.org/wiki/Swift_(programming_language)",
      objectivec: "https://en.wikipedia.org/wiki/Objective-C",
      clojure: "https://en.wikipedia.org/wiki/Clojure",
      rust: "https://en.wikipedia.org/wiki/Rust_(programming_language)",
      haskell: "https://en.wikipedia.org/wiki/Haskell_(programming_language)",
      coffeescript: "https://en.wikipedia.org/wiki/CoffeeScript",
      elixir: "https://en.wikipedia.org/wiki/Elixir_(programming_language)",
      erlang: "https://en.wikipedia.org/wiki/Erlang_(programming_language)",
      nim: "https://en.wikipedia.org/wiki/Nim_(programming_language)",
      vuejs: "https://en.wikipedia.org/wiki/Vue.js",
      react: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      svelte: "https://en.wikipedia.org/wiki/Svelte",
      angularjs: "https://en.wikipedia.org/wiki/AngularJS",
      angular: "https://en.wikipedia.org/wiki/Angular_(web_framework)",
      backbonejs: "https://en.wikipedia.org/wiki/Backbone.js",
      bootstrap:
        "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
      vuetify: "https://en.wikipedia.org/wiki/Vuetify.js",
      css3: "https://en.wikipedia.org/wiki/CSS",
      html5: "https://en.wikipedia.org/wiki/HTML",
      pug: "https://en.wikipedia.org/wiki/Pug_(programming_language)",
      gulp: "https://en.wikipedia.org/wiki/Gulp.js",
      sass: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
      redux: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)",
      webpack: "https://en.wikipedia.org/wiki/Webpack",
      babel: "https://en.wikipedia.org/wiki/Babel_(transcompiler)",
      tailwind: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      materialize: "https://en.wikipedia.org/wiki/Materialize_CSS",
      bulma: "https://en.wikipedia.org/wiki/Bulma_(CSS_framework)",
      gtk: "https://en.wikipedia.org/wiki/GTK",
      qt: "https://en.wikipedia.org/wiki/Qt_(software)",
      wx_widgets: "https://en.wikipedia.org/wiki/WxWidgets",
      ember: "https://en.wikipedia.org/wiki/Ember.js",
      nodejs: "https://en.wikipedia.org/wiki/Node.js",
      spring: "https://en.wikipedia.org/wiki/Spring_Framework",
      express: "https://en.wikipedia.org/wiki/Express.js",
      graphql: "https://en.wikipedia.org/wiki/GraphQL",
      kafka: "https://en.wikipedia.org/wiki/Apache_Kafka",
      solr: "https://en.wikipedia.org/wiki/Apache_Solr",
      rabbitMQ: "https://en.wikipedia.org/wiki/RabbitMQ",
      hadoop: "https://en.wikipedia.org/wiki/Apache_Hadoop",
      nginx: "https://en.wikipedia.org/wiki/Nginx",
      openresty: "https://en.wikipedia.org/wiki/OpenResty",
      nestjs: "https://en.wikipedia.org/wiki/NestJS",
      android: "https://en.wikipedia.org/wiki/Android_(operating_system)",
      flutter: "https://en.wikipedia.org/wiki/Flutter_(software)",
      dart: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
      kotlin: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)",
      nativescript: "https://en.wikipedia.org/wiki/NativeScript",
      xamarin: "https://en.wikipedia.org/wiki/Xamarin",
      reactnative: "https://en.wikipedia.org/wiki/React_Native",
      ionic: "https://en.wikipedia.org/wiki/Ionic_(mobile_app_framework)",
      apachecordova: "https://en.wikipedia.org/wiki/Apache_Cordova",
      tensorflow: "https://en.wikipedia.org/wiki/TensorFlow",
      pytorch: "https://en.wikipedia.org/wiki/PyTorch",
      pandas: "https://en.wikipedia.org/wiki/Pandas_(software)",
      seaborn: "https://en.wikipedia.org/wiki/Seaborn_(software)",
      opencv: "https://en.wikipedia.org/wiki/OpenCV",
      scikit_learn: "https://en.wikipedia.org/wiki/Scikit-learn",
      mongodb: "https://en.wikipedia.org/wiki/MongoDB",
      mysql: "https://en.wikipedia.org/wiki/MySQL",
      postgresql: "https://en.wikipedia.org/wiki/PostgreSQL",
      redis: "https://en.wikipedia.org/wiki/Redis",
      oracle: "https://en.wikipedia.org/wiki/Oracle_Database",
      cassandra: "https://en.wikipedia.org/wiki/Apache_Cassandra",
      couchdb: "https://en.wikipedia.org/wiki/CouchDB",
      hive: "https://en.wikipedia.org/wiki/Apache_Hive",
      realm: "https://en.wikipedia.org/wiki/Realm_(database)",
      mariadb: "https://en.wikipedia.org/wiki/MariaDB",
      cockroachdb: "https://en.wikipedia.org/wiki/CockroachDB",
      elasticsearch: "https://en.wikipedia.org/wiki/Elasticsearch",
      sqlite: "https://en.wikipedia.org/wiki/SQLite",
      mssql: "https://en.wikipedia.org/wiki/Microsoft_SQL_Server",
      d3js: "https://en.wikipedia.org/wiki/D3.js",
      chartjs: "https://en.wikipedia.org/wiki/Chart.js",
      canvasjs: "https://en.wikipedia.org/wiki/CanvasJS",
      kibana: "https://en.wikipedia.org/wiki/Kibana",
      grafana: "https://en.wikipedia.org/wiki/Grafana",
      aws: "https://en.wikipedia.org/wiki/Amazon_Web_Services",
      docker: "https://en.wikipedia.org/wiki/Docker_(software)",
      jenkins: "https://en.wikipedia.org/wiki/Jenkins_(software)",
      gcp: "https://en.wikipedia.org/wiki/Google_Cloud_Platform",
      kubernetes: "https://en.wikipedia.org/wiki/Kubernetes",
      bash: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
      azure: "https://en.wikipedia.org/wiki/Microsoft_Azure",
      vagrant: "https://en.wikipedia.org/wiki/Vagrant_(software)",
      circleci: "https://en.wikipedia.org/wiki/CircleCI",
      travisci: "https://en.wikipedia.org/wiki/Travis_CI",
      firebase: "https://en.wikipedia.org/wiki/Firebase",
      appwrite: "https://en.wikipedia.org/wiki/Appwrite",
      amplify: "https://en.wikipedia.org/wiki/AWS_Amplify",
      heroku: "https://en.wikipedia.org/wiki/Heroku",
      django: "https://en.wikipedia.org/wiki/Django_(web_framework)",
      dotnet: "https://en.wikipedia.org/wiki/.NET_Framework",
      electron: "https://en.wikipedia.org/wiki/Electron_(software_framework)",
      symfony: "https://en.wikipedia.org/wiki/Symfony",
      laravel: "https://en.wikipedia.org/wiki/Laravel",
      codeigniter: "https://en.wikipedia.org/wiki/CodeIgniter",
      rails: "https://en.wikipedia.org/wiki/Ruby_on_Rails",
      flask: "https://en.wikipedia.org/wiki/Flask_(web_framework)",
      quasar: "https://en.wikipedia.org/wiki/Quasar_(framework)",
      cypress: "https://en.wikipedia.org/wiki/Cypress_(software_company)",
      selenium: "https://en.wikipedia.org/wiki/Selenium_(software)",
      jest: "https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)",
      mocha: "https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)",
      puppeteer: "https://en.wikipedia.org/wiki/Puppeteer_(software)",
      karma: "https://en.wikipedia.org/wiki/Karma_(JavaScript_test_runner)",
      jasmine: "https://en.wikipedia.org/wiki/Jasmine_(JavaScript_framework)",
      illustrator: "https://en.wikipedia.org/wiki/Adobe_Illustrator",
      photoshop: "https://en.wikipedia.org/wiki/Adobe_Photoshop",
      xd: "https://en.wikipedia.org/wiki/Adobe_XD",
      figma: "https://en.wikipedia.org/wiki/Figma",
      blender: "https://en.wikipedia.org/wiki/Blender_(software)",
      sketch: "https://en.wikipedia.org/wiki/Sketch_(software)",
      invision: "https://en.wikipedia.org/wiki/InVision_(company)",
      framer: "https://en.wikipedia.org/wiki/Framer_(company)",
      matlab: "https://en.wikipedia.org/wiki/MATLAB",
      postman: "https://en.wikipedia.org/wiki/Postman_(software)",
      gatsby: "https://en.wikipedia.org/wiki/Gatsby_(framework)",
      gridsome: "https://en.wikipedia.org/wiki/Static_web_page",
      hugo: "https://en.wikipedia.org/wiki/Hugo_(software)",
      jekyll: "https://en.wikipedia.org/wiki/Jekyll_(software)",
      nextjs: "https://en.wikipedia.org/wiki/Next.js",
      nuxtjs: "https://en.wikipedia.org/wiki/Nuxt.js",
      "11ty": "https://en.wikipedia.org/wiki/Eleventy_(software)",
      scully: "https://en.wikipedia.org/wiki/Scully_(software)",
      sculpin: "https://en.wikipedia.org/wiki/Sculpin",
      sapper: "https://en.wikipedia.org/wiki/Sapper_(software)",
      vuepress: "https://en.wikipedia.org/wiki/VuePress",
      hexo: "https://en.wikipedia.org/wiki/Hexo",
      middleman: "https://en.wikipedia.org/wiki/Middleman_(software)",
      unity: "https://en.wikipedia.org/wiki/Unity_(game_engine)",
      unreal: "https://en.wikipedia.org/wiki/Unreal_Engine",
      zapier: "https://en.wikipedia.org/wiki/Zapier",
      ifttt: "https://en.wikipedia.org/wiki/IFTTT",
      linux: "https://en.wikipedia.org/wiki/Linux",
      git: "https://en.wikipedia.org/wiki/Git",
      arduino: "https://en.wikipedia.org/wiki/Arduino",
    };

    if (skillLinks.hasOwnProperty(skill)) {
      return skillLinks[skill];
    }

    return "";
  };

  // Markdown for the readme
  const markdown = (
    <>
      <code>
        &lt;h1 align="center"&gt;{data.name ? data.name.title : ""}{" "}
        {data.name ? data.name.name : ""}&lt;/h1&gt;
      </code>
      <br />
      <code>
        &lt;h3 align="center"&gt;{data.subtitle ? data.subtitle.title : ""}
        &lt;/h3&gt;
      </code>
      <br />
      <br />
      {data.work && data.work.length > 0
        ? data.work.map((item, index) => (
            <div key={index}>
              <code>
                - {item.title || ""}{" "}
                {item.project && (
                  <>
                    [{item.project}]({item.link})
                  </>
                )}
              </code>
              <br />
            </div>
          ))
        : ""}
      <br />

      <code>&lt;h3 align="left"&gt;Connect with me:&lt;/h3&gt;</code>
      <br />
      <code>
        &lt;p align="left"&gt;
        <br />
        {socialLinks.map((link, index) => (
          <>
            <code>
              &lt;a href="{link.link}
              {link.value}" target="blank"&gt;
              <code>
                &lt;img&nbsp;
                <code>
                  align="center"&nbsp;
                  <code>
                    src="{link.src}"&nbsp;
                    <code>
                      alt="{link.title}"&nbsp;
                      <code>
                        height="30"&nbsp;
                        <code>
                          width="40"
                          <code>/&gt;</code>
                        </code>
                      </code>
                    </code>
                  </code>
                </code>
              </code>
            </code>
            <code>&lt;/a&gt;&nbsp;</code>
          </>
        ))}
        &lt;/p&gt;
      </code>
      <br />
      <br />
      <code>&lt;h3 align="left"&gt;Languages and Tools:&lt;/h3&gt;</code>
      <br />
      <code>
        &lt;p align="left"&gt;
        <br />
        {skills.map((skill, index) => (
          <>
            <code>
              &lt;a href="{getSkillLinks(skill)}" target="blank"&gt;
              <code>
                &lt;img&nbsp;
                <code>
                  align="center"&nbsp;
                  <code>
                    src="{getSkillImage(skill)}"&nbsp;
                    <code>
                      alt="{skill}"&nbsp;
                      <code>
                        height="40"&nbsp;
                        <code>
                          width="40"
                          <code>/&gt;</code>
                        </code>
                      </code>
                    </code>
                  </code>
                </code>
              </code>
            </code>
            <code>&lt;/a&gt;&nbsp;</code>
          </>
        ))}
        &lt;/p&gt;
      </code>
    </>
  );

  // Function to format the markdown
  const formateMeark = (markdown) => {
    const markdownString = ReactDOMServer.renderToStaticMarkup(markdown);
    const result = markdownString
      .replace(/<code[^>]*>/g, "")
      .replace(/<\/?code>/g, "")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/<br\/?>/g, "\n")
      .replace(/<div>/g, "")
      .replace(/<\/div>/g, "")
      .replace(/<h1 align="center">/g, "# ")
      .replace(/<\/h1>/g, "")
      .replace(/<h3 align="center">/g, "### ")
      .replace(/<\/h3>/g, "")
      .replace(/<h3 align="left">/g, "### ")
      .replace(/<\/h3>/g, "");
    // .replace(/<p align="left">/g, "")
    // .replace(/<\/p>/g, "")
    // .replace(/<a href="/g, "[")
    // .replace(/" target="blank">/g, "](")
    // .replace(/<\/a>/g, ")")
    // .replace(/<img align="center" src="/g, "![")
    // .replace(/" alt="/g, "](")
    // .replace(/" height="30" width="40"\/>/g, ")")
    // .replace(/<img align="center" src="/g, "![")
    // .replace(/" alt="/g, "](")
    // .replace(/" height="40" width="40"\/>/g, ")")
    // .replace(/<img align="center" src="/g, "![");
    return result;
  };

  // Function to copy the markdown
  const handleCopyMarkdown = () => {
    const markdownString = formateMeark(markdown);
    navigator.clipboard.writeText(markdownString);
  };

  // Function to download the markdown
  const handleDownloadMarkdown = () => {
    const blob = new Blob([formateMeark(markdown)], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "readme.md";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
      <ActionButtonWrapper>
        <ActionButton
          icon="arrow-back-outline"
          text="back to edit"
          onClick={toggleActionButtons}
        />
        <ActionButton
          onClick={handleCopyMarkdown}
          icon="copy-outline"
          text="copy markdown"
        />
        <ActionButton
          onClick={handleDownloadMarkdown}
          icon="download-outline"
          text="download readme.md"
        />
      </ActionButtonWrapper>

      <ReadmePadWrapper style={{ fontSize: "1.5rem" }}>
        {markdown}
      </ReadmePadWrapper>
    </>
  );
};

export default ReadmePad;
