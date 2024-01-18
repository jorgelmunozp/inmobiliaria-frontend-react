export const Dollar = ({ color="currentColor", strokeWidth='0', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke={color} fill={color} strokeWidth={strokeWidth} viewBox="0 0 256 256" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path d="M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z"></path>
            </svg>
        </span>
    );
}