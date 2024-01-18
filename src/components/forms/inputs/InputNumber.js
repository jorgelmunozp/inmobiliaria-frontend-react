import { NumericFormat } from 'react-number-format';
import '../forms.css';

export const InputNumber = ({ prefix='',id,value,name,onInputChange,placeholder,className,disabled=false }) => { 
    return (
        <>
            <div className="form-floating text-center" data-mdb-input-init>
                <NumericFormat value={ value } name={ name } placeholder={ placeholder } type='search' 
                    onValueChange={ (values)=> onInputChange(values) } id={ id }
                    prefix={ prefix } thousandSeparator={ true } autoComplete='off'
                    className={className + ' pt-4'} disabled={ disabled } />         
                <label htmlFor={ id } className="form-label text-muted text-nowrap text-truncate" >{ placeholder} </label>
            </div>
        </>
    )
}
