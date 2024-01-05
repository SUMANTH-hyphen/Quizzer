import { Player } from "@lottiefiles/react-lottie-player"
import { useNavigate } from "react-router-dom"


const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen ">
      <div id="top-1-headin" className=" w-screen h-2/3 md:h-4/5 flex flex-col gap-20 justify-center items-center">
        <div className=" w-11/12 text-center flex flex-col gap-10 md:w-1/2 md:gap-8 ">
          <p className=" text-4xl font-extrabold md:font-extrabold md:text-7xl">Level up your quiz creation process</p>
          <p className=" text-lg md:text-xl">Quizzer, automates question generation, removes redundancies and ensures top-notch quiz quality. Say goodbye to tedious quiz preparation and hello to efficiency!</p>
        </div>
        <div className=" w-11/12 md:w-3/5 flex flex-col items-center">
          <button className="btn btn-accent px-12 btn-md lg:btn-lg md:px-20" onClick={() => navigate("/takequiz")}>Take Quiz</button>
          <p className=" text-xs md:hidden font-extralight mt-2 text-center ">It hardly takes 3 Minutes<br />Make it Happen</p>
          <div className="hidden md:flex justify-end w-10/12 gap-3">
            <img src="/assets/tryit_arrow.svg" alt="tilt-arrow" className="h-12 w-12 md:h-28 md:w-28" />
            <p className=" text-xs md:text-sm font-extralight md:mt-3 text-center -rotate-12">It hardly takes 3 Minutes<br />Make it Happen</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-10 items-center justify-center md:flex-row">
        <button className="btn flex gap-3" onClick={() => window.open("https://vercel.com/", "_blank")}>
          <img src="/assets/vercel-icon.png" height={25} width={25} />
          Deployed on Vercel
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
            <path d="M 37.058594 12.980469 C 36.246094 12.949219 35.492188 13.414063 35.160156 14.15625 C 34.824219 14.898438 34.96875 15.765625 35.53125 16.359375 L 41.675781 23 L 3 23 C 2.277344 22.988281 1.609375 23.367188 1.246094 23.992188 C 0.878906 24.613281 0.878906 25.386719 1.246094 26.007813 C 1.609375 26.632813 2.277344 27.011719 3 27 L 41.675781 27 L 35.53125 33.640625 C 35.03125 34.164063 34.855469 34.914063 35.066406 35.605469 C 35.277344 36.296875 35.84375 36.820313 36.546875 36.976563 C 37.253906 37.132813 37.988281 36.894531 38.46875 36.359375 L 48.972656 25 L 38.46875 13.640625 C 38.109375 13.242188 37.597656 13 37.058594 12.980469 Z"></path>
          </svg>
        </button>
        <button className="btn flex gap-3" onClick={() => window.open("https://github.com/SUMANTH-hyphen/Quizzer.git", "_blank")}>
          <img src="/assets/github-mark.png" height={25} width={25} />
          GitHub Source code
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
            <path d="M 37.058594 12.980469 C 36.246094 12.949219 35.492188 13.414063 35.160156 14.15625 C 34.824219 14.898438 34.96875 15.765625 35.53125 16.359375 L 41.675781 23 L 3 23 C 2.277344 22.988281 1.609375 23.367188 1.246094 23.992188 C 0.878906 24.613281 0.878906 25.386719 1.246094 26.007813 C 1.609375 26.632813 2.277344 27.011719 3 27 L 41.675781 27 L 35.53125 33.640625 C 35.03125 34.164063 34.855469 34.914063 35.066406 35.605469 C 35.277344 36.296875 35.84375 36.820313 36.546875 36.976563 C 37.253906 37.132813 37.988281 36.894531 38.46875 36.359375 L 48.972656 25 L 38.46875 13.640625 C 38.109375 13.242188 37.597656 13 37.058594 12.980469 Z"></path>
          </svg>
        </button>
      </div>

      <div id="top-2-cards" className=" w-11/12 mt-20 md:mt-40 grid grid-cols-1 items-center gap-10 m-auto md:grid-cols-2">
        <div className="">
          <Player
            autoplay
            loop
            src="/assets/bee-animation.json"
            style={{ height: '400px', width: '400px' }}
          >
          </Player>
        </div>
        <div className=" flex flex-col gap-5">
          <p className=" font-bold text-3xl">Introducing "Buzzwing Explorer," </p>
          <p className=" text-xl">The vibrant emblem of agility and nature's pollination dance on website! Picture a magnificent bee, as it gracefully hovers in mid-air. </p>
          <p className=" text-xl">The Buzzwing Explorer embodies the essence of curiosity and exploration, symbolizing the quest for knowledge in your quiz platform. </p>
        </div>
        <div className=" grid grid-cols-1 items-center gap-10 md:gap-20 md:grid-cols-2 md:col-span-2">
          <div className=" flex flex-col gap-5">
            <p className=" font-bold text-3xl">Introducing "Whisker Angler,"</p>
            <p className=" text-xl">With an expertly raised paw, it gracefully balances a miniature fishing rod, showcasing the perfect fusion of agility and intellect.</p>
            <p className=" text-xl">The whiskered angler embodies the spirit of your quiz, casting their intellectual lines into the vast pool of knowledge.</p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Player
              autoplay
              loop
              src="/assets/cat-fishing.json"
              style={{ height: '300px', width: '300px' }}
            >
            </Player>
          </div>
        </div>
      </div>

      <div id="top-3-steps" className="flex flex-col items-center gap-10 mt-32 md:mt-40">
        <div>
          <p className=" text-4xl font-extrabold md:text-6xl md:font-extrabold">Easy as 1-2-3</p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Choose a mode</h2>
            </div>
            <figure><img src="/assets/step-1.png" alt="step-1" /></figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Take the quiz</h2>
            </div>
            <figure><img src="/assets/step-2.png" alt="step-1" /></figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Get your result</h2>
            </div>
            <figure><img src="/assets/step-3.png" alt="step-1" /></figure>
          </div>
        </div>
      </div>

      <div id="top-4-quizapi" className=" w-3/4 m-auto h-1/2 flex items-center justify-center">
        <div className="card lg:card-side shadow-xl bg-gradient-to-r from-blue-100 to-purple-100">
          <div className="card-body lg:card-side justify-between">
            <h1 className="card-title">Unlock a world of learning through our seamless quiz API integration. Explore diverse topics and test your knowledge effortlessly on our platform</h1>
            <button className="btn btn-outline flex gap-3" onClick={() => window.open("https://quizapi.io/", "_blank")}>
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                <path d="M 37.058594 12.980469 C 36.246094 12.949219 35.492188 13.414063 35.160156 14.15625 C 34.824219 14.898438 34.96875 15.765625 35.53125 16.359375 L 41.675781 23 L 3 23 C 2.277344 22.988281 1.609375 23.367188 1.246094 23.992188 C 0.878906 24.613281 0.878906 25.386719 1.246094 26.007813 C 1.609375 26.632813 2.277344 27.011719 3 27 L 41.675781 27 L 35.53125 33.640625 C 35.03125 34.164063 34.855469 34.914063 35.066406 35.605469 C 35.277344 36.296875 35.84375 36.820313 36.546875 36.976563 C 37.253906 37.132813 37.988281 36.894531 38.46875 36.359375 L 48.972656 25 L 38.46875 13.640625 C 38.109375 13.242188 37.597656 13 37.058594 12.980469 Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-10 bg-secondary text-white">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://cleanvoice.ai/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a href="https://cleanvoice.ai/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href="https://cleanvoice.ai/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
        <aside>
          <p>Should you resonate with the vibrancy of this color combination, rest assured, I share a similar sentiment and am eager to experiment with something refreshingly distinct. I've included the website link in the above icons, that inspired my creative approach for your reference.</p>
        </aside>
      </footer>
    </div>
  )
}

export default Home
