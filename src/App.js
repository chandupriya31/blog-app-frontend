import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';
import ShowBlog from './components/ShowBlog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMyBlogs } from './actions/blog-action';
// import { setAddBlog } from './actions/blog-action';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(getMyBlogs())
    }
  },[])
  return (
    <div>
      <h1>Blog-App</h1>
      <nav>  
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/blogs">Blogs</Link></li>  
      </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/new' element = {<BlogForm/>}/>
          <Route path='/blogs/edit/:id' element={<BlogForm/>}/>
          <Route path='/my-blogs/:id' element={<ShowBlog/>}/>
        </Routes>      
    </div>
  )
}

export default App;
