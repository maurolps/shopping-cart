import { useGLTF } from "@react-three/drei";

export function Shoe3d() {
  const { nodes } = useGLTF("/nike.glb");

  return (
    <>
      {console.log(nodes)}

      <mesh
        geometry={nodes["Shoe-Shoe"].geometry}
        position={[0, 0, 0]}
        scale={[5, 5, 5]}
      >
        <meshPhongMaterial
          color={"#f2f2f2"}
          specular={"#71ff3d"}
          shininess={30}
        />
      </mesh>
      <mesh
        geometry={nodes["Shoe-Base"].geometry}
        position={[0, 0, 0]}
        scale={[5, 5, 5]}
      >
        <meshPhongMaterial color={"black"} specular={"black"} shininess={30} />
      </mesh>
    </>
  );
}
