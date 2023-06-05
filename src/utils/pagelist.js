import _ from 'lodash';

function  pagelist(items, pageNumber, pageSize) {
    const start_index = (pageNumber - 1) * pageSize;
    return _(items).slice(start_index).take(pageSize).value();
}
export default pagelist;