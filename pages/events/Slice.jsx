import React from 'react'
import { useContext } from 'react'
import CardOne from '../CardOne'
import { AppContext } from '../Play'

const filter = [
  {
    name: 'Filter',
    bgBefor: 'bg-white',
    count: 1,
    syntax: 'filterSyn',
    next: '../components/Reverse/Reverse',
    prev: '',
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
]
const reverse = [
  {
    name: 'Reverse',
    bgBefor: 'bg-white',
    count: 2,
    syntax: 'reverseSyn',
    exec: '.Reverse()',
    next: 'slice',
    prev: 'filter',
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
]
const slice = [
  {
    name: 'Slice',
    bgBefor: 'bg-white',
    count: 3,
    syntax: 'sliceSyn',
    exec: '.Slice(1,6)',
    next: 'splice',
    prev: 'reverse',
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
]
const Slice = () => {
  const [state, dispatch] = useContext(AppContext);
  console.log(AppContext);
  return (
    <div>
      {/* <CardOne shapes={state} /> */}
    </div>
  )
}

export default Slice
