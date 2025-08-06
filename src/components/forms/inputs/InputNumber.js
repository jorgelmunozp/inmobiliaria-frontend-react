import { NumericFormat } from 'react-number-format';
import '../forms.css';

export const InputNumber = ({ prefix='',id,value,name,onInputChange,placeholder,className,disabled=false }) => { 
    return (
        <>
            <div className="form-floating text-center text-nowrap text-truncate shadow-sm" data-mdb-input-init>
                <NumericFormat value={ value } name={ name } placeholder={ placeholder } type='search' 
                    onValueChange={ (values)=> onInputChange(values) } id={ id }
                    prefix={ prefix } thousandSeparator={ true } autoComplete='off'
                    className={className + ' text-nowrap text-truncate pt-4'} disabled={ disabled } allowNegative={false} />         
                <label htmlFor={ id } className="form-label text-muted text-nowrap text-truncate" >{ placeholder} </label>
            </div>
        </>
    )
}
export default InputNumber;