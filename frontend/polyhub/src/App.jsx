import './App.css'
import MainPage from './pages/MainPage'
import Header from './components/layout/header'
import SearchInput from './components/ui/search-input/search-input.jsx'
import Sidebar from './components/ui/sidebar/side-bar.jsx'
import PostList from './components/layout/posts-list/post-list.jsx'
import PostInfo from './components/layout/post-info/post-info.jsx'
import RegisterForm from './components/ui/register-form/register-form.jsx'
import VerifyForm from './components/ui/verify-form/verify-form.jsx'
import AddPostForm from './components/ui/post-page/add-post.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  
  return (
  <>
    <Router>
    <Header search={<SearchInput />} />
      <Routes>
        <Route path='/register' element={<RegisterForm/>} />
        <Route path='/verification' element={<VerifyForm/>}/>
        <Route path='/' element= 
            {<MainPage left={<Sidebar/>} center={<PostList/>} />}
        />
        <Route path='/post/:id' element= 
            {<MainPage left={<Sidebar/>} center={<PostInfo/>} />}
        />
         <Route path='/post/add' element= 
            {<MainPage left={<Sidebar/>} center={<AddPostForm/>} />}
        />
        
    </Routes>
    </Router>
  </>
  )
}

export default App
