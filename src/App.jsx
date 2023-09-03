import Hero from './components/Hero'
import Viwer from './components/Viwer';

import './App.css';

const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient' />
        </div>
        <div className='app'>
           <Hero />
           <Viwer />
        </div>
    </main>
  )
}

export default App