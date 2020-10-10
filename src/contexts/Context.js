import React, { Component } from 'react';
const Context = React.createContext({
  projects: [],
  techStack: {},
});

export default Context;

export class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          name: 'PokeTeams',
          repo1: 'https://github.com/DanielJSottile/poketeams-client',
          repo2: 'https://github.com/DanielJSottile/poketeams-server',
          livePage: 'https://poketeams.now.sh/',
          desc:
            "Thinkful E.I.'s 1st Capstone project, this full-stack application was created over a 2-week period with React and Node.js, and is easily the largest and most complicated of my projects.  It currently uses TypeScript for the front end code!  PokeTeams is an application for creating and storing Pokemon Showdown teams in a permanent database as opposed to current pastebin solutions, and is for general users of the site Pokemon Showdown and other Pokemon enthusiasts.  In the future, this application will be fully open to the public and add many more features as necessary, becoming even larger and incorporating new technologies!  I built this because I myself had issues with saving teams, and I found that other people had this same problem.",
          techStack: {
            HTML5: <i className="fab fa-html5"></i>,
            SAAS: (
              <img
                className="icon"
                src={require('../Images/440px-Sass-Logo-Color.png')}
                alt="SASS-icon"
              />
            ),
            CSS: <i className="fab fa-css3-alt"></i>,
            TypeScript: (
              <img
                className="icon"
                src={require('../Images/1200px-Typescript_logo_2020.png')}
                alt="TypeScript-icon"
              />
            ),
            JavaScript: <i className="fab fa-js"></i>,
            React: <i className="fab fa-react"></i>,
            'Node.js': <i className="fab fa-node-js"></i>,
            Express: null,
            Jest: (
              <img
                className="icon"
                src={require('../Images/jest.png')}
                alt="Jest-icon"
              />
            ),
            Enzyme: (
              <img
                className="icon"
                src={require('../Images/enzyme.png')}
                alt="Enzyme-icon"
              />
            ),
            Mocha: (
              <img
                className="icon"
                src={require('../Images/mocha.png')}
                alt="Mocha-icon"
              />
            ),
            Chai: null,
            Supertest: null,
            XSS: null,
            Winston: null,
            NYC: null,
            PostgreSQL: (
              <img
                className="icon"
                src={require('../Images/elephant.png')}
                alt="PostgreSQL-icon"
              />
            ),
            Knex: (
              <img
                className="icon"
                src={require('../Images/knex.png')}
                alt="Knex-icon"
              />
            ),
            Lodash: (
              <img
                className="icon"
                src={require('../Images/Lodash.png')}
                alt="Lodash-icon"
              />
            ),
            'Pre-Commit': (
              <img
                className="icon"
                src={require('../Images/precommit.png')}
                alt="Pre-Commit-icon"
              />
            ),
            Vercel: (
              <img
                className="icon"
                src={require('../Images/vercel.png')}
                alt="Vercel-icon"
              />
            ),
            Heroku: (
              <img
                className="icon"
                src={require('../Images/heroku.png')}
                alt="Heroku-icon"
              />
            ),
          },
        },
        {
          id: 2,
          name: 'Bloqs4Good Landing Page Demo',
          repo1: 'https://github.com/DanielJSottile/bloq4good-demo',
          repo2: null,
          livePage: 'https://bloq4good-demo.vercel.app/',
          desc:
            'A Landing Page demo for a prospective employer, this page uses React-Spring and React Scroll Animation, along with Animista CSS Animations, to create a lively and interesting landing page!  Feel free to see what I can do!  In the future, this may evolve into an actual page for this company!',
          techStack: {
            HTML5: <i className="fab fa-html5"></i>,
            SAAS: (
              <img
                className="icon"
                src={require('../Images/440px-Sass-Logo-Color.png')}
                alt="SASS-icon"
              />
            ),
            CSS: <i className="fab fa-css3-alt"></i>,
            TypeScript: (
              <img
                className="icon"
                src={require('../Images/1200px-Typescript_logo_2020.png')}
                alt="TypeScript-icon"
              />
            ),
            JavaScript: <i className="fab fa-js"></i>,
            React: <i className="fab fa-react"></i>,
            'React-Spring': (
              <img
                className="icon"
                src={require('../Images/React-spring.png')}
                alt="React-Spring-icon"
              />
            ),
            'Pre-Commit': (
              <img
                className="icon"
                src={require('../Images/precommit.png')}
                alt="Pre-Commit-icon"
              />
            ),
            Vercel: (
              <img
                className="icon"
                src={require('../Images/vercel.png')}
                alt="Vercel-icon"
              />
            ),
          },
        },
        {
          id: 3,
          name: 'Penny Thoughts',
          repo1: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-client',
          repo2: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-server',
          livePage: 'https://penny-thoughts.vercel.app/',
          desc:
            "Thinful E.I.'s 3rd and final Capstone project, this full-stack application was built in 3 weeks with a team of 6 students, and allowed for full flexibility of application creation.  Penny Thoughts was my pitch idea to the group, which allows users to upload uplifting and positive messages to a database.  These messages are then pre-filtered by a TensorFlow.js AI Toxicity model, along with a user-based report system.  It uses extensive CSS animations and styling to create a fun, inviting atmosphere for the user!  We built this app because during these current times, positivity is at an all time low, and Penny Thoughts is a place where we can share what we can.",
          techStack: {
            HTML5: <i className="fab fa-html5"></i>,
            CSS: <i className="fab fa-css3-alt"></i>,
            JavaScript: <i className="fab fa-js"></i>,
            React: <i className="fab fa-react"></i>,
            'Node.js': <i className="fab fa-node-js"></i>,
            Express: null,
            Jest: (
              <img
                className="icon"
                src={require('../Images/jest.png')}
                alt="Jest-icon"
              />
            ),
            Enzyme: (
              <img
                className="icon"
                src={require('../Images/enzyme.png')}
                alt="Enzyme-icon"
              />
            ),
            Mocha: (
              <img
                className="icon"
                src={require('../Images/mocha.png')}
                alt="Mocha-icon"
              />
            ),
            Chai: null,
            Supertest: null,
            XSS: null,
            Winston: null,
            NYC: null,
            PostgreSQL: (
              <img
                className="icon"
                src={require('../Images/elephant.png')}
                alt="PostgreSQL-icon"
              />
            ),
            Knex: (
              <img
                className="icon"
                src={require('../Images/knex.png')}
                alt="Knex-icon"
              />
            ),
            'TensorFlow.js': (
              <img
                className="icon"
                src={require('../Images/TensorFlow.png')}
                alt="TensorFlow-icon"
              />
            ),
            'Crypto-js': null,
            Vercel: (
              <img
                className="icon"
                src={require('../Images/vercel.png')}
                alt="Vercel-icon"
              />
            ),
            Heroku: (
              <img
                className="icon"
                src={require('../Images/heroku.png')}
                alt="Heroku-icon"
              />
            ),
          },
        },
        {
          id: 4,
          name: 'Spaced Repetition - Oratore',
          repo1:
            'https://github.com/thinkful-ei-narwhal/Spaced-Repetition-client-Joseph-Daniel',
          repo2:
            'https://github.com/thinkful-ei-narwhal/Spaced-Repetition-server-Joseph-Daniel',
          livePage: 'https://oratore-spaced-repetition.vercel.app/',
          desc:
            "Thinkful E.I.'s 2nd Capstone project, this full-stack application was built in 1 week with a partner based on a specific set of guidelines, including passing Cypress client-side testing.  This app is designed as a spaced-repeition language learning application geared towards those who wish to lean a new language.  While this project gave little room for flexibility, my partner and I attempted as much as we could to make it as unique as possible.",
          techStack: {
            HTML5: <i className="fab fa-html5"></i>,
            CSS: <i className="fab fa-css3-alt"></i>,
            JavaScript: <i className="fab fa-js"></i>,
            React: <i className="fab fa-react"></i>,
            'Node.js': <i className="fab fa-node-js"></i>,
            Express: null,
            Jest: (
              <img
                className="icon"
                src={require('../Images/jest.png')}
                alt="Jest-icon"
              />
            ),
            Enzyme: (
              <img
                className="icon"
                src={require('../Images/enzyme.png')}
                alt="Enzyme-icon"
              />
            ),
            Mocha: (
              <img
                className="icon"
                src={require('../Images/mocha.png')}
                alt="Mocha-icon"
              />
            ),
            Chai: null,
            Supertest: null,
            XSS: null,
            Winston: null,
            NYC: null,
            PostgreSQL: (
              <img
                className="icon"
                src={require('../Images/elephant.png')}
                alt="PostgreSQL-icon"
              />
            ),
            Knex: (
              <img
                className="icon"
                src={require('../Images/knex.png')}
                alt="Knex-icon"
              />
            ),
            Cypress: null,
            Vercel: (
              <img
                className="icon"
                src={require('../Images/vercel.png')}
                alt="Vercel-icon"
              />
            ),
            Heroku: (
              <img
                className="icon"
                src={require('../Images/heroku.png')}
                alt="Heroku-icon"
              />
            ),
          },
        },
        {
          id: 5,
          name: 'Petful',
          repo1:
            'https://github.com/thinkful-ei-narwhal/DSA-Petful-client-Cesar-Daniel',
          repo2:
            'https://github.com/thinkful-ei-narwhal/DSA-Petful-api-Cesar-Daniel',
          livePage: 'https://petful-alpha.vercel.app/',
          desc:
            "A challenge project during Thinkful's E.I. program, this project was meant to recap our study of Data Structures and Algorithms, and this app specifically employed Queues in order to deal with adoptees and pets in the shelter.  It is geared toward people who wish to adopt pets, and toward adoption agencies who wish to adopt pets who enter their shelter first.  We even went the extra mile and incorporated them into our React App, which made State very tricky!",
          techStack: {
            HTML5: <i className="fab fa-html5"></i>,
            CSS: <i className="fab fa-css3-alt"></i>,
            JavaScript: <i className="fab fa-js"></i>,
            React: <i className="fab fa-react"></i>,
            'Node.js': <i className="fab fa-node-js"></i>,
            Express: null,
            Vercel: (
              <img
                className="icon"
                src={require('../Images/vercel.png')}
                alt="Vercel-icon"
              />
            ),
            Heroku: (
              <img
                className="icon"
                src={require('../Images/heroku.png')}
                alt="Heroku-icon"
              />
            ),
          },
        },
      ],
      techStack: {
        HTML5: <i className="fab fa-html5"></i>,
        SAAS: (
          <img
            className="icon"
            src={require('../Images/440px-Sass-Logo-Color.png')}
            alt="SASS-icon"
          />
        ),
        CSS: <i className="fab fa-css3-alt"></i>,
        JavaScript: <i className="fab fa-js"></i>,
        TypeScript: (
          <img
            className="icon"
            src={require('../Images/1200px-Typescript_logo_2020.png')}
            alt="TypeScript-icon"
          />
        ),
        jQuery: (
          <img
            className="icon"
            src={require('../Images/jquery.jpg')}
            alt="jquery-icon"
          />
        ),
        React: <i className="fab fa-react"></i>,
        'React Native': (
          <img
            className="icon"
            src={require('../Images/react-native-logo.png')}
            alt="React-Native-icon"
          />
        ),
        Redux: (
          <img
            className="icon"
            src={require('../Images/redux.png')}
            alt="Redux-icon"
          />
        ),
        'Node.js': <i className="fab fa-node-js"></i>,
        Express: null,
        Jest: (
          <img
            className="icon"
            src={require('../Images/jest.png')}
            alt="Jest-icon"
          />
        ),
        Enzyme: (
          <img
            className="icon"
            src={require('../Images/enzyme.png')}
            alt="Enzyme-icon"
          />
        ),
        Mocha: (
          <img
            className="icon"
            src={require('../Images/mocha.png')}
            alt="Mocha-icon"
          />
        ),
        Chai: null,
        Supertest: null,
        XSS: null,
        Winston: null,
        NYC: null,
        PostgreSQL: (
          <img
            className="icon"
            src={require('../Images/elephant.png')}
            alt="PostgreSQL-icon"
          />
        ),
        Knex: (
          <img
            className="icon"
            src={require('../Images/knex.png')}
            alt="Knex-icon"
          />
        ),
        Cypress: null,
        'TensorFlow.js': (
          <img
            className="icon"
            src={require('../Images/TensorFlow.png')}
            alt="TensorFlow-icon"
          />
        ),
        'Crypto-js': null,
        Lodash: (
          <img
            className="icon"
            src={require('../Images/Lodash.png')}
            alt="Lodash-icon"
          />
        ),
        'React-Spring': (
          <img
            className="icon"
            src={require('../Images/React-spring.png')}
            alt="React-Spring-icon"
          />
        ),
        'Pre-Commit': (
          <img
            className="icon"
            src={require('../Images/precommit.png')}
            alt="Pre-Commit-icon"
          />
        ),
        Vercel: (
          <img
            className="icon"
            src={require('../Images/vercel.png')}
            alt="Vercel-icon"
          />
        ),
        Heroku: (
          <img
            className="icon"
            src={require('../Images/heroku.png')}
            alt="Heroku-icon"
          />
        ),
        Python: <i className="fab fa-python"></i>,
      },
    };
  }

  render() {
    const value = {
      projects: this.state.projects,
      techStack: this.state.techStack,
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
