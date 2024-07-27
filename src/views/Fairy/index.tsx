import GTLFConvas from './GTLF'
import { Fairy } from './Fairy'
import { Overlay } from './Overlay'
import dynamic from 'next/dynamic'
import LogoComponent from '@/components/core/logo'

const Convas = dynamic(() => import('./GTLF'), {
  ssr: false
})

export function App() {
  return (
    <>
      <GTLFConvas />
      <Overlay />
      <a
        className="big-shoulders-text-normal"
        href="https://pacx.xyz"
        target="_blank"
        rel="noopener noreferrer"
        // style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        <LogoComponent
          h={'44px'}
          marginX={'auto'}
          // zIndex={99}
          w={'full'}
          // style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
        />
      </a>
    </>
  )
}

export default App
