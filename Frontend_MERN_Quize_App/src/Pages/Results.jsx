import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Results = () => {
  const [data, setData] = useState()
  const userId = useSelector((state) => state.mernQuize.userId);

  useEffect(()=>{
    async function getData(){
      try{
        const res = await axios.get(`http://localhost:3001/admin/result/${userId}`)
        setData(res.data.results)
      }catch(error){
        console.log(error);
      }
    }
    getData()
  },[])
  console.log(data);
  return (
    <div>
      <div className="border-red-500 absolute  bg-teal-300 rounded-2xl right-24 top-44 border-2 mb-8 p-1 pl-2  pr-2 ">
        <Link to="/results">
          <button className="text-xl font-bold rounded-md">Previous results</button>
        </Link>
      </div>
      <div className="flex w-11/12 ml-16 mt-12  mb-1">
        <div className=" w-6/12 ">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-red-600">
              QUESTIONS
            </h1>
          </div>

          {data && data.questionArr?.map((e, index) => {
            return (
              <div className="h-16 mt-4 border-2 pl-4 ">
                <p>
                  {index + 1}) {e.questions}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" w-3/12">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-red-600">
              USER ANSWER
            </h1>
          </div>
          {data && data.resultUser?.map((e) => {
            return (
              <div className="h-16 mt-4 border-2 text-center red">
                <p>{e}</p>
              </div>
            );
          })}
        </div>
        <div className="w-3/12">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-red-600">
              CORRECT ANSWER
            </h1>
          </div>
          {data && data.questionArr?.map((e) => {
            return (
              <div className="h-16 mt-4 text-center border-2 red">
                <p>{e.correctAnswer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Results
