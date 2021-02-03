class Sorting {
    public static void main(String[] args) throws Exception {
        Sorting s = new Sorting();

        s.assertArrayIsSorter("Bubble sort", s.bubbleSort(s.getArray(9)));
        s.assertArrayIsSorter("Insertion sort", s.insertionSort(s.getArray(9)));
        s.assertArrayIsSorter("Selection sort", s.selectionSort(s.getArray(9)));
        s.assertArrayIsSorter("Merge sort", s.mergeSort(s.getArray(9)));
        s.assertArrayIsSorter("Quick sort", s.quickSort(s.getArray(9)));
    }

    void print(String msg, int[] arr) {
        System.out.print(msg + ": ");
        for (int j = 0; j < arr.length; j++) {
            System.out.print(arr[j]);
        }
        System.out.println("");
    }

    int[] getArray(int length) {
        int[] array = new int[]{8, 4, 3, 5, 2, 7, 5, 1, 9, 6};

        if(length > array.length) {
            return array;
        }
        int[] result = new int[length];
        for (int i = 0; i < length; i++) {
            result[i] = array[i];
        }

        return result;
    }

    int[] bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = n; i > 0; i--) {
            for (int j = 0; j < n - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    // https://www.youtube.com/watch?v=JU767SDMDvA&ab_channel=MichaelSambol
    // we start from left and go to right
    // for each item we will find sorted place where it belongs on the left side
    int[] insertionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int indexOfItemWithWhichWeCompare = i - 1;
            int indexOfCurrentlySortedItem = i;
            while (indexOfCurrentlySortedItem >= 0) {
                if (indexOfItemWithWhichWeCompare >= 0) {
                    if (arr[indexOfItemWithWhichWeCompare] > arr[indexOfCurrentlySortedItem]) {
                        int temp = arr[indexOfItemWithWhichWeCompare];
                        arr[indexOfItemWithWhichWeCompare] = arr[indexOfCurrentlySortedItem];
                        arr[indexOfCurrentlySortedItem] = temp;
                    }
                }
                indexOfItemWithWhichWeCompare--;
                indexOfCurrentlySortedItem--;
            }
        }
        return arr;


    }

    // https://www.youtube.com/watch?v=g-PGLbMth_g&ab_channel=MichaelSambol
    // we will go from left to right
    // we always find the next minimum and put it on the right index
    int[] selectionSort(int[] arr) {

        for (int i = 0; i < arr.length; i++) {

            int currentMinimumAtIndex = i;

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[currentMinimumAtIndex] > arr[j]) {
                    currentMinimumAtIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[currentMinimumAtIndex];
            arr[currentMinimumAtIndex] = temp;

        }
        return arr;
    }

    // https://www.youtube.com/watch?v=4VqmGXwpLqc&ab_channel=MichaelSambol
    // this is a recursive algorithm
    // first we halve till we get separated numbers
    // then we build back ouch array
    int[] mergeSort(int[] arr) {
        MergeSort mergeSort = new MergeSort();
        return mergeSort.sort(arr);
    }

    // https://www.youtube.com/watch?v=ddeLSDsYVp8&ab_channel=RobEdwards
    int[] shellSort(int[] arr) {
        return arr;
    }

    int[] quickSort(int[] arr) {
        QuickSort quickSort = new QuickSort();
        return quickSort.sort(arr);
    }

    void assertArrayIsSorter(String name, int[] arr) throws Exception {
        for (int i = arr.length; i > 1; i--) {
            if (arr[i - 1] < arr[i - 2]) {
                this.print(name + " is not ok", arr);
                throw new Exception("Sorting failed");
            }
        }
        this.print(name + " is ok", arr);
    }
}
