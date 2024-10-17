module.exports = (objPagination, query, countRecords) => {
    if(query.page) {
        objPagination.currentPage = parseInt(query.page);
    }

    // nếu có limit trên params thì cập nhật còn ko lấy default
    if(query.limit) {
        objPagination.limitItems = parseInt(query.limit);
    }

    objPagination.skip = (objPagination.currentPage - 1) * objPagination.limitItems;

    const totalPage = Math.ceil(countRecords/objPagination.limitItems);
    objPagination.totalPage = totalPage;
    
    return objPagination;
}