import Slider from "@mui/material/Slider";

export default function Siderbar() {
  return (
    <>
      <div className="flex flex-col w-full gap-10 mt-[40px]">
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-sm text-text font-semibold uppercase">
              Category
            </span>
            <hr />
          </div>
          <div className="flex flex-col text-sm gap-1 cursor-pointer ">
            <div className="flex justify-between">
              <span>All</span>
              <span className="text-text-variant">30</span>
            </div>
            <div className="flex justify-between">
              <span>Running</span>
              <span className="text-text-variant">10</span>
            </div>
            <div className="flex justify-between">
              <span>Trainning</span>
              <span className="text-text-variant">10</span>
            </div>
            <div className="flex justify-between">
              <span>Walking</span>
              <span className="text-text-variant">10</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-sm text-text font-semibold uppercase">
              Price
            </span>
            <hr />
          </div>
          <div className="flex justify-center">
            <Slider
              value={[100, 300]}
              size="small"
              sx={{ width: "80%" }}
              valueLabelDisplay="auto"
              min={0}
              max={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
