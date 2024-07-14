// import LogoComponent from "@/components/core/logo";
import LogoGradientComponent from "@/components/core/logo-gradient";
// import Heading from "@/theme/components/heading";
import { Stack, chakra } from "@chakra-ui/react";
import { ContainerIntro } from "./Card";

export function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        className="big-shoulders-text-normal"
        href="https://daccred.co"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        Immutable Labs
        <br />
        & Research
      </a>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%,-50%,0)",
        }}
      >

        <div
          className="show-xl "
          style={{
            margin: 0,
            padding: 0,
            fontSize: "20em",
            fontWeight: 500,
            // letterSpacing: "0.05em",
          }}
        >
          <Stack align={'center'} >

            <LogoGradientComponent />
            <chakra.h2 color={'#ddd'} letterSpacing={3} fontSize={'4rem'} textTransform={'uppercase'} fontWeight={'700'} mt={0}>
              Attestation Service
            </chakra.h2>

            <ContainerIntro />
          </Stack>

        </div>
 
 {/* --------- embed the mobile viewport -------------- */}
        <h1
          className="show-md big-shoulders-text-normal"
          style={{
            margin: 0,
            padding: 0,
            fontWeight: 500,
            // lineHeight: "15rem",
          }}
        >
          <Stack>

            <LogoGradientComponent />
            <chakra.h1 fontSize={'2.75rem'} textTransform={'uppercase'} fontWeight={'normal'} mt={-2}>
              Attestation Service
            </chakra.h1>

          </Stack>


        </h1>
        <Stack display={{ base: 'block', sm: 'none'}}>

        <ContainerIntro />
        </Stack>

      </div>
      <div
        className="big-shoulders-text-normal"
        style={{ position: "absolute", top: 40, left: 40, fontSize: "17px" }}
      >
        S.A.S —
      </div>
      <div
        className="big-shoulders-text-normal"
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "17px",
        }}
      >
        .github
      </div>
    </div>
  );
}
