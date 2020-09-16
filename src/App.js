import React from 'react';
import "./App.css";
import Header from "./Header";
import Landing from "./Landing";


const App = (props) => (
  <div>
    <div className="Background" />
    <Header />
    <Landing />

    <div className="Body">
      <h1>Hey, It's Me</h1>
      Alright, first CSC290 blog, let's do this. I actually recognize a decent
      amount of people in this class, so, if you know me, hi, and if you don't,
      hi anyways! (You should{" "}
      <a href="https://www.instagram.com/ethannomiddlenamelam/">
        follow me on Instagram)
      </a>
      <br />
      <br />
      My name's Ethan Lam, I'm a second year CS specialist and hopeful
      philosophy and psych minor. This semester, I'm taking CSC290, CSC236,
      MAT232, STA256, PHL246, and PSY100, so if we share any classes, hit me up!
      <br />
      <br />
      I'm actually pretty new to Computer Science. For the first 18 years of my
      life, I thought I was gonna go into music.
      <br />
      <br />
      Then I realized, employability and a steady income are also pretty cool.
      <br />
      <br />
      So, long story short, I flipped a coin and ended up at UTM CS. Thankfully,
      I'm really enjoying it here!
      <br />
      <br />
      I'm interested in learning about all facets of CS, but recently, I've been
      looking into front-end development. This bare-bones blog website is
      technically my first front-end *thing* (When I figure out how to import
      Markdown files into a website, *thing* will be italicized. For now, do me
      a favour and just imagine it is? Thanks).
      <br />
      <h3>Computer Science Goals</h3>
      Honestly, I really just want to learn more about Computer Science, work on
      some side projects, and *hopefully* land some form of internship by next
      summer.
      <br />
      <br />
      In terms of goals for 290, it'd be great to meet new people in the CS
      community! I'm always down to learn new things with people. (Also, if any
      of you guys have rich and powerful parents who are giving out CS
      internships, let the record show that I am not above nepotism).
      <br />
      <br />
      I also really want to get my own website up and running. Right now, I'm
      literally writing this blog in the .js page of my code (ew), hopefully by
      the final blog of this course, this'll be hosted on my own website instead
      of netlify, written in markdown, have pictures, etc, so stay tuned for that.
      <br />
      <br />
      Also, I give you full permission to shoot me a{" "}
      <a href="https://www.instagram.com/ethannomiddlenamelam/">DM</a> at any
      time asking about how the website's going, because it'll probably get me
      to work on it more.
      <h3>Misc.</h3>
      In terms of non-CS stuff, if anyone ever wants to longboard, kayak, or
      rock climb together, I'm always down for that! I would say that you can
      catch me on campus, but global pandemics are surprisingly inconvenient, so
      you'll have to
      <a href="https://www.instagram.com/ethannomiddlenamelam/">
        {" "}
        contact me first.
      </a>
      <br />
      <br />I still am into music, so if anyone ever wants to jam or talk music,
      you can{" "}
      <a href="https://www.instagram.com/ethannomiddlenamelam/"> hit me up.</a>
      <br />
      <br />
      I also sell hoodies with my @ on them, and shirts with my face on them.
      <br />
      <br />
      It's a long story.
      <br />
      <br />
      If you're curious, you can ask me on my
      <a href="https://www.instagram.com/ethannomiddlenamelam/"> Instagram</a>,
      and while you're there, might as well follow me!
      <br />
      <br />
      Have I{" "}
      <a href="https://www.instagram.com/ethannomiddlenamelam/">
        self promoted
      </a>{" "}
      enough yet? Awesome. See ya in the next one.
    </div>
  </div>
);

export default App;
