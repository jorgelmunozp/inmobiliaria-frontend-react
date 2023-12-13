export const Id = ({ strokeWidth='2', width='1em', height='1em'}) => {
    return (
        <span>
            <svg stroke="currentColor" fill="none" strokeWidth={strokeWidth} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 17v-10l7 10v-10"></path>
                <path d="M15 17h5"></path>
                <path d="M17.5 10m-2.5 0a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0"></path>
            </svg>
            {/* <svg stroke="currentColor" fill="currentColor" strokeWidth={strokeWidth} viewBox="0 0 16 16" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1v4h4v1h-4v4h4v1h-4v4h-1v-4H6v4H5v-4H1v-1h4V6H1V5h4V1h1v4h4V1h1zM6 6v4h4V6H6z"></path>
            </svg> */}
        </span>
    );
}