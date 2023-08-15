import React, { useContext } from "react";
import { DownloadContext } from "../App";

const Download = ({ carDetails }) => {
  const { isDownload, setIsDownload } = useContext(DownloadContext);
  return (
    <>
      <div
        className={`${
          isDownload ? "" : "hidden"
        } top-0 left-0 bg-slate-900 mx-auto absolute h-screen w-screen`}
      >
        <button
          className="rounded-lg border-2 shadow-lg bg-slate-300 p-3 mt-5 text-2xl text-slate-900 font-semibold duration-500 box-border hover:bg-transparent hover:text-white hover:border-2 focus:border-2 focus:text-white focus:bg-transparent"
          onClick={() => {
            setIsDownload(false);
          }}
        >
          Close
        </button>
        <button
          className="ml-10 rounded-lg border-2 shadow-lg bg-slate-300 p-3 mt-5 text-2xl text-slate-900 font-semibold duration-500 box-border hover:bg-transparent hover:text-white hover:border-2 focus:border-2 focus:text-white focus:bg-transparent"
          onClick={()=>{
            console.log("Downloading...")
          }}
        >
          Download
        </button>
        <div className="mx-auto my-5">
          <div className="border-8 border-red-600 bg-white w-[100%] py-5 px-5 text-left">
            <p className="inline-block text-[5rem] font-semibold">ราคา : <span className="bg-gray-300 px-20 text-black">{carDetails.price}</span></p>
            <p className="inline-block text-[5rem] font-semibold">ยี่ห้อรถ : <span className="bg-gray-300 px-20 text-black">{carDetails.names}</span></p>
            <p className="inline-block text-[5rem] font-semibold">รุ่นปี : <span className="bg-gray-300 px-20 text-black">{carDetails.year}</span></p>
            <p className="inline-block text-[5rem] font-semibold">สี : <span className="bg-gray-300 px-20 text-black">{carDetails.color}</span></p>
            <p className="inline-block text-[5rem] font-semibold">ระยะทางในการใช้งาน : <span className="bg-gray-300 px-20 text-black">{carDetails.miles}</span> กิโลเมตร</p>
            <p className="inline-block text-[5rem] font-semibold uppercase">เลขตัวรถ : <span className="bg-gray-300 px-20 text-black">{carDetails.body}</span></p>
            <p className="inline-block text-[5rem] font-semibold uppercase">เลขเครื่องยนต์ : <span className="bg-gray-300 px-20 text-black">{carDetails.engine}</span></p>
            <p className="inline-block text-[5rem] font-semibold">เลขทะเบียน : <span className="bg-gray-300 px-20 text-black">{carDetails.plate}</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
