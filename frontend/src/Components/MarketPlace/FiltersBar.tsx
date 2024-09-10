
import { svgEdit } from "../../assets/svgs";

type FiltersBarProps = {
  filters: {

    category: string,
    priceMin: number,
    priceMax: number,
  }
  toggleDrawer: (status: boolean) => void;
}

export default function FiltersBar(props: FiltersBarProps) {
  const { category, priceMin, priceMax } = props.filters;
  const toggleDrawer = props.toggleDrawer;
  return (
    <div className='flex gap-1 pt-1 text-xs text-text-variant italic'>
      <div className="sm:hidden  cursor-pointer flex items-end" onClick={() => toggleDrawer(true)}>
        <div className="flex h-full">{svgEdit}</div>
        Filters:
      </div>
      <div className="hidden sm:flex items-end ">
        Filters:
      </div>
      <div className="flex items-end">
        <span className="text-text-variant text-xs"><em> {category}, {priceMin} ~ {priceMax} USD</em></span>
      </div>
    </div>
  )
}

