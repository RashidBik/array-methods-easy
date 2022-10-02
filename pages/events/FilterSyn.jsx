import { useRouter } from 'next/router'
import React from 'react'
// import { AppContext } from '../Play';

const FilterSyn = () => {
 const router =  useRouter();
  return (
    <div className='container'>
        <h1 className='head'>Array.prototype.filter()</h1>
      <div className='bg-gray-100 p-2'>
        <h1 className='text-center'>Syntax</h1>
        <div className='syntax'>
            <code className='font-black'>
            arr.filter(callbackFn, thisArg) <br/>
            arr.filter(function(element, index, array) { /* … */ }, thisArg)
            </code>
        </div>
        <div className='param mt-2'>
            <code>
                <h1 className=''>Parameter Description</h1>
                <h2>callbackFn</h2>
                Function is a predicate, to test each element of the array.
                 Return a value that coerces to true to keep the element,
                  or to false otherwise.
                The function is called with the following arguments:
                <h2>element</h2>
                The current element being processed in the array.
                <h2>index</h2>
                The index of the current element being processed in the array.
                <h2>array</h2>
                The array on which filter() was called.
                <h2>thisArg</h2> Optional
                Value to use as this when executing callbackFn.
            </code>
        </div>
        <div className='usage'>
         <h1>Definition and Usage</h1>
         <code>
          The filter() is an ECMAScript5 (ES5) feature
          The filter() method creates a new array filled with elements that pass a test provided by a function.
          The filter() method does not execute the function for empty elements.
          The filter() method does not change the original array.
         </code>
        </div>
      </div>
      <div className='got'>
        <button className='btn text-xl px-3 bg-yellow-500'
        onClick={() => router.push('../Play')}>Got it</button>
      </div>
    </div>
  )
}

export default FilterSyn
