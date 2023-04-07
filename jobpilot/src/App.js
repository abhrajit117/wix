import './App.css';
import arrow from './Images/Arrow.svg';
import profile from './Images/profile.svg';
import r1 from './Images/r1.svg';
import r2 from './Images/r2.svg';

function App() {
  return (
   
    <div className='max-w-full, flex, justify-center'>
        <div className='grid grid-cols-2 gap-16'>
          <section className='flex-auto, flex-row, flex-wrap, max-w-8xl, col-span-1'>
             <h1 className='flex-1, text-9xl, font-extrabold, p-10' id="app-name">
                  JOB PILOT
              </h1>
              <section>
                 <img src={arrow} id="arrow-img">

                 </img>
              </section>
              <div className='flex, justify-center'>
                   <h1 className='flex-1, text-7xl' id="description-text">
                        BUILD PLAN & EXECUTE
                   </h1>
                   <p className='flex-1, text-xl'id="second-description">
                        A Planning platform to manage conference, summits, hackathons & offline events.
                   </p>
              </div>
              <div className='flex, justify-items-center' id="btn-1-holder">
                  <button className='flex-1, p-11, bg-black' id="btn-organize">
                       ORGANIZE
                  </button>
              </div>
          </section>
          <section className='grid, w-90, col-start-2'>
              <div className='grid grid-cols-2 gap-8 '>
                 <section className='grid p-4'>
                      <img src={profile}></img>
                 </section>
                 <section className='grid row-start-1'>
                      <input type="text" className='bg-black h-12 grid row-start-2 ' id="input"placeholder="Search Events"></input>
                 </section>
              </div>
              <section className='grid grid-cols-2'id="box-holder">
                   <img src={r1} className='animate-spin'></img>
                   <img src={r2} className='grid, col-span-1, animate-pulse'id="g-box"></img>
              </section>
          </section>
        </div>
    </div>
   
  );
}

export default App;
