import React, {useRef} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { ParallaxText } from "../components/ParallaxText";
import { userData } from "../utils/userData";
import {CustomCursor} from "../components/CustomCursor";

const backgroundGradient = 'linear-gradient(180deg,#ed752f,#da5f7e 47.92%,#2f77f4)'

const animations ={
    initial: {opacity: 0, y:100, background: backgroundGradient},
    animate: { opacity: 1, y:0},
    exit:  { opacity: 0, x:-100}
}


export const View = () => {
    return(
        <section>
            <CustomCursor/>
            <div>... section stuff</div>
        </section>
    )
}
export const Blendify = () => {

    // function scaleMouse() {
    //     // select cursor
    //     const cursor = document.querySelector('.cursor')
    //     // add class 'expand'
    //     cursor.classList.add('expand')
    // }


    const ref = useRef(null)
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <section className={'w-screen h-screen relative bg-yellow-700/50 dark:bg-yellow-700/50  flex justify-center overflow-hidden'}>
                    {/*<CustomCursor/>*/}
                    <div className={'h-full w-full flex flex-col relative items-center sm:justify-center sm:px-[25vw] sm:py-[5vh] font-bold text-white uppercase project'}>
                        <div
                            // onMouseEnter={(e) => scaleMouse()}
                            className={'relative w-full h-2/5 cover'}>
                            <div className={'z-10 absolute w-full h-fit top-10 sm:top-16 left-0 z-10 text-7xl font-black uppercase'}>
                                {/*<div style={{WebkitTextStrokeWidth:'1px', color:"transparent", WebkitTextStrokeColor:'#ffffff'}}> Blendify</div>*/}
                                <div className={'hidden sm:flex absolute top-0'}>
                                    <ParallaxText baseVelocity={-2}> {userData.projects[0].name} </ParallaxText>

                                </div>
                                <div className={'sm:hidden'}>
                                    <ParallaxText baseVelocity={2}> {userData.projects[0].name} </ParallaxText>
                                    <ParallaxText baseVelocity={-2}> {userData.projects[0].name} </ParallaxText>
                                </div>
                            </div>

                            `<div className={'absolute top-0 left-0 w-full h-full overflow-hidden '}>
                                <img src={userData.projects[0].cover} className={'w-full h-full object-cover z-10 hover:scale-125 transition-transform duration-[1200ms] ease-in-out'}/>
                            </div>`

                        </div>
                        <div className={'relative flex flex-col w-full h-1/3 px-2 sm:px-0 justify-between '}>
                            <div className={'w-full h-1/4  py-4 sm:py-10  flex items-center justify-between relative text-sm sm:text-md md:text-lg text-teal-800/30 dark:text-teal-200/50'}>
                                <a className={'underline hover:text-white transition duration-400'}> [under construction] </a>
                                <div className={'flex justify-between gap-4'}>
                                    <span>  {userData.projects[0].form} </span>
                                    <span>  {userData.projects[0].year}  </span>
                                </div>
                            </div>
                            <hr/>
                            <div className={'w-full h-full flex flex-col sm:flex-row relative pt-4 sm:pt-10 sm:pb-10'}>
                                <div className={'flex justify-between relative text-xs sm:flex-col sm:w-1/6 text-white/80'}>
                                    { userData.projects[0].tags.map(
                                        (tag, index) => {return(<div className={''} key={index}> {tag} </div>)})}
                                </div>
                                <p className={'pl-0 sm:pl-4 pt-3 sm:pt-0 mt-6 sm:mt-0 text-lg sm:text-2xl w-full sm:text-right'}>
                                    My obsession with
                                    <span className={'line-through italic text-teal-200/40 '}> apple music</span>
                                    Spotify led to the creation of this app. Think Spotify wrapped, but redesigned for a
                                    <span className={'line-through italic text-teal-200/40 '}> desktop </span>
                                    richer experience.
                                </p>
                                <div className={'sm:hidden relative mt-20 w-full px-16  py-4 border-[1px] border-white/10 h-[20vh] flex items-center justify-center bg-zinc-900/10 rounded-md '}>
                                    demo
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </AnimatePresence>
        </>
    //
    // <motion.div
    //     variants={animations}
    //     initial={'initial'}
    //     animate={'animate'}
    //     exit={'exit'}
    //     transition={{duration: 3}}
    //     style={{background: backgroundGradient}}
    //
    //     className={'container bg-red-200'}>
    //
    //     <img src={image} className={'object-scale-down'}/>
    // </motion.div>
    );
}