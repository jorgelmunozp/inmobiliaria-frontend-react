export const HomeQuestion = ({ color="currentColor", strokeWidth='2', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke={color} fill="none" strokeWidth={strokeWidth} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428"></path>
                <path d="M19 22v.01"></path>
                <path d="M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
            </svg>
        </span>
    );
}