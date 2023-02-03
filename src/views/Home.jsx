import React, {useEffect, useRef} from 'react'
import { userData } from "../utils/userData";
import {useScroll, useTransform, useViewportScroll, motion, AnimatePresence} from "framer-motion";

import '../styles/Home.css'

import { Navbar} from "../components/Nabar";
import { Header } from "../components/Header";
import { Introduction } from "../components/Introduction";
import { ParallaxText } from '../components/ParallaxText';
import {LeBangerz} from "../components/LeBangerz";
import {CustomCursor} from "../components/CustomCursor";

const MakingBangers = () => {
    return(
        <>
            <div className={'relative h-[35vh]  flex flex-wrap top-16 '}>
                <ParallaxText baseVelocity={-2}> I also make bangers </ParallaxText>
            </div>
        </>
    )
}

const Footer = () =>{
    return(
        <>
            <footer id={'contact'} className={'pt-48 px-0.5 w-full relative font-default h-[120vh] pt-[45vh] mx-[5vw] sm:mx-[10vw] pb-10'}>
                <div className={'container '}>
                    <h3 className={'text-4xl font-medium text-orange-300'}> wanna collab?</h3>
                    <a className={'text-6xl lg:text-9xl font-black text-transparent'} style={{WebkitTextStrokeWidth:'2px', WebkitTextStrokeColor:'#ffffff'}}>
                        TALK TO ME
                    </a>
                </div>
                <div className={'flex flex-col justify-between justify-start mt-[3.8rem] w-full'}>
                    <div className={'h-full w-full text-white font-default'}>
                        <p className={'text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/40  '}>HIT MY LINE</p>
                        <a
                            href={`mailto:${userData.email}?subject=Hey Justin!`}
                            className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium underline hover:text-orange-300 transition-all duration-600'}>hello@justinpeter.dev</a>
                    </div>


                    <div className={'h-full w-full mt-[3.8rem] text-white font-default'}>
                        <p className={'text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/40'}>SEE WHAT IM UP TO</p>
                        <div className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium  flex flex-col'}>
                            <a href={userData.socials.github} className={'hover:text-orange-300 hover:italic hover:line-through transition-all duration-600'}> 💻 Github </a>
                            <a href={userData.socials.linkedin} className={'hover:text-orange-300 hover:italic hover:line-through transition-all duration-600'}> 💼 LinkedIn </a>
                            <a href={userData.socials.instagram} className={'hover:text-orange-300 hover:italic hover:line-through transition-all duration-600'}> 📸 Instagram </a>
                            <a href={userData.socials.twitter} className={'hover:text-orange-300 hover:italic hover:line-through transition-all duration-600'}> 🐦 Twitter </a>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


const Transition = ({startColor, endColor}) => {

    const ref = useRef(null);
    const { scrollYProgress } = useViewportScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const backgroundColor = useTransform(scrollYProgress, [0.7, 0.8], [startColor, endColor])

    return (
        <section>
            <motion.div className={'relative h-[50vh] w-screen'} style={{backgroundColor}}>

            </motion.div>

        </section>
    )
}

export const Home = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const backgroundColor = useTransform(scrollYProgress, [0.58, 0.62, 0.85, 1], ['#18181b', '#ffffff', '#ffffff', '#18181b'])

    const variants = {
        hidden: { opacity: 0,  },
        enter: { opacity: 1,   },
        exit: { opacity: 0,  x:-10000 },
    }

    useEffect(() =>{
        // if route has changed, scroll to section
        const hash = window.location.hash;
        if(hash){
            const section = document.querySelector(hash);
            if(section){
                section.scrollIntoView({behavior: 'smooth'})
            }
        }
    })

    return (
        <AnimatePresence onExitComplete>
            <motion.div
                variants={variants}
                initial={'hidden'}
                animate={'enter'}
                exit={'exit'}
                transition={{type: 'linear', duration: 2}}
                className={'relative flex flex-wrap scroll-smooth scrollbar-hide no-scrollbar bg-zinc-900 scroll-smooth overflow-hidden'}
                style={{backgroundColor}}
            >
                <Navbar/>
                <Header/>
                <Introduction/>
                <MakingBangers/>
                {/*<Transition startColor={'#18181b'} endColor={'#ffffff'}/>*/}
                <LeBangerz/>
                <Footer/>
            </motion.div>
        </AnimatePresence>

    );
}