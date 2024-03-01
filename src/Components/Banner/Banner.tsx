import { Canvas } from "@react-three/fiber";
import { Shoe3d } from "./Shoe3d";
import { OrbitControls } from "@react-three/drei";

export default function Banner() {
  return (
    <>
      <div className="grid grid-cols-2 gap-20  p-10 bg-slate-500 relative min-w-[900px]">
        <div className=" flex flex-col gap-6 max-w-lg justify-self-end ">
          <span className="font-revans text-7xl text-end z-10 text-white pointer-events-none select-none pr-6">
            Fitness, <br /> Meets Comfort.
          </span>
        </div>
        <div className="flex flex-col gap-6 relative justify-self-start">
          <div className="z-10 flex justify-center items-end h-full pointer-events-none select-none min-h-64">
            <span className="text-start text-sm max-w-sm text-text-variant ">
              Our mission is to elevate your every step, offering an extensive
              selection of footwear that merges fitness-forward trends with
              unparalleled comfort and quality.{" "}
              <button className="bg-call text-white text-[10px] font-bold w-fit px-1 pointer-events-auto">
                TAKE A LOOK
              </button>
            </span>
          </div>
          <div className="w-full h-full absolute aspect-square">
            <Canvas dpr={2} camera={{ position: [10, 5, 30], fov: 10 }}>
              <directionalLight
                position={[1, 10, 2]}
                color={"#00ccff"}
                intensity={1.5}
              />

              <Shoe3d />

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
          </div>
        </div>
      </div>
    </>
  );
}
