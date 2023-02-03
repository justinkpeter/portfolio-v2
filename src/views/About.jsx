import {userData} from "../utils/userData";
import React from "react";
import '../styles/About.css';
export const About = () => {
    return (
            <div className={'dark:bg-stone-700 h-screen w-full flex items-center'}>
                <div className={'grid grid-rows-10 grid-cols-23 bg-stone-400 dark:bg-stone-700 relative '}>
                    <div className={'col-start-3 row-start-3 col-span-4 row-span-6 rounded-lg relative '}>
                        <div className={'absolute text-white transform -rotate-90 -left-44 bottom-28 card-header'}>
                            <h1 className>about me.</h1>
                        </div>
                        <div className={'overflow-hidden about-me-card'}>
                            <img src={userData.about.selfie} className={'rounded-2xl'}/>
                        </div>
                        <span className={'font-roboto text-xs'}> coder by day, photographer by night </span>
                    </div>

                    <div className={'col-start-9 row-start-4 col-span-4 row-span-6 rounded-lg relative '}>
                        <div className={' text-white transform  -left-44 bottom-28 card-header'}>
                            <h1 className>my skills.</h1>
                        </div>
                    </div>

                </div>

                {/*<div className={'flex-col font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl px-[3rem]  md:px-[9.125rem] 2xl:pl-[15rem] justify-items-start '}>*/}
                {/*    /!*<h1 className={'text-stone-500'}> about. </h1>*!/*/}
                {/*    /!*<div className={'absolute rounded-lg bg-blue-200 h-[50vh] w-[50vh] overflow-hidden'}>*!/*/}
                {/*    /!*    <img src={userData.about.selfie} alt={'avatar'} className={'h-full w-full object-cover'}/>`*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}
            </div>
    );
}