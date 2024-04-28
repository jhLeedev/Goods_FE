import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './routes/Home';
import MyPage from './routes/MyPage';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/mypage' element={<MyPage />} />
    </Routes>
  );
}
