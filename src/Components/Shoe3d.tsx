import { useGLTF, useTexture } from "@react-three/drei";

export function Shoe3d() {
  const { nodes } = useGLTF("/shoe3d.glb");
  // const beauty = useTexture("/nike_beauty.png");
  // const emission = useTexture("/nike_emission.png");
  return (
    <>
      {/* {console.log(nodes.Nike)} */}
      <mesh
        geometry={nodes.Nike.geometry}
        scale={[0.2, 0.2, 0.2]}
        // material={nodes["Nike-primary"].material}
      >
        {/* <meshStandardMaterial map={beauty} emissiveMap={emission} /> */}
      </mesh>
    </>
  );
}
