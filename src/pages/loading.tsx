import { Player } from '@lottiefiles/react-lottie-player'
import { FC } from 'react'

const LoadingPage:FC<{message: string}> = ({message}) => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div>
        <Player
            autoplay
            loop
            src="/src/assets/Gear-Loader.json"
            style={{ height: '300px', width: '300px' }}
        >
        </Player>
        </div>
        <div className='text-xl font-semibold '>{message}</div>
    </div>
  )
}

export default LoadingPage