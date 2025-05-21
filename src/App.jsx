import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import MediaArtGallery from "./MediaArtGallery";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/gallery/:sessionId" element={<MediaArtGallery />} />
            </Routes>
        </Router>
    );
}

export default App;
