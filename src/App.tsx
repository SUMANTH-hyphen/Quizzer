import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/Errorpage"
import Home from "./pages/Home"
import TakeQuizBase from "./pages/TakeQuiz"
import About from "./pages/About"
import CreateQuizBase from "./pages/CreateQuiz"
import BaseLayout from "./layouts/BaseLayout"
import Quiz from "./pages/Quiz"
import { loader as QuizLoader } from "./utils/loaders"
import Result from "./pages/Result"


const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/takequiz",
        element: <TakeQuizBase />,
      },
      {
        path: "/about",
        element: <About />,
      },

    ],
  },
  {
    path: 'quiz',
    element: <Quiz />,
    loader: async ({ request }) => {
      return QuizLoader(request)
    },
    errorElement: <ErrorPage />
  },
  {
    path: 'result',
    element: <Result />,
    errorElement: <ErrorPage />
  },
  {
    path: "createquiz",
    element: <CreateQuizBase />,
    errorElement: <ErrorPage />,
    children: [{}]
  }
])


function App() {

  return (
    <div>
      {/* <FrigadeProvider
        publicApiKey="api_public_m4wR39BPZHwSK5JQyVuIVCSvjPwBOTTRTZZHCf7eybFpsOiBLsTyTok4NhRsSUd3"
        userId="my-user-id"> */}
        <RouterProvider router={router} />
        {/* <FrigadeTour
          flowId="flow_IiPYYn42A3P6yuFD"
          tooltipPosition="auto"
          dismissible={true}
          showStepCount={true}
        />
      </FrigadeProvider> */}
    </div>
  )
}

export default App

// ejOOIeOZjqPc4OsEZkjetJiwg6l4zC4jfl5jkO3f