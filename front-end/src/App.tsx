import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/Welcome';
import FormPage from './pages/Form';
import SignPage from './pages/Sign';
import FailPage from './pages/Fail';
import SuccessPage from './pages/Success';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/fail" element={<FailPage />} />
        <Route path="/success/:trackId" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
