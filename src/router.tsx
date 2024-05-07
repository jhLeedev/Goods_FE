import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import MyPage from './routes/MyPage';
import ProfileUpdate from './routes/ProfileUpdate';
import KakaoRedirection from './components/socialLogin/KakaoRedirection';
import PostCreate from './routes/PostCreate';
import PostEdit from './routes/PostEdit';
import Shop from './routes/Shop';
import PostDetail from './routes/PostDetail';
import PointCharge from './routes/PointCharge';

import PurchaseHistory from './routes/PurchaseHistory';
// protected route : home,signin,signup,kakaoRedirection,shop 제외 모든 페이지
export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/mypage/charge' element={<PointCharge />} />
        <Route path='/purchase-history' element={<PurchaseHistory />} />
      </Route>
      <Route path='/mypage' element={<MyPage />} />
      <Route path='/mypage/update' element={<ProfileUpdate />} />
      <Route path='/auth/kakao' element={<KakaoRedirection />} />
      <Route path='/posts/new' element={<PostCreate />} />
      <Route path='/posts/edit/:id' element={<PostEdit />} />
      <Route path='/shop/:id' element={<Shop />} />
    </Routes>
  );
}
