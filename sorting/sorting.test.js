const sorting = require('./sorting');

const ARR = [5,3,8,2,10,1,9,3,7,12,8,0,11,4,6];
const ARR_SORTED = [0,1,2,3,3,4,5,6,7,8,8,9,10,11,12];

test('test sorting', () => {
    expect(sorting.bubbleSort(ARR)).toEqual(ARR_SORTED);
    expect(sorting.insertionSort(ARR)).toEqual(ARR_SORTED);
});