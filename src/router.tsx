import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import MyPage from './routes/MyPage';
import ProfileUpdate from './routes/ProfileUpdate';
import KakaoRedirection from './components/socialLogin/KakaoRedirection';
import Shop from './routes/Shop';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
      <Route path='/mypage' element={<MyPage />} />
      <Route path='/mypage/update' element={<ProfileUpdate />} />
      <Route path='/auth/kakao' element={<KakaoRedirection />} />
      <Route path='/shop/:id' element={<Shop />} />
    </Routes>
  );
}
