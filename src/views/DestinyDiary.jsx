import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { ParallaxText } from "../components/ParallaxText";
import { userData } from "../utils/userData";
import {CustomCursor} from "../components/CustomCursor";
import {Link} from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

const backgroundGradient = 'linear-gradient(180deg,#ed752f,#da5f7e 47.92%,#2f77f4)'

const animations ={
    initial: {opacity: 0, y:100, background: backgroundGradient},
    animate: { opacity: 1, y:0},
    exit:  { opacity: 0, x:-100}
}

export const DestinyDiary= () => {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <section className={'w-screen h-screen relative bg-blue-800/40  dark:bg-blue-200/20  flex justify-center overflow-hidden'}>
                    <CustomCursor/>
                    <div className={'h-full w-full flex flex-col relative items-center sm:justify-center sm:px-[25vw] sm:py-[5vh] font-bold text-white uppercase project'}>
                        <div
                            // onMouseEnter={(e) => scaleMouse()}
                            className={'relative w-full h-2/5 cover'}>
                            <div className={'z-10 absolute w-full h-fit top-10 sm:top-16 left-0 z-10 text-7xl font-black uppercase'}>
                                {/*<div style={{WebkitTextStrokeWidth:'1px', color:"transparent", WebkitTextStrokeColor:'#ffffff'}}> Blendify</div>*/}
                                <div className={'hidden sm:flex absolute top-0'}>
                                    <ParallaxText baseVelocity={-2}> {userData.projects[4].name} </ParallaxText>

                                </div>
                                <div className={'sm:hidden'}>
                                    <ParallaxText baseVelocity={2}> {userData.projects[4].name} </ParallaxText>
                                    <ParallaxText baseVelocity={-2}> {userData.projects[4].name} </ParallaxText>
                                </div>
                            </div>

                            <div className={'absolute top-0 left-0 w-full h-full bg-green-200 overflow-hidden '}>
                            <img src={userData.projects[4].cover} className={'w-full h-full object-cover z-10 hover:scale-125 transition-transform duration-[1200ms] ease-in-out'}/>
                        </div>

                        </div>
                        <div className={'relative flex flex-col w-full h-1/3 px-2 sm:px-0 justify-between '}>
                            <div className={'w-full h-1/4  py-4 sm:py-10  flex items-center justify-between relative text-sm sm:text-md md:text-lg text-teal-800/30 dark:text-teal-200/50'}>
                                <a className={'underline hover:text-white transition duration-400'}> [under construction] </a>
                                <div className={'flex justify-between gap-4'}>
                                    <span>  {userData.projects[4].form} </span>
                                    <span>  {userData.projects[4].year}  </span>
                                </div>
                            </div>
                            <hr/>
                            <div className={'w-full h-full flex flex-col sm:flex-row relative pt-4 sm:pt-10 sm:pb-10'}>
                                <div className={'flex justify-between relative text-xs sm:flex-col sm:w-1/6 text-white/80   '}>
                                    { userData.projects[4].tags.map(
                                        (tag, index) => {return(<div className={'mr-4'} key={index}> {tag} </div>)})}
                                </div>
                                <p className={'pl-0 sm:pl-4 pt-3 sm:pt-0 mt-6 sm:mt-0 text-lg sm:text-2xl w-full sm:text-right'}>
                                    a great blog for
                                    <span className={'line-through italic text-amber-200/70 '}> conspiracy theories </span>
                                    those who truly want to know the truth behind a set of eyes.
                                </p>
                                <div className={'sm:hidden relative mt-20 w-full px-16  py-4 border-[1px] border-white/10 h-[20vh] flex items-center justify-center bg-zinc-900/10 rounded-md '}>
                                    demo
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'absolute top-10 left-10'}>
                        <Link to={'/#bangers'} className={'hover:text-white hover:underline transition duration-400 hidden sm:flex'}>
                            <WestIcon/> Back
                        </Link>
                    </div>
                </section>
            </AnimatePresence>
        </>
        // <>
        //     <AnimatePresence exitBeforeEnter>
        //         <section className={'w-screen h-screen relative bg-blue-800/40  dark:bg-blue-200/20  flex justify-center overflow-hidden'}>
        //             <div className={'h-full w-full flex flex-col relative items-center sm:justify-center sm:px-[25vw] sm:py-[5vh] font-bold text-white uppercase'}>
        //                 <div className={'relative w-full h-2/5 '}>
        //                     <div className={'absolute w-full h-full top-10 sm:top-28  left-0 z-10 text-7xl font-black uppercase'}>
        //                         {/*<div style={{WebkitTextStrokeWidth:'1px', color:"transparent", WebkitTextStrokeColor:'#ffffff'}}> Blendify</div>*/}
        //                         <ParallaxText baseVelocity={-1}> {userData.projects[4].name} </ParallaxText>
        //                         <div className={'sm:hidden'}>
        //                             <ParallaxText baseVelocity={1}> {userData.projects[4].name} </ParallaxText>
        //                             <ParallaxText baseVelocity={-1}> {userData.projects[4].name} </ParallaxText>
        //                         </div>
        //                     </div>
        //
        //                     <img src={userData.projects[4].cover} className={'absolute w-full h-full object-cover z-0 '}/>
        //                 </div>
        //                 <div className={'relative flex flex-col w-full h-1/3 px-2 sm:px-0  '}>
        //                     <div className={'w-full h-1/4  py-4 sm:py-10  flex items-center justify-between relative text-sm sm:text-md md:text-lg text-amber-200/70'}>
        //                         <a className={'underline hover:text-white transition duration-400'}> [under construction] </a>
        //                         <div className={'flex justify-between gap-4'}>
        //                             <span>  {userData.projects[4].form} </span>
        //                             <span>  {userData.projects[4].year}  </span>
        //                         </div>
        //                     </div>
        //                     <hr/>
        //                     <div className={'w-full h-full flex flex-col sm:flex-row relative pt-4 sm:pt-10 sm:pb-10'}>
        //                         <div className={'flex text-xs sm:flex-col sm:w-1/6 text-white/80 '}>
        //                             { userData.projects[4].tags.map(
        //                                 (tag, index) => {return(<div key={index}> {tag} </div>)})}
        //                         </div>
        //                         <p className={'pl-0 sm:pl-4 pt-3 sm:pt-0 mt-6 sm:mt-0 text-lg sm:text-2xl w-full sm:text-right'}>
        //                             a great blog for
        //                             <span className={'line-through italic text-amber-200/70 '}> conspiracy theories </span>
        //                             those who truly want to know the truth behind a set of eyes.
        //                         </p>
        //                         <div className={'sm:hidden relative mt-20 w-full px-16  py-4 border-[1px] border-white/10 h-[20vh] flex items-center justify-center bg-zinc-900/10 rounded-md '}>
        //                             demo
        //                         </div>
        //                     </div>
        //                 </div>
        //
        //             </div>
        //         </section>
        //     </AnimatePresence>
        // </>
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