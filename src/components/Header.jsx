import {motion, useScroll, useTransform} from "framer-motion";
import {ParallaxText} from "./ParallaxText";
import {FloatingHead} from "./FloatingHead";
import {useRef} from "react";

export const Header = () =>{
    // square animation ref
    const square = useRef(null);
    const { scrollYProgress } = useScroll();

    // when user scrolls, scale the square
    const squareScale = useTransform(scrollYProgress, [0, 1], [1, 25], {
        target: square,
        clamp: false,
        offset: ["end start", "start end"]
    });

    const vectorArtOpacity = useTransform(scrollYProgress, [0.1, 0.2], ['100%', '0%'], {
        target: square,
        clamp: false,
        offset: ["end start", "start end"]
    });

    return(
        <>
            <div className={'relative h-[120vh] xl:h-[130vh] w-screen overflow-hidden'}>
                <motion.div className={'w-full h-screen flex flex-col justify-center relative '}>
                    <motion.div
                        className={'self-center fixed inset-x-0 mx-auto origin-top flex items-center justify-center absolute rounded-lg h-[20rem] w-[20rem] md:h-[45vh] md:w-[45vh] bg-zinc-900'}
                        style={{scale:squareScale}}
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                    </motion.div>
                    <div className={'absolute self-center flex flex-col items-center w-screen '}>
                        <ParallaxText baseVelocity={3}> <h1 className={''}> creator  </h1> </ParallaxText>
                        <ParallaxText baseVelocity={-3}> <h1 className={''}> designer  </h1> </ParallaxText>
                        <ParallaxText baseVelocity={3}> <h1 className={''}> coder  </h1> </ParallaxText>
                    </div>

                    <div className={'fixed flex z-[0] items-center  justify-center left-0 bottom-0 h-screen w-screen '}>
                        <FloatingHead />
                        {/*<motion.img className={'absolute top-0 left-0 h-full w-screen object-scale-down shadow-2xl'} src={userData.avatar} alt={'hero'}*/}
                        {/*    style={{opacity:vectorArtOpacity}}*/}
                        {/*/>*/}
                    </div>
                </motion.div>
            </div>
        </>

    )
}