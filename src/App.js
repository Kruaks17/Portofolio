import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {

    const moveCursor = (e) => {

      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)



      const x = e.clientX - 16
      const y = e.clientY - 16

      setCursorXY({ x, y })

    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

  }, [])

  return (

    <BrowserRouter>
      <div>
        <div className="cursor"
          style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0) `,
            translateX: cursorX, translateY:  cursorY,
          }}
        />
      </div>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>

  )


}

export default App;
