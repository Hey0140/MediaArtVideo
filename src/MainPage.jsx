import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const [sessionId, setSessionId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (sessionId.trim()) {
            navigate(`/gallery/${sessionId}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            <h1 className="text-3xl mb-6">세션 ID 입력</h1>
            <input
                type="text"
                value={sessionId}
                onChange={(e) => setSessionId(e.target.value)}
                placeholder="예: 73845e"
                className="p-2 text-black rounded"
            />
            <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-white text-black rounded">
                갤러리 보기
            </button>
        </div>
    );
}
