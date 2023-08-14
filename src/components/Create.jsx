import React, {useState, useContext} from 'react'
import Download from './Download'
import { DownloadContext } from '../App'

const Create = () => {
  const [carNames, setCarNames] = useState('')
  const [carYears, setCarYears] = useState(Date)
  const [carMiles, setCarMiles] = useState(0)
  const [carBody, setCarBody] = useState('')
  const [carEngine, setCarEngine] = useState('')
  const [carPrice, setCarPrice] = useState(0)
  
  const {isDownload, setIsDownload} = useContext(DownloadContext)

  const onSubmit = (e) =>{
    e.preventDefault()
    setIsDownload(true)
  }

  return (
    <>
    <div className={`${isDownload ? "hidden" : ""} top-0 mt-5 md:mt-0`}>
      <form onSubmit={onSubmit} className='flex flex-col mx-auto sm:w-96 sm:max-w-lg md:w-full md:max-w-xl text-center md:text-left'>
        <label className='inline-block'>ชื่อรถ <span className='text-red-600'>*</span></label>
        <input id="model" onChange={(e)=>setCarNames(e.target.value)} type='text' className='rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto md:w-96' name='' placeholder='ex: Toyota Fortuner Diesel 2.4' required/>
        <br></br>
        <label className='inline-block'>ปีรถ <span className='text-red-600'>*</span></label>
        <input id="years" type='number' className='rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto' name='' placeholder='ex: 2019' required/>
        <br></br>
        <label className='inline-block'>เลขไมล์ <span className='text-red-600'>*</span></label>
        <input id="miles" type='text' className='rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto' name='' placeholder='ex: 120,000' required/>
        <br></br>
        <label className='inline-block'>เลขตัวถัง <span className='text-red-600'>*</span></label>
        <input id="body-number" type='text' className='rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto uppercase' name='' placeholder='ex: ABCDEFG12345' required/>
        <br></br>
        <label className='inline-block'>เลขเครื่องยนต์ <span className='text-red-600'>*</span></label>
        <input id="engine-number" type='text' className='rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto uppercase' name='' placeholder='ex: ABCDEFG12345' required/>
        <br></br>
        <label className='inline-block'>ราคา <span className='text-red-600'>*</span></label>
        <input id="price" type='number' className='rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto' name='' placeholder='ex: 1,299,000' required/>
        <button className='p-5 w-full border-2 border-zinc-500 rounded-lg mt-10 hover:bg-rose-700 hover:text-slate-200 font-semibold duration-300'>Create Boucher</button>
      </form>
    </div>
    <Download/>
    </>
  )
}

export default Create
