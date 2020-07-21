import React, { Fragment } from 'react'

export default function HomePage(props) {
  return (
    <Fragment>
      <div>
        <h2 className="heading fade-in-left">About</h2>
        <h3 className="subheading fade-in-bottom">I'm Daniel! I'm a frontend / backend JavaScript web developer!</h3>
        <div className="word-container fade-in-bottom">
          <img className="profile-picture" src="https://imgur.com/StFdhLK.png" alt="profile"/>
          <div className="paras">
            <p>
              My name is Daniel!  I am a fullstack JavaScript web developer and a graduate of the Engineering Immersion bootcamp at Thinkful in 2020. 
              I love solving problems with new kinds of tech and I hope to be able to share this enthusiasm with others on a team with other equally enthusiastic programmers!
              I'm really interested in AI advancements and programs that can learn to solve problems on their own. I specialize in React for frontend and Node.js for backend applications.
            </p>
            <p>
              When I'm not coding, I'm often working on composing film and video game music, some for my own 
              projects and interests. In many ways, composing music and programming code are both cut from the 
              same cloth. I think if we treat code more like music, we'll find some amazing solutions out there!
            </p>
            <p>
              My career goals are to end up not only making a difference in the world, but to be able to 
              continue to support the hobbies that I spent much of my life studying for.
            </p>
          </div>
          
        </div>
      </div>
    </Fragment>
  );
}


