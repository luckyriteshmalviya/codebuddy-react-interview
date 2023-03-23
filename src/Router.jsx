import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Form2 from './Components/Form/Form2';
import Form3 from './Components/Form/Form3';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/form2" element={<Form2 />} />
      <Route path="/form3" element={<Form3 />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
