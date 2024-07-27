// import LogoComponent from "@/components/core/logo";
// import Heading from "@/theme/components/heading";
import { Stack, chakra } from '@chakra-ui/react'
import { ContainerIntro } from './Card'

export function Overlay() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 'calc(100vh - 280px)',
          left: '50%',
          width: '100%',
          transform: 'translate3d(-50%,-50%,0)'
        }}
      >
        <div
          className="show-xl "
          style={{
            margin: 0,
            padding: 0,
            fontSize: '20em',
            fontWeight: 500
            // letterSpacing: "0.05em",
          }}
        >
          <Stack align={'center'}>
            <ContainerIntro />
          </Stack>
        </div>

        {/* --------- embed the mobile viewport -------------- */}

        <Stack display={{ base: 'block', sm: 'none' }} w={'full'}>
          <ContainerIntro />
        </Stack>
      </div>

      <a
        href="https://github.com/pacxlab"
        target={'_blank'}
        rel="noreferrer"
        className="big-shoulders-text-normal"
        style={{
          position: 'absolute',
          bottom: 10,
          right: 40,
          fontSize: '17px'
        }}
      >
        .github
      </a>
    </div>
  )
}
