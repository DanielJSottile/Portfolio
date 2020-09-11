import React, { Component } from 'react';
const Context = React.createContext({
  projects: [],
  techStack: {},
});

export default Context;

export class ContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          id: 1,
          name: 'PokeTeams',
          repo1: 'https://github.com/DanielJSottile/poketeams-client',
          repo2: 'https://github.com/DanielJSottile/poketeams-server',
          livePage: 'https://poketeams.now.sh/',
          desc: 'Thinkful E.I.\'s 1st Capstone project, this full-stack application was created over a 2-week period with React and Node.js, and is easily the largest and most complicated of my projects.  It currently uses TypeScript for the front end code!  PokeTeams is an application for creating and storing Pokemon Showdown teams in a permanent database as opposed to current pastebin solutions, and is for general users of the site Pokemon Showdown and other Pokemon enthusiasts.  In the future, this application will be fully open to the public and add many more features as necessary, becoming even larger and incorporating new technologies!  I built this because I myself had issues with saving teams, and I found that other people had this same problem.',
          techStack: {
            'HTML5': <i className="fab fa-html5"></i>, 
            'SAAS': null,
            'CSS': <i className="fab fa-css3-alt"></i>, 
            'TypeScript': null,
            'JavaScript': <i className="fab fa-js"></i>,
            'React': <i className="fab fa-react"></i>, 
            'Node.js': <i className="fab fa-node-js"></i>, 
            'Express': null, 
            'Jest': null, 
            'Enzyme': null, 
            'Mocha': null, 
            'Chai': null, 
            'Supertest': null, 
            'XSS': null, 
            'Winston':  null, 
            'NYC': null, 
            'PostgresQL': null, 
            'Knex': null,
            'Lodash': null,
           },
        },
        {
          id: 2,
          name: 'Penny Thoughts',
          repo1: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-client',
          repo2: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-server',
          livePage: 'https://penny-thoughts.vercel.app/',
          desc: 'Thinful E.I.\'s 3rd and final Capstone project, this full-stack application was built in 3 weeks with a team of 6 students, and allowed for full flexibility of application creation.  Penny Thoughts was my pitch idea to the group, which allows users to upload uplifting and positive messages to a database.  These messages are then pre-filtered by a TensorFlow.js AI Toxicity model, along with a user-based report system.  It uses extensive CSS animations and styling to create a fun, inviting atmosphere for the user!  We built this app because during these current times, positivity is at an all time low, and Penny Thoughts is a place where we can share what we can.',
          techStack: {
            'HTML5': <i className="fab fa-html5"></i>, 
            'CSS': <i className="fab fa-css3-alt"></i>, 
            'JavaScript': <i className="fab fa-js"></i>, 
            'React': <i className="fab fa-react"></i>, 
            'Node.js': <i className="fab fa-node-js"></i>, 
            'Express': null, 
            'Jest': null, 
            'Enzyme': null, 
            'Mocha': null, 
            'Chai': null, 
            'Supertest': null, 
            'XSS': null, 
            'Winston':  null, 
            'NYC': null, 
            'PostgresQL': null, 
            'Knex': null, 
            'TensorFlow.js': null, 
            'Crypto-js': null, 
           },
        },
        {
          id: 3,
          name: 'Spaced Repetition - Oratore',
          repo1: 'https://github.com/thinkful-ei-narwhal/Spaced-Repetition-client-Joseph-Daniel',
          repo2: 'https://github.com/thinkful-ei-narwhal/Spaced-Repetition-server-Joseph-Daniel',
          livePage: 'https://oratore-spaced-repetition.vercel.app/',
          desc: 'Thinkful E.I.\'s 2nd Capstone project, this full-stack application was built in 1 week with a partner based on a specific set of guidelines, including passing Cypress client-side testing.  This app is designed as a spaced-repeition language learning application geared towards those who wish to lean a new language.  While this project gave little room for flexibility, my partner and I attempted as much as we could to make it as unique as possible.',
          techStack: {
            'HTML5': <i className="fab fa-html5"></i>, 
            'CSS': <i className="fab fa-css3-alt"></i>, 
            'JavaScript': <i className="fab fa-js"></i>, 
            'React': <i className="fab fa-react"></i>, 
            'Node.js': <i className="fab fa-node-js"></i>, 
            'Express': null, 
            'Jest': null, 
            'Enzyme': null, 
            'Mocha': null, 
            'Chai': null, 
            'Supertest': null, 
            'XSS': null, 
            'Winston':  null, 
            'NYC': null, 
            'PostgresQL': null, 
            'Knex': null, 
            'Cypress':  null
           },
        },
        {
          id: 4,
          name: 'Petful',
          repo1: 'https://github.com/thinkful-ei-narwhal/DSA-Petful-client-Cesar-Daniel',
          repo2: 'https://github.com/thinkful-ei-narwhal/DSA-Petful-api-Cesar-Daniel',
          livePage: 'https://petful-alpha.vercel.app/',
          desc: 'A challenge project during Thinkful\'s E.I. program, this project was meant to recap our study of Data Structures and Algorithms, and this app specifically employed Queues in order to deal with adoptees and pets in the shelter.  It is geared toward people who wish to adopt pets, and toward adoption agencies who wish to adopt pets who enter their shelter first.  We even went the extra mile and incorporated them into our React App, which made State very tricky!',
          techStack: {
            'HTML5': <i className="fab fa-html5"></i>, 
            'CSS': <i className="fab fa-css3-alt"></i>, 
            'JavaScript': <i className="fab fa-js"></i>, 
            'React': <i className="fab fa-react"></i>, 
            'Node.js': <i className="fab fa-node-js"></i>,
            'Express': null
           },
        },
        {
          id: 5,
          name: 'Quiz App',
          repo1: 'https://github.com/thinkful-ei-narwhal/quiz-app-boilerplate-chadwick-daniel',
          repo2: null,
          livePage: 'https://thinkful-ei-narwhal.github.io/quiz-app-boilerplate-chadwick-daniel/',
          desc: 'A simple quiz app created in jQuery based on anime trivia.  While it was intended to be done with a partner, my partner was mostly absent while creating it.  It was created for anime weebs such as myself.  This was created while studying at Thinkful.',
          techStack: {
            'HTML5': <i className="fab fa-html5"></i>, 
            'CSS': <i className="fab fa-css3-alt"></i>, 
            'JavaScript': <i className="fab fa-js"></i>, 
            'jQuery' : null
           },
        },
      ],
      techStack: {
        'HTML5': <i className="fab fa-html5"></i>, 
        'CSS': <i className="fab fa-css3-alt"></i>, 
        'JavaScript': <i className="fab fa-js"></i>,
        'TypeScript': null,
        'jQuery': null,
        'React': <i className="fab fa-react"></i>, 
        'Node.js': <i className="fab fa-node-js"></i>, 
        'Express': null, 
        'Jest': null, 
        'Enzyme': null, 
        'Mocha': null, 
        'Chai': null, 
        'Supertest': null, 
        'XSS': null, 
        'Winston':  null, 
        'NYC': null, 
        'PostgresQL': null, 
        'Knex': null, 
        'Cypress':  null, 
        'TensorFlow.js': null, 
        'Crypto-js': null, 
        'Python': <i className="fab fa-python"></i>
       },
    }
  }


  render() {
    const value = {
      projects: this.state.projects,
      techStack: this.state.techStack,
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
