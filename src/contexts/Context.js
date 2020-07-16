import React, { Component } from 'react';
const Context = React.createContext({
  projects: [],
});

export default Context;

export class ContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          id: 1,
          name: 'Quiz App',
          repo1: 'https://github.com/thinkful-ei-narwhal/quiz-app-boilerplate-chadwick-daniel',
          repo2: null,
          livePage: 'https://thinkful-ei-narwhal.github.io/quiz-app-boilerplate-chadwick-daniel/',
          desc: 'A simple quiz app created in JQuery based on Anime.  It was create while studying at Thinkful',
          techStack: ['HTML5', 'CSS', 'JavaScript', 'JQuery']
        },
        {
          id: 2,
          name: 'PokeTeams',
          repo1: 'https://github.com/DanielJSottile/poketeams-client',
          repo2: 'https://github.com/DanielJSottile/poketeams-server',
          livePage: 'https://poketeams.now.sh/',
          desc: 'Thinkful E.I.\'s 1st Capstone project, this full-stack application was created over a 2-week period with React and Node.js.  PokeTeams is a nice application for storing Pokemon Showdown teams in a permanent database as opposed to current pastebin solutions.',
          techStack: ['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Jest', 'Enzyme', 'Mocha', 'Chai', 'Supertest', 'XSS', 'Winston', 'NYC', 'PostgresQL', 'Knex']
        },
        {
          id: 3,
          name: 'Spaced Repetition - Oratore',
          repo1: 'https://github.com/thinkful-ei-narwhal/Spaced-Repetition-client-Joseph-Daniel',
          repo2: 'https://github.com/thinkful-ei-narwhal/Spaced-Repetition-server-Joseph-Daniel',
          livePage: 'https://oratore-spaced-repetition.vercel.app/',
          desc: 'Thinkful E.I.\'s 2nd Capstone project, this full-stack application was built in 1 week with a partner based on a specific set of guidelines, including passing Cypress client-side testing.  While this project gave little room for flexibility, my partner and I attempted as much as we could to make it as unique as possible.',
          techStack: ['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Jest', 'Enzyme', 'Mocha', 'Chai', 'Supertest', 'XSS', 'Winston', 'NYC', 'PostgresQL', 'Knex', 'Cypress']
        },
        {
          id: 4,
          name: 'Penny Thoughts',
          repo1: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-client',
          repo2: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-server',
          livePage: 'https://penny-thoughts.vercel.app/',
          desc: 'Thinful E.I.\'s 3rd and final Capstone project, this full-stack application was built in 3 weeks with a team of 6 students, and allowed for full flexibility of application creation.  Penny Thoughts was my pitch idea to the group, which allows users to upload uplifting and positive messages to a database.  These messages are then pre-filtered by a TensorFlow.js AI Toxicity model, along with a user-based report system.  It uses extensive CSS animations and styling to create a fun, inviting atmosphere for the user!',
          techStack: ['TensorFlow.js', 'Crypto-js', 'HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Jest', 'Enzyme', 'Mocha', 'Chai', 'Supertest', 'XSS', 'Winston', 'NYC', 'PostgresQL', 'Knex']
        }
      ],
    }
  }


  render() {
    const value = {
      projects: this.state.projects,
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
