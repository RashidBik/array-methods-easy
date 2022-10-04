import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Learn = () => {
  // const navigate = useNavigate();
  return (
    <div className='container md:px-12 lg:px-40 lg:text-xl'>
      <h1>JavaScript Array Methods</h1>
        <div className='p-2 bg-gray-100'>
          <div className='text-green-300 font-black bg-green-800 rounded-lg text-left p-1'>
            An array is a special variable, which can 
            hold more than one value.
            An array can hold many values under a 
            single name, and you can access the 
            values by referring to an index number.
          </div>
          <h2 className='m-2 text-center'>Creating an Array</h2>
          <div className='text-left'>
           <div className='p-2 pt-0'>
           Using an array literal is the easiest 
           way to create a JavaScript Array.
           Array methods and empty slots
           Empty slots in sparse arrays behave 
           inconsistently between array methods. 
           Generally, the older methods will skip 
           empty slots, while newer ones treat them 
           as undefined.
           Among methods that iterate through multiple 
           elements, the following do an in check 
           before accessing the index and do not 
           conflate empty slots with undefined:
           </div>
          <div className='syntax'>
            <h2>lastIndexOf()</h2>
            <h2>reduceRight()</h2>
            <h2>copyWithin()</h2>
            <h2>concat()</h2>
            <h2>every() </h2>
            <h2>filter()</h2>
            <h2>flat()</h2>
            <h2>flatMap()</h2>
            <h2>forEach()</h2>
            <h2>indexOf()</h2>
            <h2>map()</h2>
            <h2>reduce()</h2>
            <h2>reverse()</h2>
            <h2>slice()</h2>
            <h2>some()</h2>
            <h2>sort()</h2>
            <h2>splice()</h2>
          </div>
          <div className="p-2">
            For exactly how they treat empty 
            slots, see the page for each method.
            These methods treat empty slots as if 
            they are undefined:
          </div>
          <div className="syntax">
            <h2>toLocaleString()</h2>
            <h2>entries()</h2>
            <h2>fill()</h2>
            <h2>find()</h2>
            <h2>findIndex()</h2>
            <h2>findLast()</h2>
            <h2>findLastIndex()</h2>
            <h2>group()</h2>
            <h2>groupToMap()</h2>
            <h2>includes()</h2>
            <h2>join()</h2>
            <h2>keys()</h2>
            <h2>values()</h2>
          </div>
          <div className='p-2'>
            <h2 className='my-2 text-center'>Copying methods and mutating methods</h2>
            Some methods do not mutate the existing
            array that the method was called on, 
            but instead return a new array. 
            They do so by first accessing this.
            constructor[Symbol.species] to determine 
            the constructor to use for the new array. 
            The newly constructed array is then 
            populated with elements. The copy always 
            happens shallowly — the method never 
            copies anything beyond the initially 
            created array. Elements of the original 
            array(s) are copied into the new array 
            as follows:
            <div>
            <b>Objects:</b> the object reference is copied into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
            Primitive types such as strings, numbers and booleans (not String, Number, and Boolean objects): their values are copied into the new array.
            Other methods mutate the array that the method was called on, in which case their return value differs depending on the method: sometimes a reference to the same array, sometimes the length of the new array.
            The following methods create new arrays with @@species:
            </div>
          </div>
          <div className="syntax">
            <h2>flatMap()</h2>
            <h2>concat()</h2>
            <h2>filter()</h2>
            <h2>flat()</h2>
            <h2>map()</h2>
            <h2>slice()</h2>
            <h2>splice() </h2>
          </div>
          <div className="p-2">
          <b>Note that group() and groupToMap()</b> 
          do not use @@species to create new 
          arrays for each group entry, but 
          always use the plain Array constructor. 
          Conceptually, they are not copying 
          methods either.
          The following methods mutate the 
          original array:
          </div>
            <div className="syntax">
            <h2>copyWithin()</h2>
            <h2>fill()</h2>
            <h2>pop()</h2>
            <h2>push()</h2>
            <h2>reverse()</h2>
            <h2>shift()</h2>
            <h2>sort()</h2>
            <h2>splice()</h2>
            <h2>unshift()</h2>
          </div>
            <h2 className='text-center mt-2'>Generic array methods</h2>
            <div className="p-2">
Array methods are always generic — they 
do not access any internal data of the 
array object. They only access the array 
elements through the length property and 
the indexed elements. This means that they 
can be called on array-like objects as well.
            </div>
            <div className='p-2'>
             <h2 className='text-center'>Array</h2>
The Array object, as with arrays in other 
programming languages, enables storing a 
collection of multiple items under a single 
variable name, and has members for 
performing common array operations.

</div>
<h2>Description</h2>
<div className="bg-gray-200 p-2 rounded-md font-mono">

In JavaScript, arrays are not primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the arrays length property minus 1
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
</div>

</div>
        </div>
        <div className="p-4 flex justify-center">
          <button className='btn bg-yellow-500 text-xl px-6 hover:shadow-yellow-100'
          onClick={() => navigate('/')}>Got It</button>
        </div>
    </div>
  )
}

export default Learn
