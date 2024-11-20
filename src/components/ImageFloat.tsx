import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
                    <Image className="rounded" width={80} height={80} src={"/images/drone.webp"} alt="1" />
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
                    <Image className="rounded" width={80} height={80} src={"/images/drone.webp"} alt="1" />
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
                    <Image className="rounded" width={80} height={80} src={"/images/drone.webp"} alt="1" />
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
                    <Image className="rounded" width={80} height={80} src={"/images/drone.webp"} alt="1" />
                </motion.span>
            ))}

        </>
    )
};

export default ImageFloat;
