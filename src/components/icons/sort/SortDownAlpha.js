export const SortDownAlpha = ({ strokeWidth='0', width='1', height='1'}) => {
    return(
        <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={strokeWidth} version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
            <polygon fill="#546E7A" points="38,33 38,5 34,5 34,33 28,33 36,43 44,33"></polygon>
                 <g fill="#5285c5">
                    <path d="M16.8,40h-5.3l-1.1,3H6.9l5.7-15.2h2.9L21.1,43h-3.2L16.8,40z M12.2,37.3H16l-1.9-5.7L12.2,37.3z"></path>
                    <path d="M12.4,17.7H20v2.5H8.4v-1.9L16,7.5H8.4V5h11.4v1.7L12.4,17.7z"></path>
                </g>
            </svg>
        </span>
    )
}
