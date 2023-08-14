import React, { useContext } from 'react'
import { DownloadContext } from '../App'

const Download = () => {
  const {isDownload, setIsDownload} = useContext(DownloadContext)
  return (
    <>
      <div className={`${isDownload ? "" : "hidden"} top-0 left-0 bg-slate-900 mx-auto absolute h-screen w-screen`}>
        <button className='rounded-lg border-2 shadow-lg bg-slate-300 p-3 mt-5 text-2xl text-slate-900 font-semibold duration-500 box-border hover:bg-transparent hover:text-white hover:border-2 focus:border-2 focus:text-white focus:bg-transparent' onClick={(()=>{
          setIsDownload(false)
        })}>Close</button>
        <div className='mx-auto my-5 text-white'>
          s
        </div>
      </div>
        
    </>
  )
}

export default Download
