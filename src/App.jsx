import './App.css';

function App() {

  return (
    <>
      <div className='bg-deepblue p-12'>
        <div className="container">
          <h1 className='text-5xl font-bold text-alabaster'>
            This is Tailwind CSS v4
          </h1>
          <input type="text" placeholder='Enter your name' className='bg-white text-2xl text-amber border-4 p-4 rounded mr-4' />
          <button className='bg-amber text-alabaster text-2xl font-bold mt-12 border-4 rounded px-6 py-4 animate-pulse'>Click here</button>
        </div>
      </div>
      <div className='@container border p-4'>
        <div className='grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-4'>
          <div className='bg-blue-500 h-40'></div>
          <div className='bg-green-500 h-40'></div>
          <div className='bg-red-500 h-40'></div>
          <div className='bg-yellow-500 h-40'></div>
        </div>
      </div>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-blue-500 h-96 w-96 flex items-center justify-center text-white text-4xl font-bold transform rotate-x-35 rotate-y-35'>
          3D Rotate
        </div>
      </div>
      <div className='min-h-screen flex flex-col gap-12 items-center justify-center bg-gray-100'>
        <div className='bg-linear-45 from-blue-500 to-green-500 p-8 rounded text-2xl font-bold text-white'>
          Angled Gradient
        </div>
        <div className='size-64 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600'></div>
        <div className='bg-radial from-yellow-500 to-red-500 h-64 w-64 rounded-full'></div>
      </div>
    </>
    
  )
}

export default App;
