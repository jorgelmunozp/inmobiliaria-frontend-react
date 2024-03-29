export const Area = ({ className='', color="currentColor", strokeWidth='0', width='1', height='1'}) => {
    return (
        <span>
            <svg className={className} stroke={color} fill={color} strokeWidth={strokeWidth} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={width + 'em'} height={height + 'em'}>
                <path fill={color} d="M5,19V5.707l-.146.147a.5.5,0,0,1-.708-.708l1-1a.5.5,0,0,1,.708,0l1,1a.5.5,0,0,1-.708.708L6,5.707V19H19.293l-.147-.146a.5.5,0,0,1,.708-.708l1,1a.5.5,0,0,1,0,.708l-1,1a.5.5,0,0,1-.708-.708L19.293,20H6v.5a.5.5,0,0,1-1,0V20H4.5a.5.5,0,0,1,0-1ZM14.332,5.454l5.445,3.63a.5.5,0,1,1-.554.832L19,9.768V15.75A1.252,1.252,0,0,1,17.75,17H9.25A1.252,1.252,0,0,1,8,15.75V9.768l-.223.148a.5.5,0,0,1-.554-.832l5.445-3.63A1.5,1.5,0,0,1,14.332,5.454ZM18,9.1,13.777,6.286a.5.5,0,0,0-.554,0L9,9.1V15.75a.25.25,0,0,0,.25.25h8.5a.25.25,0,0,0,.25-.25Z"></path>
            </svg>
        </span>
    );
}