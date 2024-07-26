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
        href="https://daccred.xyz"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        Pacx Labs
        <br /> Cairo scratch
      </a>
      <div
        style={{
          position: "absolute",
          top: "calc(100vh - 280px)",
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
          <Stack align={"center"}>
 

            <ContainerIntro />
          </Stack>
        </div>

        {/* --------- embed the mobile viewport -------------- */}
 
        <Stack display={{ base: "block", sm: "none" }}>
          <ContainerIntro />
        </Stack>
      </div>
      {/* <div
        className="show-xl big-shoulders-text-normal"
        style={{ position: "absolute", top: 40, left: 40, fontSize: "17px" }}
      >
        S.A.S —
      </div> */}
      <a
        href="https://github.com/daccred/sas"
        target={'_blank'}
        rel="noreferrer"
        className="big-shoulders-text-normal"
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "17px",
        }}
      >
        .github
      </a>
    </div>
  );
}
