//bring React & component instance
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {emojify} from 'react-emojione';

// installed emojify for emojis
class Gabs extends Component {
  render() {
    return(
      <div className="gabs">
        <div className="gabs-header">
          <img src={"gabs.jpg"} className="gabs-pic" alt="profile pic" />
          <h2>Welcome! I'm glad to have you {emojify(':wink: :D  ^__^ :sparkles:')}</h2>
          <h3> I rely on prayer, my brother and my dear friends Rosé and
           Chardonay to get me through this thing we call life. My hobbies include
           traveling, {this.props.hobbies} I determine my friends by their love of traveling, their abilities
           to drink, eat tacos, remain enthusiastic after taking 200 pictures and being
           happy to take 100 more...{emojify(':revolving_hearts::relaxed:')} </h3>
          <h4> Written {emojify(':love_letter:')} by {this.props.author}</h4>
        </div>
        <p2 className="gabs-p">
Oftentimes, we display our success and shy away from
our failures. It is a human reflex for people to hide what makes them
feel vulnerable. I've had few successes but also
experienced failures. As difficult as it might be, I am
not afraid to talk about my failures because, it helps
others to know that they are not alone. It is also an
opportunity to grow, rise above the occasion. We all make mistakes.
There will always be things that we wish we had done differently.
Unfortunately, life does not come with a manual or an eraser. All we
can do is learn and move on. For holding on to what could have been
will only steal today's and tomorrow's happiness.
So far, I failed to secure positions at the British Consulate,
the United Nations, The US Embassy of Bangkok, a cleckship for
Supreme Court Justice Sonia Sotomayor. I also failed to use
my time wisely. Had I have better time management practices my
book would have been published by now. I learned my lessons and
I am determined to evolve and letting go of things that are holding me
back. I am unable to change the past but I can most
certainly shape the future.

        </p2>
      </div>
    );
  }
}


export default Gabs;
