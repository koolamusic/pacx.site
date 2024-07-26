import GTLFConvas from './GTLF'
import { Fairy } from "./Fairy";
import { Overlay } from "./Overlay";
import { LogoIconGrayscaleDark } from "@/components/core/logo-gradient";
import dynamic from 'next/dynamic';

const Convas = dynamic(() => import("./GTLF"), {
  ssr: false,
});

export function App() {
  return (
    <>
    {/* <GTLFConvas /> */}
    <Convas />
    {/* <Fairy /> */}
      {/* <Overlay />
      <LogoIconGrayscaleDark
        h={"44px"}
        style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
      /> */}
      {/* <Logo style={{ position: "absolute", bottom: 40, left: 40, width: 30 }} /> */}
    </>
  );
}

export default App;
