// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Modal from "components/Modal";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ContentCreate from "pages/ContentCreate";
import ContentUpdate from "pages/ContentUpdate";
import ContentDelete from "pages/ContentDelete";
import ContentSearch from "pages/ContentSearch";
import { ModalProvider } from "state/ModalContext";
import "styles/style.css";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/create-content" element={<ContentCreate />} />
            <Route path="/update-content" element={<ContentUpdate />} />
            <Route path="/delete-content" element={<ContentDelete />} />
            <Route path="/search-content" element={<ContentSearch />} />
          </Routes>
          {/* To handle the modal/popups of the website */}
          <Modal />
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}
