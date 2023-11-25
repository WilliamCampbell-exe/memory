import './index.css';
import Navbar from './components/Navbar'
import logo from './assets/memo-re-logo.png'
import banner from './assets/memo-re-banner.png'
function App() {  
  return (
    <>
      <div className='flex fixed border-red-400 justify-center p-8 w-screen '>
      <img src={banner} alt="logo" className='h-[120px] min-w-full'/>
      </div>
      <Navbar />
    </>
  )
}

export default App
