import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MediaArtGallery() {
    const { sessionId } = useParams();
    const [text, setText] = useState("");
    const fullText = "나 != 나 TEAM 벌꿀오소리";
    const baseURL = `${import.meta.env.VITE_GCS_BASE_URL}/${sessionId}/`;

    const videoCount = 8;
    const imageData = Array.from({ length: videoCount }, (_, idx) => {
        const filename = `result_output_${idx}.mp4`;
        const thumbnail = `/result_output_${idx}.png`;
        return {
            video: `${baseURL}${filename}`,
            thumbnail: `${thumbnail}`,
        };
    });

    useEffect(() => {
        let index = 0;
        console.log("text:", text);
        const timer = setInterval(() => {
            if (index >= fullText.length) {
                clearInterval(timer);
                return;
            }

            setText((prev) => prev + fullText[index]);
            index++;
        }, 100);
        return () => clearInterval(timer);
    }, []);



    return (
        <div className="bg-black min-h-screen text-white font-mono px-6 py-12 flex justify-center items-start">
            <div className="w-full max-w-7xl">
                <motion.h1
                    className="text-2xl md:text-4xl mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {fullText}
                </motion.h1>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {imageData.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-[#0a0a0a] border border-gray-500 rounded-sm shadow-md overflow-hidden group"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-[#2a2a2a] text-xs px-2 py-1 flex justify-between items-center border-b border-gray-500">
                                <span>VIDEO_{idx + 1}.MP4</span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-white" />
                                    <div className="w-2 h-2 bg-white" />
                                    <div className="w-2 h-2 bg-white" />
                                </div>
                            </div>

                            <div className="relative w-full h-auto cursor-pointer">
                                {/* 썸네일 */}
                                <img src={img.thumbnail} className="w-full h-auto group-hover:opacity-0 transition-opacity duration-300" />

                                {/* hover 시 영상 자동 재생 */}
                                <video
                                    src={img.video}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
