import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SinglePost from './components/pages/SinglePost/SinglePost';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';



function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:postId" element={<EditPost />} />
        <Route path="/categories"element={<Categories />} />      
        <Route path="/about" element={<About />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="*" element={"404 Not Found"}/>
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
