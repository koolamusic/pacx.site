import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, softShadows, Shadow } from "@react-three/drei"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"
// import { PlaneBufferGeometry, ShadowMaterial } from "three"

// const planeBufferGeometry = new PlaneBufferGeometry()
// const shadowMaterial = new ShadowMaterial()



export const MainRender = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach="background" args={["#f0f0f0"]} />
    <fog attach="fog" args={["#f0f0f0", 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
      <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </ScrollControls>
    {/* <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
      <planeBufferGeometry args={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.75} />
    </mesh> */}
    {/* <mesh
  visible
  geometry={new THREE.PlaneBufferGeometry(10, 10, 1, 1)}
  material={new THREE.ShadowMaterial({ color: new THREE.Color('hotpink'), opacity: 0.75, transparent: true })}
/> */}
    {/* <softShadows size={40} samples={16} /> */}
    <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
      
    </EffectComposer>
  </Canvas>
)



function Model(props: any) {
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