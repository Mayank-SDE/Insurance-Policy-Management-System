import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import PostListContextProvider from '../store/post-list-store';
import '../routes/App.css';
import { Outlet } from 'react-router-dom';
const App = () => {

  return (
    <PostListContextProvider>
    <div className='app-container'>
      <Sidebar />
      <div className='content'>
      <Header/> 
      <Outlet/>
      <Footer/>
      </div>
    </div>
    </PostListContextProvider>
  )
}

export default App