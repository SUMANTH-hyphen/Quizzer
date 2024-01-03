import { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


const Result = () => {

  const navigate = useNavigate()
  const performanceObject = useLocation().state
  const [performance, setPerformance] = useState<resultInterface[]>(performanceObject.performance)
  const [quizData, setQuizData] = useState<responseObjectInterface[]>(performanceObject.quizdata)
  const [result, setResult] = useState<number>(0)
  const [checkedQues, setCheckedQues] = useState<number>(0)

  const handleAccordian = useCallback((index: number) => {
    setCheckedQues(index);
  }, []);

  useEffect(() => {
    performance.map((obj) => {
      if (obj.actualAnswer === obj.expectedAnswer)
        setResult((prev) => prev + 1)
    })
  }, [performance])

  useEffect(() => {
    setPerformance(performanceObject.performance)
    setQuizData(performanceObject.quizdata)
  }, [performanceObject])

  // take to takequiz page if user try to go back from result page
  

  return (
    <div className=" h-screen w-screen p-6 flex flex-col gap-10 md:px-20 py-10">
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-t from-blue-200 to-blue-10">
          <div className="card-body gap-8 md:gap-0">
            <h1 className="font-bold text-xl">Score Card</h1>
            <p className="hidden md:block">{`${result/2} out of ${quizData.length} are correct`}</p>
            <h1 className="font-bold text-4xl items-center justify-center flex md:text-6xl">{`${result/2} / ${quizData.length}`}</h1>
            <div className="card-actions justify-center gap-3 md:justify-end">
              <button className="btn btn-secondary">Share</button>
              <button className="btn btn-secondary" onClick={()=> navigate("/")}>Home</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-scroll">
        <div className="join join-vertical w-full">
          {
            quizData.map((data, index) => {
              return (
                <div className="collapse collapse-arrow join-item border border-base-300" onClick={()=>handleAccordian(index)}>
                  <input id={`$acc-${index}`} type="radio" name="my-accordion-4" checked={index===checkedQues?true:false}/>
                  <div className={`collapse-title text-xl font-medium ${index===checkedQues? "" : "truncate"} ${performance[index].actualAnswer===performance[index].expectedAnswer ? " text-green-500" : "text-red-500"}`}>{data.question}</div>
                  <div className="collapse-content">
                    <p>{performance[index] && Object.values(quizData[index]["answers"])[performance[index]["actualAnswer"]]}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Result