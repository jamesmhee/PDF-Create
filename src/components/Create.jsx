import React, { useState, useContext } from "react";
import Download from "./Download";
import { DownloadContext } from "../App";

const Create = () => {
  const [carDetails, setCarDetails] = useState([
    {
      names: "",
      year: "",
      color: "",
      miles: "",
      body: "",
      engine: "",
      plate: "",
      price: "",
    },
  ]);

  const { isDownload, setIsDownload } = useContext(DownloadContext);

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsDownload(true);
  };

  return (
    <>
      <div className={`${isDownload ? "hidden" : ""} top-0 mt-5 md:mt-0`}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col mx-auto sm:w-96 sm:max-w-lg md:w-full md:max-w-xl text-center md:text-left"
        >
          <label className="inline-block">
            ชื่อรถ <span className="text-red-600">*</span>
          </label>
          <input
            id="model"
            value={carDetails.names}
            name="names"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto md:w-96"
            placeholder="ex: Toyota Fortuner Diesel 2.4"
            required
          />
          <br></br>
          <label className="inline-block">
            ปีรถ <span className="text-red-600">*</span>
          </label>
          <input
            id="years"      
            value={carDetails.year}
            name="year"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto"
            placeholder="ex: 2019"
            required
          />
          <br></br>
          <label className="inline-block">
            สีรถ <span className="text-red-600">*</span>
          </label>
          <input
            id="years"      
            value={carDetails.color}
            name="color"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto"
            placeholder="ex: ขาว"
            required
          />
          <br></br>
          <label className="inline-block">
            เลขไมล์ <span className="text-red-600">*</span>
          </label>
          <input
            id="miles"
            value={carDetails.miles}
            name="miles"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto"
            placeholder="ex: 120,000"
            required
          />
          <br></br>
          <label className="inline-block">
            เลขตัวถัง <span className="text-red-600">*</span>
          </label>
          <input
            id="body-number"
            value={carDetails.body}
            name="body"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto uppercase"
            placeholder="ex: ABCDEFG12345"
            required
          />
          <br></br>
          <label className="inline-block">
            เลขเครื่องยนต์ <span className="text-red-600">*</span>
          </label>
          <input
            id="engine-number"
            value={carDetails.engine}
            name="engine"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto uppercase"
            placeholder="ex: ABCDEFG12345"
            required
          />
          <br></br>
          <label className="inline-block">
            ป้ายทะเบียน <span className="text-red-600">*</span>
          </label>
          <input
            id="engine-number"
            value={carDetails.plate}
            name="plate"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto uppercase"
            placeholder="ex: 1กก 9999"
            required
          />
          <br></br>
          <label className="inline-block">
            ราคา <span className="text-red-600">*</span>
          </label>
          <input
            id="price"
            value={carDetails.price}
            name="price"
            onChange={onChangeHandle}
            type="text"
            className="rounded-lg m-2 border-2 p-2 focus:text-slate-700 focus:bg-rose-100 w-auto"
            placeholder="ex: 1,299,000"
            required
          />
          <button className="p-5 w-full border-2 border-zinc-500 rounded-lg mt-10 hover:bg-rose-700 hover:text-slate-200 font-semibold duration-300">
            Create Boucher
          </button>
        </form>
      </div>
      <Download carDetails={carDetails} />
    </>
  );
};

export default Create;
