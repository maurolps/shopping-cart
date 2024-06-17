import { Grid, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    ["Shoe-Base"]: THREE.Mesh;
    ["Shoe-Shoe"]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.MeshStandardMaterial;
  };
};

export default function Shoe3d() {
  const { nodes } = useGLTF("/nike.glb") as GLTFResult;
  const base = nodes["Shoe-Base"];
  const shoe = nodes["Shoe-Shoe"];

  return (
    <>
      <Canvas dpr={2} camera={{ position: [10, 5, 30], fov: 10 }}>
        <directionalLight
          position={[1, 10, 2]}
          color={"#00ccff"}
          intensity={1.5}
        />
        <group dispose={null} rotation={[-0.08, 0, 0]}>
          <group scale={[0.08, 0.08, 0.08]} position={[0, 1, 0]}>
            <mesh geometry={base.geometry} material={base.material} />
            <mesh geometry={shoe.geometry} material={shoe.material} />
          </group>
          <Grid
            args={[0.2, 0.2]}
            position={[0, -0.6, 0]}
            rotation={[0, 0, 0]}
            cellSize={0.8}
            cellThickness={1}
            cellColor={"#8b8b8b"}
            sectionSize={2}
            sectionThickness={1}
            sectionColor={"#ff6666"}
            fadeDistance={38}
            fadeStrength={0.2}
            infiniteGrid={true}
          />
        </group>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={0}
          maxAzimuthAngle={Math.PI / 1}
          minAzimuthAngle={-Math.PI / 1}
        />
      </Canvas>
    </>
  );
}
