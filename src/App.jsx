import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Widget from './components/Widget'
import IframeRenderer from './iframe/IframeRenderer'
import ShadowWrapper from './shadow/ShadowWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Widget/>
      <IframeRenderer>
        <Widget />
      </IframeRenderer>
      <ShadowWrapper>
        <Widget />
      </ShadowWrapper>
    </>
  )
}

export default App
