import { useState } from "react"
import { motion } from "framer-motion"

let segments = [
    { id: "hero", label: "Hero"},
    { id: "projects", label: "Projects"},
    { id: "education", label: "Education"},
    { id: "about", label: "About"},
]    

function Navbar(){
    let [activeSegment, setActiveSegment] = useState(segments[0].id)
    
    return(
    <>
    <div className="flex space-x-1 pt-5 float-right">
        {segments.map((segment, i) => (
            <motion.button
            initial={{ x: "100vw"}}
            animate={{ x: "0vw" }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
            key={segment.id}
            onClick={() => setActiveSegment(segment.id)}
            className={`${activeSegment === segment.id ? "text-white" : "hover:opacity-50"} relative rounded-full px-4 py-2 text-m font-nunito font-medium text-secondary outline-2 outline-secondary transition focus-visible:outline`}
            >
            {activeSegment === segment.id && (  
                <motion.div
                layoutId="active-pill"
                style={{ borderRadius: 9999}}
                className="absolute inset-0 bg-secondary" />
            )
            }
                <span className="relative z-10">{segment.label}</span>
            </motion.button>
        ))}
    </div>
    </>
    )
}
export default Navbar