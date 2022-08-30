import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';

import Resume from './pages/Resume/Resume';
import ResumeForm from './pages/Resume/ResumeForm/ResumeForm';

import KakaoRedirectHandler from './components/Login/KakaoRedirectHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/form" element={<ResumeForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
