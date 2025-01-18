import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './1.Intro/HelloComponent'
import BasicCounterComponent from './2.BasicReact/1.CounterComponent/BasicCounterComponent'
import ConditionalRendering from './2.BasicReact/2.ConditionalRendering/ConditionalRendering'
import ListComponent from './2.BasicReact/3.ListComponent/ListComponent'
import MultiState from './2.BasicReact/4.MultipleStates/MultiState'
import MultipleState from './2.BasicReact/4.MultipleStates/MultipleState'
import HOComponentBeautiful from './2.BasicReact/5.HigherOrderComponent/HOComponentBeautiful'
import CricketNewsCompoent from './2.BasicReact/5.HigherOrderComponent/CricketNewsCompoent'
import FashionCOmpoent from './2.BasicReact/5.HigherOrderComponent/FashionCOmpoent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HelloComponent /> */}
      {/* <BasicCounterComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListComponent /> */}
      {/* <MultiState /> */}
      {/* <MultipleState /> */}

      <HOComponentBeautiful>
        <CricketNewsCompoent />
      </HOComponentBeautiful>

      <HOComponentBeautiful>
        <FashionCOmpoent />
      </HOComponentBeautiful>
    </>
  )
}

export default App
