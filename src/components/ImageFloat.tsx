import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";



const icons = [
    {
        name: "bootstrap",
        src: "/images/bootstrap.svg"
    },
    {
        name: "css3",
        src: "/images/css3.svg"
    },
    {
        name: "cypress",
        src: "/images/cypress.svg"
    },
    {
        name: "git",
        src: "/images/git.svg"
    },
    {
        name: "github",
        src: "/images/github.svg"
    },
    {
        name: "gitlab",
        src: "/images/gitlab.svg"
    },
    {
        name: "html-5",
        src: "/images/html-5.svg"
    },
    {
        name: "jest",
        src: "/images/jest.svg"
    },
    {
        name: "js",
        src: "/images/js.svg"
    },
    {
        name: "next",
        src: "/images/next.svg"
    },
    {
        name: "node-js",
        src: "/images/node-js.svg"
    },
    {
        name: "react",
        src: "/images/react.svg"
    },
    {
        name: "redux",
        src: "/images/redux.svg"
    },
    {
        name: "tailwindcss",
        src: "/images/tailwindcss.svg"
    }
]
const ImageFloat = () => {

    return (

        <>
            {Array(10).fill("").map((_, i) => (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0, 1] }}
                    transition={{ duration: 5, delay: (50 * Math.random() + 5), repeat: Infinity, repeatDelay: 5 }}
                    key={i}
                    className={`rounded w-20 h-20 block absolute`}
                    style={{ x: i * (window.innerWidth / 20), y: i * ((window.innerHeight - 64) / 10) }}
                >
                    <Image className="rounded" width={80} height={80} src={icons[0].src} alt="1" />
                </motion.span>
            ))}

            {Array(10).fill("").map((_, i) => (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0, 1] }}
                    transition={{ duration: 5, delay: (50 * Math.random() + 5), repeat: Infinity, repeatDelay: 5 }}
                    key={i}
                    className={`rounded w-20 h-20 block  absolute`}
                    style={{ x: window.innerWidth - (window.innerWidth / 20) * i - 80 - 15, y: i * ((window.innerHeight - 64) / 10) }}
                >
                    <Image className="rounded" width={80} height={80} src={icons[0].src} alt="1" />
                </motion.span>
            ))}

            {Array(10).fill("").map((_, i) => (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0, 1] }}
                    transition={{ duration: 5, delay: (50 * Math.random() + 5), repeat: Infinity, repeatDelay: 5 }}
                    key={i}
                    className={`rounded w-20 h-20 block absolute`}
                    style={{ x: (10 - i - 1) * (window.innerWidth / 20), y: i * ((window.innerHeight - 64) / 10) }}
                >
                    <Image className="rounded" width={80} height={80} src={icons[0].src} alt="1" />
                </motion.span>
            ))}

            {Array(10).fill("").map((_, i) => (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0, 1] }}
                    transition={{ duration: 5, delay: (50 * Math.random() + 5), repeat: Infinity, repeatDelay: 5 }}
                    key={i}
                    className={`rounded w-20 h-20 block  absolute`}
                    style={{ x: window.innerWidth - (window.innerWidth / 20) * (10 - i - 1) - 80 - 15, y: i * ((window.innerHeight - 64) / 10) }}
                >
                    <Image className="rounded" width={80} height={80} src={icons[0].src} alt="1" />
                </motion.span>
            ))}

        </>
    )
};

export default ImageFloat;
