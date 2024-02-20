import { Canvas } from "@react-three/fiber";
import { Shoe3d } from "../Shoe3d";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Banner() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4  p-10 bg-foreground ">
        <div className=" flex flex-col gap-6 max-w-lg ">
          <span className="font-revans text-7xl text-start">
            Fitness, <br /> Meets Comfort.
          </span>
          <hr />
          <span className="text-start text-sm max-w-sm text-text-variant">
            Our mission is to elevate your every step, offering an extensive
            selection of footwear that merges fitness-forward trends with
            unparalleled comfort and quality.
          </span>
          <button className="bg-call text-white font-bold w-fit p-2">
            SHOP NOW
          </button>
        </div>
        <div className="max-w-sm">
          <Canvas dpr={2}>
            <Environment preset="studio" />
            <directionalLight position={[1, 10, 2]} />

            <Shoe3d />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
}
