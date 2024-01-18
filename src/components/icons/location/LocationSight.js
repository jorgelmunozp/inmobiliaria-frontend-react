export const LocationSight = ({ color="currentColor", strokeWidth='0', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke={color} fill="none" strokeWidth={strokeWidth} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
                <path d="M12 2l0 2"></path><path d="M12 20l0 2"></path>
                <path d="M20 12l2 0"></path><path d="M2 12l2 0"></path>
            </svg>
        </span>
    );
}