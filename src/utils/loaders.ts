// import { defer } from "react-router-dom";
import { getCustomizedQuestions, getRandomQuestions } from "../services/TakeQuizServices";

export function loader(request : Request){
    const url = new URL(request?.url);
    if(url.searchParams.get("type") === "customize"){
        const params = Object.fromEntries([...url.searchParams.entries()])
        return (
           getCustomizedQuestions(params)
        ) 
    }else{
        return (
            getRandomQuestions()
        )
    }
}