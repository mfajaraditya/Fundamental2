function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.cariMakan = function (keyword) {
    var filterMakan = makanan.filter(function (makan) {
        return makan.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if(filterMakan.length) {
        this.onSuccess(filterMakan);
    } else {
        this.onFailed(keyword + "is not found");
    }
}