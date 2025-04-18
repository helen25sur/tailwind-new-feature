import './App.css';

function App() {

  return (
    <div className='bg-deepblue p-12'>
      <div className="container">
        <h1 className='text-5xl font-bold text-alabaster'>
          This is Tailwind CSS v4
        </h1>
        <input type="text" placeholder='Enter your name' className='bg-white text-2xl text-amber border-4 p-4 rounded mr-4' />
        <button className='bg-amber text-alabaster text-2xl font-bold mt-12 border-4 rounded px-6 py-4'>Click here</button>
      </div>

    </div>
  )
}

export default App;
