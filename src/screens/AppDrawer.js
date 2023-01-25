import React from 'react'
import config from '../utils/config'

const App = () => {

  const renderApps = (app, key) => {
    return (
      <a href={app.url} className='flex justify-center items-center flex-col' key={'app-' + key}>
        <div className='flex duration-400 justify-center items-center shadow hover:scale-105 transition cursor-pointer h-20 bg-gray-300 aspect-square rounded'>
          {
            app.imageUrl
              ? <img />
              : <p className='uppercase text-2xl'>{app.name.charAt(0)}</p>
          }
        </div>
        <p className='text-xs text-center mt-2 opacity-90'>{app.name}</p>
      </a>
    )
  }

  return (
    <div className='h-screen w-full bg-holo-animated flex flex-col items-center'>
      <div className='my-10 flex flex-col justify-center items-center'>
        <h1 className='title text-4xl'>Angelo Cipullo</h1>
        <h3 className='opacity-70'>App Drawer</h3>
      </div>

      <div className='max-w-5xl grid grid-cols-3 gap-20'>
        {config.apps.map(renderApps)}
      </div>
    </div>
  )
}

export default App