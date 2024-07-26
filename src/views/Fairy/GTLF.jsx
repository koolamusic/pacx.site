import { useEffect } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, meshBounds as mesh, useScroll, softShadows, ScrollControls } from "@react-three/drei"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"
import { PlaneBufferGeometry, Mesh, ShadowMaterial } from "three"

import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls, Mesh, PlaneBufferGeometry, ShadowMaterial })


export const MainRender = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach="background" args={["#dfdfdf"]} />
    <fog attach="fog" args={["#f0f0f0", 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <ScrollControls damping={0.33} maxSpeed={0.5} pages={2}>
      <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </ScrollControls>
    <mesh geometry={PlaneBufferGeometry} material={ShadowMaterial} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
      {/* <planeBufferGeometry args={[10, 10, 1, 1]} /> */}
      {/* <shadowMaterial transparent opacity={0.75} /> */}
  {/* <softShadows size={40} samples={16} /> */}
    </mesh>
    {/* <mesh
  visible
  geometry={new THREE.PlaneBufferGeometry(10, 10, 1, 1)}
  material={new THREE.ShadowMaterial({ color: new THREE.Color('hotpink'), opacity: 0.75, transparent: true })}
/> */}
    <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
      
    </EffectComposer>
  </Canvas>
)



function Model(props) {
  const scroll = useScroll()
  const { nodes, materials, animations } = useGLTF("/jump-transformed.glb")
  const { ref, actions } = useAnimations(animations)
  useEffect(() => {
    if (actions.jump) {
      actions.jump.reset().play().paused = true
    }
  }, [actions.jump])
  useFrame(() => {
    if (actions.jump) {
      actions.jump.time = actions.jump.getClip().duration * scroll.offset
    }
  })
  return (
    <group {...props} ref={ref}>
      <primitive object={nodes?.mixamorigHips} />
      <skinnedMesh 
        castShadow 
        receiveShadow 
        geometry={nodes?.Ch03?.geometry} 
        material={materials?.Ch03_Body} 
        skeleton={nodes?.Ch03?.skeleton} 
      />
    </group>
  )
}

export default MainRender