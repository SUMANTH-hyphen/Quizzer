import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as CustomError;
  console.error(error);

  const navigate = useNavigate()

  return (
    <div id="error-page" className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">{error.statusText ? error.statusText : "Error"}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This is the first time, Really!</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">{error.message}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            onClick={()=>navigate('/')}
            className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          {/* <a className="cursor-pointer text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ErrorPage