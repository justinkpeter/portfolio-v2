import React from "react";

export const Projects = () => {
    return (
        <div className={'w-screen h-screen relative '}>
            <div className={'dark:bg-stone-700 h-full w-full flex items-center bg-stone-300'}>
                <div className={'flex-col font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl px-[3rem]  md:px-[9.125rem] 2xl:pl-[15rem] justify-items-start '}>
                    <h1 className={'text-stone-500'}> projects. </h1>
                    {/*<h1 className={'font-bold xs:text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-stone-800'}> Creator. </h1>*/}
                    {/*<h1 className={'font-bold xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-teal-600'}> Designer. </h1>*/}
                    {/*<h1 className={'font-bold xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-yellow-500'}> Developer. </h1>*/}
                </div>
            </div>
        </div>
    );
}