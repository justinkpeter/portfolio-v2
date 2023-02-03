import React, { useState, useEffect, forwardRef } from "react"
import { motion, useMotionValue } from "framer-motion";
import '../styles/CustomCursor.css'
export const CustomCursor = () => {

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // First, we need to capture the mousemove events and define a listener function which will animate
    // our cursor to a correct position.

    // const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        window.addEventListener('mousemove', moveCursor)

        // The return function in the useEffect removes the listener on cleanup and makes sure that we don’t
        // add multiple event listeners for the same event.
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
        // last argument given to useEffect is an empty array [], which means we’ll be only running the function
        // once over the component’s lifecycle
    }, [])



    return(
        // <div className="cursor" style={{
        //     transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        // }}/>

        <motion.div className={'cursor'} style={{translateX: cursorX, translateY: cursorY}}/>
    )
}