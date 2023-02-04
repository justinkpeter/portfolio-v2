import React, {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";
export const Introduction = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const background = useTransform(scrollYProgress, [0.4, 0.7], ['#9a3412', '#ffffff'], { target: ref, clamp: false })
    return(
        <>
            <section id={'about'} className={'h-full w-full text-white backdrop-blur'}>
                <div className={'h-full relative  mx-[5vw] sm:mx-[10vw] block'}>
                    <div className={'sticky h-full  top-[76px]  z-50 '}>
                        <motion.h2
                            initial={{ opacity: 0, y:50 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className={'relative inline-block  '}>
                            <span className={'uppercase font-default text-[7vw] font-black relative  tracking-tightest text-orange-300'} > hey. i am justin.</span>
                            {/*<div className={'absolute right-0 -bottom-[1rem] font-galin'}> Justin Peter </div>*/}
                        </motion.h2>

                        <div className={'max-w-8xl mt-10'}>
                            <motion.p className={'font-default text-white text-[5vw] '} initial={{ opacity: 0, y:50 }}
                                      whileInView={{ opacity: 1, y:0 }}
                                      viewport={{ once: false }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                I'm a creative Front-End Developer that integrates technology and visual arts. Although
                                my background mainly comprises Full-Stack work, my heart and soul lies on the
                                <span className={'line-through italic text-orange-300'}> back </span>
                                front-end.
                            </motion.p>
                            <motion.div className={'my-[10vw]'}
                                        initial={{ opacity: 0, y:50 }}
                                        whileInView={{ opacity: 1, y:0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <p className={'font-default text-white text-[5vw] mt-10 '}>
                                    What gets me excited is
                                    <span className={'line-through italic text-orange-300'}> a warm bath  </span>
                                    creating experiences because I believe that's what connects people, and I can do that one line of
                                    <span className={'line-through italic text-orange-300'}> coke </span>
                                    code at a time.
                                    {/*it is through these experiences where potential is truly actualized.*/}
                                    {/*<span className={'line-through italic text-orange-300'}> dreams  </span>*/}
                                    {/*inspirations to reality.*/}
                                </p>
                            </motion.div>
                            <motion.div className={'my-[10vw]'}
                                        initial={{ opacity: 0, y:50 }}
                                        whileInView={{ opacity: 1, y:0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <p className={'font-default text-white text-[5vw] mt-10 '}>
                                    When I'm not coding, you can find me taking photos for
                                    <span className={'line-through italic text-orange-300'}> my girlfriend's Instagram  </span>
                                    my photography portfolio, or watching anime.
                                </p>
                            </motion.div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}