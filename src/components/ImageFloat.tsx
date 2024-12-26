import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from 'next/dynamic';

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
        <div className="p-[10px] absolute z-0 top-16 left-0 h-[calc(100vh-64px)] w-full overflow-hidden flex items-start justify-between">

            {/* <div className="flex w-1/3">
                {Array(icons.length / 2).fill("").map((_, i) => (
                    <motion.span
                        initial={{ y: (window.innerHeight - 100) * Math.random(), opacity: .7, scale: 0, rotate: 0, }}
                        animate={{ opacity: 1, rotate: 360, scale: 1.1 }}
                        transition={{ duration: 2, delay: i * Math.random() + 3, repeat: Infinity, repeatDelay: 10, type: "spring", stiffness: 400, damping: 10 }}
                        key={i}
                        className={`rounded w-calc(((100vw-19*10px)-15px-20px)/20) h-calc(((100vw-19*10px)-15px-20px)/20)`}
                    >
                        <Image className="rounded" width={80} height={80} src={icons[i].src} alt="1" />
                    </motion.span>
                ))}
            </div> */}

            {/* <div className="flex w-1/3">
                {Array(icons.length / 2).fill("").map((_, i) => (
                    <motion.span
                        initial={{ y: (window.innerHeight - 100) * Math.random(), opacity: .7, scale: 0, rotate: 0, }}
                        animate={{ opacity: 1, rotate: 360, scale: 1.1 }}
                        transition={{ duration: 2, delay: i * Math.random() + 3, repeat: Infinity, repeatDelay: 10, type: "spring", stiffness: 400, damping: 10 }}
                        key={i}
                        className={`rounded w-calc(((100vw-19*10px)-15px-20px)/20) h-calc(((100vw-19*10px)-15px-20px)/20)`}
                    >
                        <Image className="rounded" width={80} height={80} src={icons[icons.length - i - 1].src} alt="1" />
                    </motion.span>
                ))}
            </div> */}

            {Array(icons.length).fill("").map((_, i) => (
                <motion.span
                    initial={{ y: window.innerHeight, opacity: .7, rotate: 0 }}
                    animate={{ y: -200, opacity: 1, rotate: 360, scale: [0, 1, 0] }}
                    transition={{ duration: 50 * Math.random() + 10, delay: 20 * Math.random(), repeat: Infinity, repeatDelay: 1 }}
                    key={i}
                    className={`rounded w-calc(((100vw-19*10px)-15px-20px)/20) h-calc(((100vw-19*10px)-15px-20px)/20)`}
                >
                    <Image className="rounded" width={80} height={80} src={icons[i].src} alt="1" />
                </motion.span>
            ))}


            {/* {Array(10).fill("").map((_, i) => (
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
            ))} */}
        </div>
    )
};

export default dynamic(() => Promise.resolve(ImageFloat), { ssr: false });