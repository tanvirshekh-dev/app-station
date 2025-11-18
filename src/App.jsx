import { toast } from "react-toastify";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";

function App() {
  const notify = () => toast("Successfully added apps");

  return (
    <div>
      <>
        <div>
          <button onClick={notify}>Notify</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </>
    </div>
  );
}

export default App;
