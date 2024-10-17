module.exports = (query) => {
    let objSearch = {
        keyword: ""
    };

    if (query.keyword) {
        objSearch.keyword = query.keyword;

        const regex = new RegExp(objSearch.keyword, "i"); // i là ko pb chữ hoa hay thường
        objSearch.regex = regex;
    };

    return objSearch;
}