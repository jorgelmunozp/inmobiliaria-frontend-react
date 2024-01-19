export const Button = ({ className, icon='', title='Button', type, onClick, style }) => {
    return (
      <button
        className={
          (type === 1 && `form-control btn btn-primary shadow-sm ${className}`) ||
          (type === 2 && `btn btn-outline-secondary shadow-sm ${className}`) ||
          (type === 3 && `btn ${className}`) ||
          (type === 4 && `${className}`)
        }
        style={style} onClick={ onClick }>
        { ( icon && title ) ? <>{icon} {title}</> : (icon ? icon : title) }
      </button>
    );
  };
