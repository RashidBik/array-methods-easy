import { useRouter } from 'next/router';
import React,{Fragment, useState} from 'react';

const CardOne = ({shapes, dispatch}) => {
  const router = useRouter();
  const [execute, setExecute] = useState(false);
  
  return (
    <Fragment>
    {shapes.map((item,index) => {
      return (
        <main key={index} 
              className='bg-gray-300 md:w-[40%] md:h-[100vh] md:fixed'>
           <header className=''>
            <button className='btn text-2xl'
              onClick={()=> router.replace('/')}>
            Exit
            </button>
            <div className='text-2xl'>{item.name}</div>
            <div></div>
           </header>
           <section className=''>
            <div className={`arr ${item.bgBefor}`}>
              <div className="shapes">{` ${item.tools1.a1}`}</div>
              <div className="shapes">{` ${item.tools1.b1}`}</div>
              <div className="shapes">{` ${item.tools1.c1}`}</div>
              <div className="shapes">{` ${item.tools1.d1}`}</div>
              <div className="shapes">{` ${item.tools1.e1}`}</div>
              <div className="shapes">{` ${item.tools1.f1}`}</div>
              <div className="shapes">{` ${item.tools1.g1}`}</div>
              <div className="shapes">{` ${item.tools1.h1}`}</div>
              <div className="shapes">{` ${item.tools1.i1}`}</div>
            </div>
            <button className='btn hover:text-green-700 m-2 text-[30px] text-gray-900'
              onClick={()=> setExecute(true)}>
              {item.exec}
            </button>
            <div className={`arr ${item.bgAfter} `}>
            {execute && ( 
                    <>
                    <div className="shapes">{` ${item.tools2.a2}`}</div>
                    <div className="shapes">{` ${item.tools2.b2}`}</div>
                    <div className="shapes">{` ${item.tools2.c2}`}</div>
                    <div className="shapes">{` ${item.tools2.d2}`}</div>
                    <div className="shapes">{` ${item.tools2.e2}`}</div>
                    <div className="shapes">{` ${item.tools2.f2}`}</div>
                    <div className="shapes">{` ${item.tools2.g2}`}</div>
                    <div className="shapes">{` ${item.tools2.h2}`}</div>
                    <div className="shapes">{` ${item.tools2.i2}`}</div>
                  </>
             )}
            </div> 
          </section>
          <footer className='text-2xl'>
            <div className='btn bg-yellow-500 rounded-full'>{item.count}</div>
            <button className='btn bg-blue-700 text-white lg:hidden hover:shadow-blue-400'
            onClick={() => router.push(item.syntax)}>Syntax</button>
            <button className='btn bg-red-700 hover:shadow-red-400' 
            onClick={() => dispatch(item.prev)}>Prv</button>
            <button className='btn bg-green-700 hover:shadow-green-400' 
            onClick={() => dispatch(item.next)}>Nex</button>
          </footer>
        </main>
      )
    })}
    </Fragment>
  )
}

export default CardOne
