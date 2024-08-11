import { Link } from "react-router-dom";
import { svgRotate } from "../../assets/svgs";
import { Suspense, lazy } from "react";

const Shoe3d = lazy(() => import("./Shoe3d"));

// Prevent THREE warnings, adapted from mrdoob
// discussion: https://github.com/mrdoob/three.js/pull/5791
const _consoleLog = console.log;
console.log = function (...args) {
  if (typeof args[0] === "string" && args[0].substring(0, 5) === "THREE") {
    return;
  }
  _consoleLog(...args);
};

export default function Banner() {
  return (
    <>
      <div className="grid grid-cols-2 gap-20  p-10  relative min-w-[900px] max-w-screen-lg mx-auto bg-gradient-to-r from-primary via-slate-500 to-slate-500">
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
              <Link to="marketplace">
                <button className="bg-call text-white text-[10px] font-bold w-fit px-1 pointer-events-auto">
                  TAKE A LOOK
                </button>
              </Link>
            </span>
          </div>
          <div className="w-full h-full absolute aspect-square">
            <Suspense fallback={""}>
              <Shoe3d />
            </Suspense>
          </div>
          <div className="pointer-events-none top-1 right-10 absolute aspect-square">
            {svgRotate}
          </div>
        </div>
      </div>
    </>
  );
}
