import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import store from './store';
import { Provider } from 'react-redux';
import StudentForm from './components/Student/StudentForm';
import StudentView from './components/studentview/StudentView';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import UpdateStudentForm from "./components/Updateform/Updateform";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <Provider store={store}>
      <div className="page-wrapper">
        <Header />
      </div>
      {/* <Sidebar /> */}
      <div className="page-body-wrapper">
        <div className="page-body">
        <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/StudentView" element={<StudentView />} />
        <Route path="/updateform" element={<UpdateStudentForm />} /> 
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
