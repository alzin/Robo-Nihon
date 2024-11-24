import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const AnimatedBackground = () => {
    const numberOfSquar_y = Math.ceil(((window.innerHeight - 19 * 10) - 64) / 20)
    const [rotate, setRotate] = useState(45);

    useEffect(() => {
        const changeRotate = setInterval(() => {
            setRotate(Math.random() * 360);
        }, 10000);
        return () => clearInterval(changeRotate);
    }, []);

    return (
        <div className="p-[10px] absolute z-0 top-16 left-0 h-[calc(100vh-64px)] max-w-full overflow-hidden flex flex-wrap gap-[10px]">
            {Array(numberOfSquar_y * 20).fill("").map((_, i) => (
                <motion.span
                    initial={{ scale: 1, rotate: rotate }}
                    animate={{ scale: [1, .5, 1], rotate: rotate }}
                    transition={{ duration: 1, delay: (50 * Math.random() + 2), repeat: Infinity, repeatDelay: 50 }}
                    key={i}
                    className="secret rounded xl:w-[calc(((100vw-19*10px)-15px-20px)/20)] xl:h-[calc(((100vw-19*10px)-15px-20px)/20)] sm:w-[calc(((100vw-14*10px)-15px-20px)/15)] sm:h-[calc(((100vw-14*10px)-15px-20px)/15)] w-[calc(((100vw-9*10px)-20px)/10)] h-[calc(((100vw-9*10px)-20px)/10)]  block border-[1px] lg:border-[2px] border-[#3b82f6]" />
            ))}
        </div>
    )
};

export default dynamic(() => Promise.resolve(AnimatedBackground), { ssr: false });