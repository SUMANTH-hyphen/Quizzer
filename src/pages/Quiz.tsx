/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useRef, useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import RandomColor from "../components/ui/RandomColor";
import { Tour, TourProps } from "antd";
import "../App.css"

const Quiz = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()
    const [time, setTime] = useState<number>(300);
    const [currentQues, setCurrentQues] = useState<number>(0)
    const [result, setResult] = useState<resultInterface[]>([])
    const [choosedOption, setChoosedOption] = useState<number>(-1)
    const [quizData, setQuizData] = useState<responseObjectInterface[]>(useLoaderData() as responseObjectInterface[])

    const randomColor = () => {
        const color = [["red-50", "red-700", "red-600/10"], ["yellow-50", "yellow-800", "yellow-600/20"], ["green-50", "green-700", "green-600/20"], ["blue-50", "blue-700", "blue-700/10"], ["purple-50", "purple-700", "purple-700/10"], ["indigo-50", "indigo-700", "indigo-700/10"]]
        const random = Math.floor(Math.random() * (color.length - 0)) + 0;
        return color[random]
    }

    const memoRandomColor = useMemo(() => randomColor(), [currentQues])

    const steps: TourProps['steps'] = [
        {
            title: 'Question Number',
            description: 'This progress bar indicates the current question number to total questions.',
            target: () => ref1.current,
        },
        {
            title: 'Timer',
            description: 'Each question is limited to 30 seconds, at completion of time you will be moved to next question.',
            target: () => ref2.current,
        },
        {
            title: 'Question',
            description: 'This is the question you need to answer, every question comes with a tag represents the topic name.',
            target: () => ref3.current,
        },
        {
            title: 'Options',
            description: 'You need to click your answer from these options, choose wisely!',
            target: () => ref4.current,
        },
    ];

    const handleTourClose = () => {
        setOpen(false)
        const timer = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 10 : 0));
        }, 1000);

        // Clear the interval when the component unmounts or when time reaches 0
        return () => clearInterval(timer);
    }

    useEffect(() => {
        // Check if it's the last question and result has been updated
        if (currentQues === quizData.length - 1 && result.length === quizData.length) {
            document.exitFullscreen()
            navigate("/result", { state: { performance: result, quizdata: quizData } });
        }
    }, [currentQues, navigate, quizData, result]);

    useEffect(() => {
        const handleBeforeUnload = (event: Event) => {
            event.preventDefault();
            // Custom logic to handle the refresh
            // Display a confirmation message or perform necessary actions
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // useEffect(() => {
    //     document.body.requestFullscreen();
    // }, [])

    //disable going back
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function() {
      window.history.pushState(null, document.title, window.location.href);
    });

    const handleResult = () => {
        const presentQuesData = quizData.at(currentQues)
        if (presentQuesData !== undefined) {
            const index = Object.values(presentQuesData.correct_answers).indexOf("true")
            setResult(prev => [...prev, { id: presentQuesData.id, expectedAnswer: choosedOption, actualAnswer: index }]);
            // setResult(prev => {
                //     const newResult = [...prev, { id: presentQuesData.id, expectedAnswer: choosedOption, actualAnswer: index }];
                // handleNext(); // Call handleNext after updating the state
            //     return newResult;
            // });
        }
    }

    const handleNext = () => {
        handleResult()
        if (currentQues < quizData.length - 1) {
            setCurrentQues((prev) => prev + 1)
            setTime(300)
        }
        // else {
        //     navigate("/result", { state: { performance: result, quizdata: quizData }})  
        // }
    }

    if (time === 0 && currentQues !== quizData.length - 1) {
        handleNext()
    }

    return (
        <div>
            <div className="hidden lg:visible">
                <Tour open={open} onClose={() => handleTourClose()} steps={steps} closeIcon={false} type="primary" />
            </div>
            <div className="w-screen h-screen flex flex-col items-center justify-start pt-10 gap-16 md:gap-6">
                <div className="flex items-center gap-5 md:gap-10 md:mb-10">
                    <div className="flex flex-col" ref={ref1}>
                        <div>
                            <progress className="progress progress-primary w-52 md:w-80" value={currentQues + 1} max={quizData.length}></progress>
                        </div>
                        <text className="font-medium">{`${currentQues + 1} / ${quizData.length}`}</text>
                    </div>
                    <div ref={ref2} className="radial-progress bg-primary text-secondary-content border-2 border-primary"
                        style={{ "--value": time / 3, "--size": "2.5rem", "--thickness": "0.2rem" } as React.CSSProperties}
                        role="progressbar"
                    >
                        {time / 10}
                    </div>
                </div>
                {
                    quizData.map((quesData, quesIndex) => (
                        currentQues === quesIndex &&
                        <>
                            <div className="flex w-10/12 max-h-fit max-w-fit gap-4 md:w-10/12 md:h-1/6">
                                <div className="hidden md:visible">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                        <path d="M 13.599609 4 C 8.8620649 4 5 7.8620649 5 12.599609 L 5 30.599609 L 5 31.400391 L 5 38.400391 C 5 43.137935 8.8620649 47 13.599609 47 L 36.400391 47 C 41.137935 47 45 43.137935 45 38.400391 L 45 31.400391 L 45 30.599609 L 45 12.599609 C 45 7.8620649 41.137935 4 36.400391 4 L 13.599609 4 z M 25.015625 13.705078 C 29.475625 13.705078 32.267578 16.903719 32.267578 22.011719 C 32.267578 25.164719 31.257078 27.636594 29.455078 28.933594 L 31.464844 31.724609 L 29.246094 31.724609 L 27.849609 29.824219 C 27.003609 30.142219 26.036625 30.306641 25.015625 30.306641 C 20.500625 30.306641 17.732422 27.153719 17.732422 22.011719 C 17.732422 16.892719 20.533625 13.705078 25.015625 13.705078 z M 25.015625 15.53125 C 21.784625 15.53125 19.763672 18.023719 19.763672 22.011719 C 19.763672 26.010719 21.775344 28.482422 25.027344 28.482422 C 25.609344 28.482422 26.16975 28.407187 26.71875 28.242188 L 24.621094 25.396484 L 26.861328 25.396484 L 28.300781 27.308594 C 29.543781 26.319594 30.234375 24.428719 30.234375 22.011719 C 30.234375 18.035719 28.223625 15.53125 25.015625 15.53125 z M 7 36.902344 C 8.5794631 38.792759 10.952573 40 13.599609 40 L 36.400391 40 C 39.047427 40 41.420537 38.792759 43 36.902344 L 43 38.400391 C 43 42.056846 40.056846 45 36.400391 45 L 13.599609 45 C 9.9431546 45 7 42.056846 7 38.400391 L 7 36.902344 z"></path>
                                    </svg>
                                </div>
                                <div ref={ref3} className="flex flex-col gap-3">
                                    <text className="text-lg text-justify font-medium md:text-3xl">{quesData.question}</text>
                                    <div className="flex gap-3 ">
                                        {
                                            quesData.tags.map((tag, tagIndex) => {
                                                return (
                                                    <RandomColor tag={tag.name} colorPicker={memoRandomColor} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div ref={ref4} className="flex flex-col gap-3 overflow-y-scroll h-1/2 w-10/12 md:w-2/5 md:h-1/2">
                                {
                                    Object.values(quesData.answers).map((option, optionIndex) =>
                                        option !== null && (
                                            <button onClick={() => setChoosedOption(optionIndex)} id={`option-${optionIndex}`} className={`rounded-lg p-2 border-2 flex gap-5 items-center justify-start hover:border-secondary ${choosedOption === optionIndex ? "focus:bg-secondary focus:text-white" : ""}`}>
                                                <div>
                                                    <kbd className="kbd bg-secondary text-white">{String.fromCharCode(97 + optionIndex)}</kbd>
                                                </div>
                                                <p className="text-clip text-start overflow-clip">{option}</p>
                                            </button>
                                        )
                                    )
                                }
                            </div>
                        </>
                    ))
                }
                <div>
                    <button className="btn btn-accent px-20 mb-10" onClick={() => time !== 0 && handleNext()}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz
