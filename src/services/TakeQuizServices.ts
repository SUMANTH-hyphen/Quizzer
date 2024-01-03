
// const response = await fetch(`${BASE_URL}/notes/`, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(note),
//   });


export async function getRandomQuestions():Promise<responseObjectInterface> {
    try {
        let data
        if(import.meta.env.MODE === "development"){
            const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=ejOOIeOZjqPc4OsEZkjetJiwg6l4zC4jfl5jkO3f`);
            data = await response.json();
        }
        else{
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}?apiKey=${import.meta.env.VITE_API_TOKEN}`);
            data = await response.json();
        }

        if(Object.keys(data).includes("error")){
            throw new Error(data.error)
        }
        return data

    } catch (error) {
        console.error('Error fetching random questions:', error);
        throw error
    }
}

export async function getCustomizedQuestions(params:customizedQuestionInterface):Promise<responseObjectInterface> {
    try {
        let data
        if(import.meta.env.MODE === "development"){
            const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=ejOOIeOZjqPc4OsEZkjetJiwg6l4zC4jfl5jkO3f&limit=${params.limit}&category=${params.category}&difficulty=${params.difficulty}`);
            data = await response.json();
        }
        else{
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}?apiKey=${import.meta.env.VITE_API_TOKEN}&limit=${params.limit}&category=${params.category}&difficulty=${params.difficulty}`);
            data = await response.json();
        }

        if(Object.keys(data).includes("error")){
            throw new Error(data?.error)
        }
        return data

    } catch (error) {
        console.error('Error fetching customized questions:', error);
        throw error
    }
}