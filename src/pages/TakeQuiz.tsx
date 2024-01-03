import { useState } from "react"
import FormSelectInput from "../components/form/FormSelectItem"
import FormInputItem from "../components/form/FormInputItem"
import { CategoryItemsData, DifficultyItemsData } from "../assets/MetaData"
import { Player } from '@lottiefiles/react-lottie-player';
import { createSearchParams, useNavigate } from "react-router-dom";


const TakeQuizBase = () => {

  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<string>("tab-one")
  const [customizeFormData, setCustomizeFormData] = useState<CustomizeData>({ category: "", difficulty: "", limit: 5 })

  const CustomizeIcon = () => {
    return(
      <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
        <path d="M 20 4 C 18.706841 4 17.604859 4.84267 17.1875 6 L 4 6 A 1.0001 1.0001 0 1 0 4 8 L 17.1875 8 C 17.604859 9.15733 18.706841 10 20 10 C 21.293159 10 22.395141 9.15733 22.8125 8 L 26 8 A 1.0001 1.0001 0 1 0 26 6 L 22.8125 6 C 22.395141 4.84267 21.293159 4 20 4 z M 20 6 C 20.54383 6 20.958426 6.4088115 20.988281 6.9433594 A 1.0001 1.0001 0 0 0 20.988281 7.0585938 C 20.957487 7.5921595 20.543157 8 20 8 C 19.45617 8 19.041574 7.5911885 19.011719 7.0566406 A 1.0001 1.0001 0 0 0 19.011719 6.9414062 C 19.042513 6.4078405 19.456843 6 20 6 z M 12 12 C 10.706841 12 9.6048586 12.84267 9.1875 14 L 4 14 A 1.0001 1.0001 0 1 0 4 16 L 9.1875 16 C 9.6048586 17.15733 10.706841 18 12 18 C 13.293159 18 14.395141 17.15733 14.8125 16 L 26 16 A 1.0001 1.0001 0 1 0 26 14 L 14.8125 14 C 14.395141 12.84267 13.293159 12 12 12 z M 12 14 C 12.54383 14 12.958426 14.408812 12.988281 14.943359 A 1.0001 1.0001 0 0 0 12.988281 15.058594 C 12.957487 15.592159 12.543157 16 12 16 C 11.45617 16 11.041574 15.591188 11.011719 15.056641 A 1.0001 1.0001 0 0 0 11.011719 14.941406 C 11.042513 14.407841 11.456843 14 12 14 z M 16 20 C 14.706841 20 13.604859 20.84267 13.1875 22 L 4 22 A 1.0001 1.0001 0 1 0 4 24 L 13.1875 24 C 13.604859 25.15733 14.706841 26 16 26 C 17.293159 26 18.395141 25.15733 18.8125 24 L 26 24 A 1.0001 1.0001 0 1 0 26 22 L 18.8125 22 C 18.395141 20.84267 17.293159 20 16 20 z M 16 22 C 16.54383 22 16.958426 22.408812 16.988281 22.943359 A 1.0001 1.0001 0 0 0 16.988281 23.058594 C 16.957487 23.592159 16.543157 24 16 24 C 15.45617 24 15.041574 23.591188 15.011719 23.056641 A 1.0001 1.0001 0 0 0 15.011719 22.941406 C 15.042513 22.407841 15.456843 22 16 22 z"></path>
      </svg>
    )
  }

  const RandomIcon = () => {
    return(
      <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
        <path d="M 15 2.9980469 C 14.626 2.9980469 14.253484 3.0699375 13.896484 3.2109375 L 5.4746094 6.5234375 C 4.8686094 6.7614375 4.8570312 7.6151406 5.4570312 7.8691406 L 14.410156 11.664062 C 14.599156 11.744063 14.799 11.783203 15 11.783203 C 15.201 11.783203 15.401844 11.744062 15.589844 11.664062 L 24.542969 7.8691406 C 25.142969 7.6151406 25.131391 6.7614375 24.525391 6.5234375 L 16.103516 3.2109375 C 15.746516 3.0699375 15.374 2.9980469 15 2.9980469 z M 15 6 C 16.105 6 17 6.448 17 7 C 17 7.552 16.105 8 15 8 C 13.895 8 13 7.552 13 7 C 13 6.448 13.895 6 15 6 z M 3.8847656 9.5097656 C 3.4066406 9.5609531 3 9.9631406 3 10.494141 L 3 20.541016 C 3 21.689016 3.6409219 22.719516 4.6699219 23.228516 C 4.6699219 23.228516 9.3001094 25.507609 12.037109 26.849609 C 12.945109 27.294609 14 26.631094 14 25.621094 L 14 15.052734 C 14 14.209734 13.496703 13.448141 12.720703 13.119141 L 4.3730469 9.5839844 C 4.2100469 9.5149844 4.0441406 9.4927031 3.8847656 9.5097656 z M 26.115234 9.5097656 C 25.955859 9.4927031 25.789953 9.5149844 25.626953 9.5839844 L 17.279297 13.119141 C 16.503297 13.448141 16 14.209734 16 15.052734 L 16 25.621094 C 16 26.632094 17.054891 27.295562 17.962891 26.851562 C 20.699891 25.509563 25.330078 23.230469 25.330078 23.230469 C 26.359078 22.720469 27 21.689016 27 20.541016 L 27 10.494141 C 27 9.9631406 26.593359 9.5609531 26.115234 9.5097656 z M 5.7988281 12.287109 C 5.8639063 12.287623 5.931 12.298562 6 12.320312 C 6.552 12.493313 7 13.305766 7 14.134766 C 7 14.963766 6.552 15.494312 6 15.320312 C 5.448 15.147312 5 14.334859 5 13.505859 C 5 12.780484 5.3432813 12.283514 5.7988281 12.287109 z M 24.201172 12.646484 C 24.656719 12.643066 25 13.140734 25 13.865234 C 25 14.693234 24.552 15.506687 24 15.679688 C 23.448 15.852688 23 15.322141 23 14.494141 C 23 13.666141 23.448 12.853687 24 12.679688 C 24.069 12.657937 24.136094 12.646973 24.201172 12.646484 z M 20.201172 14.287109 C 20.656719 14.283691 21 14.781359 21 15.505859 C 21 16.333859 20.552 17.147312 20 17.320312 C 19.448 17.493312 19 16.962766 19 16.134766 C 19 15.306766 19.448 14.494312 20 14.320312 C 20.069 14.298562 20.136094 14.287598 20.201172 14.287109 z M 24.201172 18.287109 C 24.656719 18.283691 25 18.781359 25 19.505859 C 25 20.333859 24.552 21.147312 24 21.320312 C 23.448 21.493312 23 20.962766 23 20.134766 C 23 19.306766 23.448 18.494312 24 18.320312 C 24.069 18.298562 24.136094 18.287598 24.201172 18.287109 z M 9.7988281 20.287109 C 9.8639062 20.287623 9.931 20.298562 10 20.320312 C 10.552 20.493312 11 21.305766 11 22.134766 C 11 22.963766 10.552 23.494312 10 23.320312 C 9.448 23.147313 9 22.334859 9 21.505859 C 9 20.780484 9.3432813 20.283514 9.7988281 20.287109 z M 20.201172 20.287109 C 20.656719 20.283691 21 20.781359 21 21.505859 C 21 22.333859 20.552 23.147312 20 23.320312 C 19.448 23.493312 19 22.962766 19 22.134766 C 19 21.306766 19.448 20.494313 20 20.320312 C 20.069 20.298562 20.136094 20.287598 20.201172 20.287109 z"></path>
      </svg>
    ) 
  }

  const handleSubmitVerify = () =>{
    if(customizeFormData.limit <= 20 && customizeFormData.limit >= 5 && !customizeFormData.category.includes("slect")){
      return true
    }
    else{
      return false
    }
  }

  const handleSubmit = () =>{
    if(handleSubmitVerify() && activeTab === "tab-one"){
      navigate({
        pathname: '/quiz',
        search: `?${createSearchParams({type: "customize", limit: customizeFormData.limit.toString(), category: customizeFormData.category, difficulty: customizeFormData.difficulty })}`,
      });
    }
    else if(activeTab === "tab-two"){
      navigate({
        pathname: '/quiz',
        search: `?${createSearchParams({type: "random", limit: customizeFormData.limit.toString(), category: customizeFormData.category, difficulty: customizeFormData.difficulty })}`,
      });
    }
    else{
      alert("empty")
    }
  }

  return (
    <div id="welcome-tooltip" className="w-screen my-32 flex items-center justify-center">
      <div className="flex flex-col gap-5 w-10/12 md:w-1/3">
        <div className="tabs tabs-boxed mx-auto ">
          <button id="tab-one" onClick={(e) => setActiveTab(e.currentTarget.id)} className={`tab tab-lg  ${activeTab === "tab-one" ? "tab-active" : ""}`}><CustomizeIcon /><p>Customize</p></button>
          <button id="tab-two" onClick={(e) => setActiveTab(e.currentTarget.id)} className={`tab tab-lg  ${activeTab === "tab-two" ? "tab-active" : ""}`}><RandomIcon /><p>Random</p></button>
        </div>
        <div className="ring-1 ring-secondary rounded-xl p-5 flex flex-col gap-6 w-auto h-auto">
          {
            activeTab === "tab-one" ? (
              <div className="flex flex-col gap-5">
                <FormSelectInput items={CategoryItemsData} title='Choose a topic' updateState={setCustomizeFormData} id="category" />
                <FormSelectInput items={DifficultyItemsData} title='Choose difficulty' id="difficulty" updateState={setCustomizeFormData} />
                <FormInputItem type='number' id='limit' title='Questions limit (5 - 20)' placeholder='set limit' updateState={setCustomizeFormData} />
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <Player
                  autoplay
                  loop
                  src="/src/assets/slime-jump-mini-games.json"
                  style={{ height: '250px', width: '300px' }}
                >
                </Player>
                <p className="text-center">A random set of 20 questions from various difficulties and categories.</p>
              </div>
            )
          }
          <button className="btn btn-accent mx-auto w-full" onClick={()=>handleSubmit()}>Start Quiz</button>
        </div>
      </div>
    </div>
  )
}

export default TakeQuizBase
