import {motion} from "framer-motion";
import React from "react";

export const NavSocialLinks = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ delay: 1, duration: 1 }}
            variants={{
                visible: { opacity: 1,  },
                hidden: { opacity: 0, }
            }}
            className={'navigation-top'}>
            <div className={'navigation-top__left'}>
                <h4 className={'font-bebas tracking-wide leading-[2]'}> Don't be a stranger </h4>
                <div className="navigation-top__left--links font-bold ">
                    <a href="https://github.com/justinkpeter" rel="noopener" target="_blank">👾 GH</a>
                    <a href="https://twitter.com/_justinpeter" rel="noopener" target="_blank">🐦 TW</a>
                    <a href="https://www.linkedin.com/in/justinkmpeter" rel="noopener" target="_blank">💼 LD</a>
                    <a href="https://www.instagram.com/justincrediblemoments" rel="noopener" target="_blank">📸 IN</a>
                </div>
            </div>
            <div className="navigation-top__right">
                <h4 className="navigation-h4">HAVE AN IDEA?</h4>
                <a href="mailto:justinkmpeter@gmail.com" target="_blank" rel="nofollow noopener noreferrer">
                    Tell me about it
                </a>
            </div>
        </motion.div>
    );
}