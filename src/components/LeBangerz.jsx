import React, {useEffect, useRef} from "react";
import {useScroll, useTransform} from "framer-motion";
import {userData} from "../utils/userData";
import { Link } from "react-router-dom";

export const LeBangerz = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(
        scrollYProgress,
        [0.6, 0.85],
        // ["#18181b", "#ffffff"]
        ['0%', '100%']
    )





    return(
        <>
            <section  className={'relative h-full w-full'} >
                <div className={'flex flex-col w-full relative projects sm:mt-[25vh]'} id={'bangers'} >
                    <div className={'text-2xl lg:text-6xl  mix-blend-difference font-black text-white lg:ml-[10vw] mb-10 uppercase'}> [ Current Projects ]  </div>
                    {userData && userData.projects.map((project, index) => {
                        return(
                            <Link to={`projects/${project.path}`} key={index}>
                                <div className={'flex flex-col relative inline-block items-start justify-center uppercase h-fit blinders'}>
                                    <div className={'blinds'}></div>
                                    <div className={'relative flex pt-[1.2rem] px-[0.65rem] justify-start items-start font-default mix-blend-difference text-white '}>
                                        <span className={'lg:ml-[10vw] text-[1.5rem] lg:text-[5rem] font-black '} style={{WebkitTextStrokeWidth:'1px', color:"transparent", WebkitTextStrokeColor:'#ffffff'}}>
                                            {project.name}
                                        </span>
                                        <span className={'top-0 right-0 text-xs  font-light'}> [0{index + 1}] </span>
                                    </div>
                                    <div className={'base'}></div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </>
    )
}