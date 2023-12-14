export const Dash = ({ strokeWidth='0', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 12.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z"></path>
            </svg>
        </span>
    );
}