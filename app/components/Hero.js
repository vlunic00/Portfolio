'use client';
import { motion } from "framer-motion"

function Hero(){
    return(
        <>
        <div className="pt-60">
            <motion.p className="text-8xl font-karla font-bold text-secondary"
                    initial={{ rotateX: 90, y: 50, opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.7}}>Vedran</motion.p>
            <motion.div className="h-[5px] bg-secondary w-[60%] my-2 ml-[-5%]"
                        initial={{ x: "-100vw" }}
                        animate={{ x: "0vw" }}
                        transition={{ type: "tween", duration: 0.7}} />
                        <motion.p className="text-8xl font-karla font-bold text-secondary"
                    initial={{ rotateX: 90, y: -50, opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.7}}>Lunić</motion.p>
        </div>
        </>
    )
}

export default Hero