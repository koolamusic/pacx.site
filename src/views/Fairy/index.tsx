import { Fairy } from "./Fairy";
import { Overlay } from "./Overlay";
import { LogoIconGrayscaleDark } from "@/components/core/logo-gradient";

export function App() {
  return (
    <>
      <Fairy />
      <Overlay />
      <LogoIconGrayscaleDark
        h={"44px"}
        style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
      />
      {/* <Logo style={{ position: "absolute", bottom: 40, left: 40, width: 30 }} /> */}
    </>
  );
}

export default App;
