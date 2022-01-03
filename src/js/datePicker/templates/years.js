import { format } from 'date-fns';

export default (data) => {
    return `${data.years.map(year => (`
        <div class="datepicker-year" data-year="${format(year, 'yyyy', { locale: data.locale })}">
            <span class="item">${typeof data.format === 'function' ? data.format(year) : format(year, data.format, { locale: data.locale })}</span>
        </div>
    `)).join('')}`;
}
