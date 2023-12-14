import { HomeStar } from "../icons/home/HomeStar";
import { SortUp } from '../icons/sort/SortUp';
import { SortDown } from '../icons/sort/SortDown';

export const SortingBar = ({ query,inmuebles,inmueblesFiltered,itemPerPage,indexPage,activePages,indexPages,setIndexPage,setActivePages }) => {
  return (
    <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group btn-group-sm" role="group" aria-label="First group">
        <button type="button" class="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-truncate text-muted fw-bolder"><small><HomeStar strokeWidth={2} height={1} width={1} /> Más nuevo</small></button>
        <button type="button" class="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-truncate text-muted fw-bolder"><small><SortDown strokeWidth={2} /> Menor precio</small></button>
        <button type="button" class="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-truncate text-muted fw-bolder"><small><SortUp strokeWidth={2} /> Mayor precio</small></button>
      </div>
    </div>
  )
}