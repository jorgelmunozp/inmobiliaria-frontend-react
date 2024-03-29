export const Type = ({ color="currentColor", strokeWidth='0', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke={color} fill={color} strokeWidth={strokeWidth} viewBox="0 0 24 24" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 010-5 2.5 2.5 0 010 5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"></path>
            </svg>
        </span>
    );
}