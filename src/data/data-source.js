import makanan from './makanan.js';
class DataSource {
  static cariMakan(keyword) {
    return new Promise((resolve, reject) => {
      const filterMakan = makanan.filter(makan =>
        makan.name.toUpperCase().includes(keyword.toUpperCase())
      );
      if (filterMakan.length) {
        resolve(filterMakan);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
