// White space line dense
export const WhiteLine = ({ className='' }) => {
  return (
    <>
        <div className={className + ' user-select-none py-0 lh-1'}>&nbsp;</div>
    </>
  );
}
export default WhiteLine;
