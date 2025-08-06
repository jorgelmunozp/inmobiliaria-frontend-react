export const Category = ({ color="currentColor", strokeWidth='2', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke={color} fill="none" strokeWidth={strokeWidth} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
                <path d="M13 7l0 .01"></path>
                <path d="M17 7l0 .01"></path>
                <path d="M17 11l0 .01"></path>
                <path d="M17 15l0 .01"></path>
            </svg>
        </span>
    );
}
export default Category;