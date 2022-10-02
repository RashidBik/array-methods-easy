import React, { useReducer } from 'react'
import CardOne from './events/CardOne'
import useMediaQuery from  '../components/hooks/useMediaQuery';
import FilterSyn from './events/FilterSyn';
import ReverseSyn from './events/ReverseSyn';
import SliceSyn from './events/SliceSyn'
import Splice from './events/Splice';

const shapes = {
   filter: [
    {
      name: 'Filter',
      bgBefor: 'bg-white',
      count: 1,
      syntax: 'events/FilterSyn',
      next: 2,
      prev: 1,
      exec: '.filter(◻️)',
      tools1: {
        a1: '🔴',
        b1: '🟡',
        c1: '🟢',
        d1: '🔶',
        e1: '🟥',
        f1: '🔷',
        g1: '🟥',
        h1: '🟨',
        i1: '🟧',
      },
      bgAfter: 'bg-white',
      tools2: {
        a2: '🟥',
        b2: '🟥',
        c2: '🟨',
        d2: '🟧',
        e2: '',
        f2: '',
        g2: '',
        h2: '',
        i2: '',
        
      },
    }
  ],
   reverse: [
    {
      name: 'Reverse',
      bgBefor: 'bg-white',
      count: 2,
      syntax: 'events/ReverseSyn',
      exec: '.Reverse()',
      next: 3,
      prev: 1,
      tools1: {
        a1: '🔴',
        b1: '🔴',
        c1: '🔴',
        d1: '🟠',
        e1: '🟠',
        f1: '🟠',
        g1: '🟡',
        h1: '🟡',
        i1: '🟡',
      },
      bgAfter: 'bg-white',
      tools2: {
        a2: '🟡',
        b2: '🟡',
        c2: '🟡',
        d2: '🟠',
        e2: '🟠',
        f2: '🟠',
        g2: '🔴',
        h2: '🔴',
        i2: '🔴',
        
      },
    }
  ],
   slice: [
    {
      name: 'Slice',
      bgBefor: 'bg-white',
      count: 3,
      syntax: 'events/SliceSyn',
      exec: '.Slice(1,6)',
      next: 4,
      prev: 2,
      tools1: {
        a1: '🔷',
        b1: '🔴',
        c1: '🔴',
        d1: '🔴',
        e1: '🔴',
        f1: '🔴',
        g1: '🟥',
        h1: '🟥',
        i1: '🟥',
      },
      bgAfter: 'bg-white',
      tools2: {
        a2: '🔴',
        b2: '🔴',
        c2: '🔴',
        d2: '🔴',
        e2: '🔴',
        f2: '',
        g2: '',
        h2: '',
        i2: '',
        
      },
    }
  ],
  splice: [
    {
      name: 'Splice',
      bgBefor: 'bg-white',
      count: 4,
      syntax: '',
      exec: '',
      next: 5,
      prev: 3,
      tools1: {
        a1: '?',
        b1: '?',
        c1: '?',
        d1: '?',
        e1: '?',
        f1: '?',
        g1: '?',
        h1: '?',
        i1: '?',
      },
      bgAfter: 'bg-white',
      tools2: {
        a2: '?',
        b2: '?',
        c2: '?',
        d2: '?',
        e2: '?',
        f2: '?',
        g2: '?',
        h2: '?',
        i2: '?',
        
      },
    }
  ]
}
let initialState= {
  play: shapes.filter,
  note: <FilterSyn />
};
const reducer = (state, action) => {
  switch (action) {
    case 2:
          return {...state,
            play: shapes.reverse,
            note: <ReverseSyn />}
    case 3:
          return {...state, 
            play: shapes.slice,
            note: <SliceSyn /> } 
    case 4:
          return {...state, 
            play: shapes.splice,
            note: <Splice /> } 
    default:
          return {...state,
            play: shapes.filter,
            note: <FilterSyn />}
  }
}

const Slice = () => {
  const isBreakpoint = useMediaQuery(768);
  const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div className='md:flex md:relative'>
      <CardOne shapes={state.play} dispatch={dispatch}/>
      {
        isBreakpoint  ? ( <div className='md:w-[60%] absolute right-0'>
        {state.note} 
      </div>)
        : ''
      }
    </div>
  )
}

export default Slice
