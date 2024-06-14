import { Grid, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Shoe-Base"]: THREE.Mesh;
    ["Shoe-Shoe"]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.MeshStandardMaterial;
  };
};

export function Shoe3d() {
  const { nodes } = useGLTF("/nike.glb") as GLTFResult;
  const base = nodes["Shoe-Base"];
  const shoe = nodes["Shoe-Shoe"];

  return (
    <>
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
    </>
  );
}
