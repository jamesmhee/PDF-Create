import { useState, createContext } from 'react'
import './App.css'
import Create from './components/Create'
import Logo from './assets/logo.png'

const DownloadContext = createContext()

function App() {
  const [isDownload, setIsDownload] = useState(false)

  return (
    <DownloadContext.Provider value={{isDownload, setIsDownload}}>
      <div className='relative top-0 container-xl mx-auto'>
        <div className='shadow-lg md:flex items-center justify-center rounded-lg w-max mx-auto my-auto p-10 md:p-20 h-auto'>
          <div className='flex flex-col md:flex-row items-center md:gap-20 gap-5'>
            <div className="text-lg font-bold mx-auto uppercase"><img width="100%" style={{maxWidth:'250px'}} src={Logo} alt="Logo"></img><br></br><span className='text-black'> Create Boucher </span></div>
            <Create />
          </div>
        </div>
      </div>      
    </DownloadContext.Provider>
  )
}

export { DownloadContext }
export default App
