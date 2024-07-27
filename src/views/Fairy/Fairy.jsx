import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export function Fairy() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
      <FloatingStars />
    </Canvas>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5135), { radius: 0.33 }))
  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 75
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#aaffaa" size={0.0031416} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function FloatingStars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(1750), { radius: 5 }))
  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#aaff00" size={0.0041416} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default Fairy
