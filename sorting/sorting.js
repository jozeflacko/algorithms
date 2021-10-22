/**
 *
 * Iterated over array multiple times and on every iteration we compare 2 neighbor items
 * and swap them if they are out of order. In this way biggest value will go to the end.
 *
 * Outer loop goes from right to left because after each iteration on the right side we move
 * biggest item. Inner loop goes from left ot right.
 *
 * Time complexity: O(n2)
 * Space complexity: no extra
 */
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            const current = arr[j], next = arr[j + 1];
            if (current > next) {
                swapValues(arr, j, j+1);
            }
        }
    }
    return arr;
}

/**
 *
 * Outer loop goes from left to right.
 * In Inner loop goes from right to left from outer loop position.
 * We try to move selected item to left to put in on right position.
 *
 * Time complexity: O(n2)
 * Space complexity: no extra
 */
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const ii = arr[i];
        for(let j=i; j>=0;j--) {
            if(ii < arr[j]) {
                swapValues(arr, i,j);
            }
        }
    }
    return arr;
}

/**
 * Outer loop goes from left to rignt and we try to select for every position a
 * next minimum found on the right side of the array
 *
 * Time complexity: O(n2)
 * Space complexity: no extra
 */
function selectionSort(arr) {
    for (let currentIndex = 0; currentIndex < arr.length-1; currentIndex++) {

        let smallestValueIndex = currentIndex;

        for(let j=currentIndex+1; j<arr.length;j++) {
            if(arr[smallestValueIndex] > arr[j]) {
                smallestValueIndex = j;
            }
        }

        if(currentIndex != smallestValueIndex) {
            swapValues(arr, currentIndex, smallestValueIndex);
        }
    }
    return arr;
}

function mergeSort(arr) {
    const sorted = [];

    return sorted;
}

function quickSort(arr) {
    const sorted = [];

    return sorted;
}

function heapSort(arr) {
    const sorted = [];

    return sorted;
}

function shellSort(arr) {
    const sorted = [];

    return sorted;
}

function swapValues(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}


module.exports = {
    bubbleSort,
    insertionSort,
    mergeSort,
    quickSort,
    selectionSort,
    heapSort,
    shellSort,
}

