import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './routes/Home';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}
