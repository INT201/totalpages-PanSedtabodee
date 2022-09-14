const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  let arrI = arrayItems
  let rowsP = rowsPerPage
  if(arrI === null || arrI === undefined){
    return undefined
  }
  else if(rowsP === null || rowsP === undefined || rowsP == 0){
    return 1
  }else{
    return Math.ceil(arrI.length/rowsP)
  }
}
module.exports = totalPages
