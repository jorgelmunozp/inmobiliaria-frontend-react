export const Id = ({ strokeWidth='2', width='1em', height='1em'}) => {
    return (
        <span>
            <svg stroke="currentColor" fill="none" strokeWidth={strokeWidth} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                <path d="M6 18h12"></path>
                <path d="M6 14h12"></path>
                <rect width="12" height="12" x="6" y="10"></rect>
            </svg>
            {/* <svg stroke="currentColor" fill="currentColor" strokeWidth={strokeWidth} viewBox="0 0 16 16" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1v4h4v1h-4v4h4v1h-4v4h-1v-4H6v4H5v-4H1v-1h4V6H1V5h4V1h1v4h4V1h1zM6 6v4h4V6H6z"></path>
            </svg> */}
        </span>
    );
}