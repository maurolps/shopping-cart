import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const Shoe3d = lazy(() => import("./Shoe3d"));

// Prevent THREE warnings, adapted from mrdoob
// discussion: https://github.com/mrdoob/three.js/pull/5791
const _consoleLog = console.log;
console.log = function(...args) {
  if (typeof args[0] === "string" && args[0].substring(0, 5) === "THREE") {
    return;
  }
  _consoleLog(...args);
};

export default function Banner() {
  return (
    <>
      <div className="grid grid-cols-2 p-6 gap-2  relative max-w-screen-lg mx-auto bg-gradient-to-r from-primary via-slate-500 to-slate-500">
        <div className="flex max-w-lg justify-self-end items-center ">
          <span className="font-revans text-4xl sm:text-5xl lg:text-7xl text-end z-10 text-white pointer-events-none select-none ">
            Fitness, <br /> Meets <br /> Comfort.
          </span>
        </div>
        <div className="relative">
          <div className="w-48 sm:w-64 min-[800px]:w-72 lg:w-80 aspect-[3/2] absolute top-5 left-1/2 right-1/2 transform -translate-x-1/2 ">
            <Suspense fallback={""}>
              <Shoe3d />
            </Suspense>
          </div>
          <div className="min-h-56 sm:min-h-60 lg:min-h-64 z-10 flex justify-center items-end pointer-events-none select-none">
            <span className="text-start text-[10px] min-[375px]:text-xs sm:text-sm max-w-sm text-text-variant ">
              Our mission is to elevate your every step, offering an extensive
              selection of footwear that merges fitness-forward trends with
              unparalleled comfort and quality. {" "}
              <span className="bg-call text-white text-[9px] font-bold w-fit px-1 pointer-events-auto">
                <Link to="marketplace"> TAKE A LOOK </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
