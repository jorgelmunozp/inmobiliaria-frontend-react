import { SortUpAlpha } from "../../icons/sort/SortUpAlpha";
import { SortUpNum } from '../../icons/sort/SortUpNum';
import { SortDownNum } from '../../icons/sort/SortDownNum';

export const SortingBar = ({ setSortBy }) => {
  return (
    <div id="sortingBar" className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group btn-group-sm" role="group" aria-label="First group">
        <button onClick={() => setSortBy(1)} type="button" className="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-truncate text-muted fw-bolder"><small><SortUpAlpha strokeWidth={2} height={1} width={1} /> Nombre</small></button>
        <button onClick={() => setSortBy(2)} type="button" className="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-truncate text-muted fw-bolder"><small><SortUpNum strokeWidth={2} /> Menor precio</small></button>
        <button onClick={() => setSortBy(3)} type="button" className="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-truncate text-muted fw-bolder"><small><SortDownNum strokeWidth={2} /> Mayor precio</small></button>
      </div>
    </div>
  )
}