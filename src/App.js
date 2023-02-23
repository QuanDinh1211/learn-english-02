import { useContext } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./assets/style/reset.css";
import "./assets/style/global.scss";
import Content from "./screen";
import Modal from "./components/Modal";

import { RootContext } from "./store/context/rootContext";

function App() {
  const { showModal, showFeedback } = useContext(RootContext);
  return (
    <div className="App">
      <div className="app-wrapper relative">
        <Content />
        {showModal && <Modal />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default App;
