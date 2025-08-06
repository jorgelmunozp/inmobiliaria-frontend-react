export const HomeSimple = ({ color="currentColor", strokeWidth='0', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke={color} fill={color} strokeWidth={strokeWidth} viewBox="0 0 24 24" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19Z"></path>
            </svg>
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="7" viewBox="0 0 256 256" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg"><path d="M217.47,105.23l-80-75.49-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V115.55A14.06,14.06,0,0,0,217.47,105.23ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z"></path></svg> */}
        </span>
    );
}
export default HomeSimple;