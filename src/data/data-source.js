class DataSource {
  constructor(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
  }

  cariMakan(keyword) {
    const filterMakan = makanan.filter((makan) =>
      makan.name.toUpperCase().includes(keyword.toUpperCase())
    );

    if (filterMakan.length) {
      this.onSuccess(filterMakan);
    } else {
      this.onFailed(`${keyword} is not found`);
    }
  }
}
