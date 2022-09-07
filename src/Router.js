import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import RecruitList from './pages/RecruitList/RecruitList';
import Resume from './pages/Resume/Resume';
import ResumeForm from './pages/Resume/ResumeForm/ResumeForm';
import DetailMain from './pages/DetailMain/DetailMain';
import KakaoRedirectHandler from './components/Login/KakaoRedirectHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
        <Route path="/detail/:num" element={<DetailMain />} />
        <Route path="/recruitList" element={<RecruitList />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/form" element={<ResumeForm />} />
        <Route path="/resume/:resumesId" element={<ResumeForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
