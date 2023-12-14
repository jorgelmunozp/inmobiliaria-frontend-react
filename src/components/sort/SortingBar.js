import { TbHomeStar } from "react-icons/tb";
import { HomeStar } from "../icons/home/HomeStar";
import { SortUp } from '../icons/sort/SortUp';
import { SortDown } from '../icons/sort/SortDown';
import { Star } from '../icons/star/Star';

export const SortingBar = ({ query,inmuebles,inmueblesFiltered,itemPerPage,indexPage,activePages,indexPages,setIndexPage,setActivePages }) => {
  return (
    <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group btn-group-sm" role="group" aria-label="First group">
        <button type="button" class="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-muted fw-bolder"><small><HomeStar strokeWidth={2} height={'1em'} width={'1em'} /> Más nuevo</small></button>
        <button type="button" class="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-muted fw-bolder"><small><SortDown strokeWidth={2} /> Menor Precio</small></button>
        <button type="button" class="button btn btn-outline-ligth border border-muted shadow-sm px-md-5 text-muted fw-bolder"><small><SortUp strokeWidth={2} /> Mayor Precio</small></button>
      </div>
    </div>
  )
}