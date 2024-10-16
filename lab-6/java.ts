const arrayInput = document.getElementById('array-input');
const sortButton = document.getElementById('sort-button');
const sortedArrayDiv = document.getElementById('sorted-array');

sortButton.addEventListener('click', () => {
  const array = arrayInput.value.split(',').map(Number);
  const sortedArray = insertionSort(array);
  sortedArrayDiv.innerText = `Sorted array: ${sortedArray.join(', ')}`;
});

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}