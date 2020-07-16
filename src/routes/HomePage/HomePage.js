import React, { Fragment } from 'react'

export default function HomePage(props) {
  return (
    <Fragment>
      <div>
        <h2 className="heading fade-in-left">About</h2>
        {/* image here */}
        <div className="word-container fade-in-bottom">
          <h3 className="subheading">I'm Daniel! I'm a frontend / backend JavaScript web developer!</h3>
          <p>
            I am a fullstack JavaScript web developer and a graduate of the Engineering Immersion bootcamp at Thinkful in 2020. 
            I love solving problems with new kinds of tech and I hope to be able to share this enthusiasm with others on a team with other equally enthusiastic programmers!
            I'm really interested in AI advancements and programs that can learn to solve problems on their own.
          </p>
          <p>
            When I'm not coding, I'm often working on composing film and video game music, some for my own 
            projects and interests. In many ways, composing music and programming code are both cut from the 
            same cloth. I think if we treat code more like music, we'll find some amazing solutions out there!
          </p>
        </div>
      </div>
    </Fragment>
  );
}


