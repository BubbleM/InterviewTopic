/**
 * Created by bubble on 17-8-11.
 */

function splitChainToArr(chain) {
  let chainArr = chain.split('->');
  
  return chainArr;
}

function getIndexOfArr(arr, val) {
  let index = arr.indexOf(val + '');
  
  return index;
}

function getChain(initialChain, deleteVal) {
  let chainArr = splitChainToArr(initialChain);
  let index = getIndexOfArr(chainArr, deleteVal);
  while (index !== -1) {
    chainArr.splice(index, 1);
    index = getIndexOfArr(chainArr, deleteVal);
  }

  return chainArr.join('->');
}

let chain = '1->2->3->3->4->5->3';
console.log(getChain(chain, 3));
