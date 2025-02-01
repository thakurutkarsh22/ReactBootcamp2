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
import CallingApi from './2.BasicReact/6.CallingAPi/CallingAPI'
import Parent from './3.Communication/3.ChildToChild/Parent'
import LifecycleComponent from './4.LifecycleOfComponent/LifecycleComponent.js'
import MountingUnmountingParent from './4.LifecycleOfComponent/MountingAndUnmountingExample/MountingUnmountingParent.js'
import UseEffectPhases from './5.UseEffect/UseEffectPhases.js'
import PokemonAPI from './6.PokemonAPI/PokemonAPI.js'
import DigitalClock from './7.DigitalClock/DigitalClock.js'
import Forms from './8.Forms/Forms.js'
import UseRefHook from './9.useRefHook/useRefHook.js'
import ShowPrevValueWithLatest from './9.useRefHook/Usage/showPrevValueWithLatest.js'
import InputComponent from './9.useRefHook/Usage/InputComponent.js'
import UseReducerCOunter from './10.useReducerHook/Usage/UseReducerCOunter.js'
// import Parent from './3.Communication/2.ChildToParent/Parent'
// import Parent from './3.Communication/1.ParentToChild/Parent'

function App() {
  const [count, setCount] = useState(0)
  const [showUseEffectPhases, setUseEffectPhases] = useState(true);

  return (
    <>
      {/* <HelloComponent /> */}
      {/* <BasicCounterComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListComponent /> */}
      {/* <MultiState /> */}
      {/* <MultipleState /> */}

      {/* <HOComponentBeautiful>
        <CricketNewsCompoent />
      </HOComponentBeautiful>

      <HOComponentBeautiful>
        <FashionCOmpoent />
      </HOComponentBeautiful> */}

      {/* <CallingApi /> */}

      {/* -- - - - - - - - - - - COMMUNICATION - - - - - - - - - - - - -  */}
      {/* <Parent /> */}
      {/* <Parent /> */}
      {/* <Parent /> */}


      {/* --------------------- LIFE CYCLE OF COMPONENT --------------- */}
      {/* <LifecycleComponent /> */}
      {/* <MountingUnmountingParent /> */}

{/* 
      {showUseEffectPhases ? <UseEffectPhases /> : null}
      <br />
      <button onClick={() => {
        setUseEffectPhases(old => !old)
      }}>show/hide UseEffectPhases</button> */}

      {/* <PokemonAPI /> */}

      {/* {showUseEffectPhases ? <DigitalClock />: null}

      <button onClick={() => {
        setUseEffectPhases(old => !old)
      }}>show/hide UseEffectPhases</button>  */}

      {/* <Forms /> */}

      {/* <UseRefHook /> */}

      {/* <ShowPrevValueWithLatest /> */}
      
      {/* <InputComponent label={"testing"} /> */}
      <UseReducerCOunter />



    </>
  )
}

export default App
