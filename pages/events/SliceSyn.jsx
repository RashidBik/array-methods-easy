import { useRouter } from 'next/router'
import React from 'react'
// import { AppContext } from '../Play';

const SliceSyn = () => {
    // const context = useContext(AppContext);
  const router = useRouter();
    return (
    <div className='container'>
        <h1 className='head'>Array.prototype.slice()</h1>
      <div className='bg-gray-100 p-2'>
        <h1 className='text-center'>Syntax</h1>
        <div className='syntax'>
            <code className='font-black'>
            arr.slice(start, end) <br/>
            Array.prototype.slice.call <code className='text-gray-500'>[// array-like object]</code>
            </code>
        </div>
        <div className='param mt-2'>
            <code>
                <h1 className=''>Parameter Description</h1>
                <h2>start</h2>
                Zero-based index at which to start extraction.
                <h2>end</h2>
                The limit index at which you end extraction.
                <h2>Array-like objects</h2>
                slice method can also be called
          to convert Array-like objects/collections
          to a new Array. You just bind the method 
          to the object. The arguments inside a function 
          is an example of an 'array-like object'. 
            </code>
        </div>
        <div className='usage'>
         <h1>Description</h1>
         <code>
         The slice() method is a copying 
         method. It does not alter this 
         but instead returns a shallow copy 
         that contains some of the same 
         elements as the ones from the 
         original array.
         </code>
        </div>
      </div>
      <div className='got'>
        <button className='btn text-xl px-3 bg-yellow-500'
        onClick={() => router.push('../Play')}>Updating Next One!!!</button>
      </div>
    </div>
  )
}

export default SliceSyn
