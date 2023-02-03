import {userData} from "../utils/userData";
import React from "react";

export const ProjectCard = (props) =>{
    return(
        <div className={'mx-auto my-36 sm:my-80 flex flex-col sm:flex-row sm:max-w-3xl sm:max-h-[96] max-h-[30rem] rounded-3xl lg:rounded-[4.3rem] p-8 lg:p-16 bg-white/5 shadow-lg border-[1px] backdrop-blur-3xl  relative border-gray-500/20 '}>
            <div className={'hidden sm:flex mr-14 -rotate-90 write-tb-rl -rotate-180 justify-center '}>
                <h4 className={'uppercase text-xs text-stone-200/60 font-roboto font-medium inline-block'}> {props.stack}</h4>
            </div>
            <div className={'max-w-[18em] rounded-[1.5rem] lg:rounded-[3.3rem] relative overflow-hidden shadow-xl '}>
                <img src={props.cover} alt={'project'} className={'object-cover object-top max-w-full h-auto hover:scale-150 transition-all ease-in-out delay-100 duration-700'}/>
            </div>
            <div className={'flex flex-col mt-6 sm:ml-14 sm:items-start sm:justify-center'}>
                <h2 className={'text-2xl lg:text-4xl font-bold mb-12 text-white'}> {props.title} </h2>
                <span className={'group'}>
                    <a href={props.link}
                       className={'uppercase text-xs font-medium text-yellow-400'}>
                    see the live demo
                    </a>
                    <hr className={'mt-1 w-1/2 group-hover:w-full transition-all duration-700 ease-in-out'}/>
                </span>
            </div>
        </div>
    )
}