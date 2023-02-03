import React, { useState } from 'react'
import { Link } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"


import { NavSocialLinks } from './navbar/NavSocialLinks';
import '../styles/Navbar.css';
const scroll = new LocomotiveScroll();

export const Navbar = () =>{

    // const [initialPosX, setInitialPosX] = useState({
    //     left: "0vw",
    //     transition : { duration: 2 },
    // });

    //useState to update position of toggled menu
    const [menuPosition, setMenuPosition] = useState({
        left: "-100vw",
        transition : { duration: 2 },
    });

    const [menuToggleText, setMenuToggleText] = useState("Menu");


    // function to toggle menu
    const toggleMenu = () => {
        if(menuPosition.left === "-100vw"){
            setMenuPosition({
                left: "0vw",
                transition : {ease:"easeOut", duration: 1 },
            });
            setMenuToggleText("Close");
        }
        else{
            setMenuPosition({
                left: "-100vw",
                transition : {ease:"easeOut", duration: 1 },
            });
            setMenuToggleText("Menu");
        }
    }

    return(
        <div className={'fixed w-4/5 flex justify-between'}>
                <div className={'flex-col'}>
                    <h1 className={'text-4xl'}> Justin Peter </h1>
                    <h4 className={'text-2xl'}> Full Stack Developer</h4>

                </div>
        </div>)


    // return(
    //     <div className={'relative'}>
    //
    //         <motion.div
    //             animate={{x: menuPosition.left}}
    //             transition={{duration: 1,  delay:0}}
    //             className={'menu-wrapper'}>
    //             <NavSocialLinks />
    //             {/*<div className="navigation-bottom" style="opacity: 1;">*/}
    //             {/*    <h4 className="navigation-h4">FEATURED PROJECTS</h4>*/}
    //             {/*    /!*<div className="navigation-bottom__projects">*!/*/}
    //             {/*    /!*    /!*<a target="_blank" rel="noopener" href="https://alexxandria.vercel.app/" className="navigation-bottom__projects-card">*!/*!/*/}
    //             {/*    /!*    /!*    <img src="webp/alexxandria-nav.webp" alt="alexxandria"/>*!/*!/*/}
    //             {/*    /!*    /!*    <h2> Alexxandria <br/> Forque </h2>*!/*!/*/}
    //             {/*    /!*    /!*</a>*!/*!/*/}
    //             {/*    /!*    /!*<a href="https://safarika-adeola.netlify.app/" target="_blank" rel="noopener" className="navigation-bottom__projects-card">*!/*!/*/}
    //             {/*    /!*    /!*    <img src="webp/safarika-nav.webp" alt="safarika">*!/*!/*/}
    //             {/*    /!*    /!*        <h2>Safarika</h2>*!/*!/*/}
    //             {/*    /!*    /!*</a>*!/*!/*/}
    //             {/*    /!*    /!*<a href="https://adeolaadeoti.netlify.app/" target="_blank" rel="noopener" className="navigation-bottom__projects-card">*!/*!/*/}
    //             {/*    /!*    /!*    <img src="webp/adeola-1.webp" alt="adeola"><h2>AdeolaAdeoti<br>Version 1</h2>*!/*!/*/}
    //             {/*    /!*    /!*</a>*!/*!/*/}
    //             {/*    /!*</div>*!/*/}
    //             {/*</div>*/}
    //         </motion.div>
    //         <div className={'menu'}>
    //             <a className={'personal-logo  '}>
    //                 <img src={require('../assets/images/logo.png')} alt={'justin-logo-icon'}/>
    //                 <span className={'personal-logo__text-wrap font-bebas'}> JUSTIN PETER </span>
    //             </a>
    //             <div className={'toggle-button-wrapper'}>
    //                 <span className={'font-bebas'}> {menuToggleText} </span>
    //                 <button onClick={() => toggleMenu()} className="toggle-button">
    //                     <svg width="57" height="20" viewBox="0 0 26 20">
    //                         <path fill="transparent" stroke-width="1.5" stroke="#c4c4c4"
    //                               d="M 2 2.5 L 57 2.5"></path>
    //                         <path fill="transparent" stroke-width="1.5" stroke="#c4c4c4" d="M 2 9.423 L 57 9.423"
    //                               opacity="1"></path>
    //                         <path fill="transparent" stroke-width="1.5" stroke="#c4c4c4"
    //                               d="M 2 16.346 L 27 16.346"></path>
    //                     </svg>
    //                 </button>
    //             </div>
    //         </div>
    //
    //
    //
    //     </div>
    // )

}