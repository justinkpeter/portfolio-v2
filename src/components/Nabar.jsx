import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100], {
        clamp: false
    });

    const blur = useTransform(scrollProgress, [0.2, 0.4], ['0px', '20px'], {
        clamp: false,
        target:ref,
    });


    const [progress, setProgress] = useState(0);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        scrollProgress.onChange(v => {
            // console.log(v)
            setProgress(`${v}`)

        })
    }, [scrollProgress, progress])


    return(
        <motion.header className={'fixed z-50 top-0 h-[55px] text-white flex block w-screen '} >
            <div className={'relative  w-screen  '}>
                <nav className={'relative justify-between flex pt-7 pb-6 border-b-[1px] border-b-white/30  backdrop-blur-lg px-[10vw]'}>
                    {/* title */}
                    <div className={'inline-block '}>
                        <a><span className={'font-galin text-sm md:text-md lg:text-lg xl:text-xl'}> Justin Peter </span></a>
                        <span className={'hidden text-xs font-galin'} > creative developer. </span>
                    </div>
                    {/*  menu */}
                    <div className={'flex space-x-2 text-white text-xs sm:text-md md:text-lg font-regular  font-galin blend-mix-difference items-center font-galin'}>
                        {/*<a href={'#bangers'}>  works. </a>*/}
                        <Link to={'/#bangers'}>  works. </Link>
                        <Link to={'/#about'}>  about. </Link>
                        <Link to={'/#contact'}>  contact. </Link>
                    </div>
                </nav>
                {/*   progress */}
                <div className={'absolute  backdrop-blur-lg top-0  '}></div>
            </div>
        </motion.header>
    )
}