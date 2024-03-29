export const Bed = ({ className='', color="currentColor", strokeWidth='32', width='1', height='1'}) => {
    return (
        <span>
            <svg className={className} stroke={color} fill={color} strokeWidth="0" viewBox="0 0 512 512" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112"></path>
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16m0 0v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16"></path>
            </svg>
        </span>
    );
}