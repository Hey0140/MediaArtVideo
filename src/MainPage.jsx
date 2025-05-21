import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function MainPage() {
    const [sessionId, setSessionId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (sessionId.trim()) {
            navigate(`/gallery/${sessionId}`);
        }
    };

    return (

        <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-3xl mb-6">세션 ID 입력</h1>
                <input
                    type="text"
                    value={sessionId}
                    onChange={(e) => setSessionId(e.target.value)}
                    placeholder="예: 73845e"
                    className="p-2 text-black rounded w-64 text-center"
                />
                <br />
                <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition"
                >
                    갤러리 보기
                </button>
            </div>
        </div>
    );
}
