public class QuickSort {

    public int[] sort(int[] arr) {

        if (arr.length < 2) {
            return arr;
        }
        
        

        int pivotIndex = arr.length - 1;
        int pivotValue = arr[pivotIndex];

        int leftCurrentIndex = 0;
        int rightCurrentIndex = pivotIndex - 1;

        int leftSelectedIndex = -1;
        int rightSelectedIndex = -1;

        while (leftCurrentIndex + 1 < rightCurrentIndex) {

            if (arr[leftCurrentIndex] > pivotValue) {
                leftSelectedIndex = leftCurrentIndex;
            }

            if (arr[rightCurrentIndex] < pivotValue) {
                rightSelectedIndex = rightCurrentIndex;
            }

            if (leftSelectedIndex != -1 && rightSelectedIndex != -1) {
                int temp = arr[leftSelectedIndex];
                arr[leftSelectedIndex] = arr[rightSelectedIndex];
                arr[rightSelectedIndex] = temp;
                leftSelectedIndex = -1;
                rightSelectedIndex = -1;
            }

            if (leftSelectedIndex == -1 && leftCurrentIndex + 1 != rightCurrentIndex) {
                leftCurrentIndex++;
            }

            if (rightSelectedIndex == -1 && leftCurrentIndex != rightCurrentIndex - 1) {
                rightCurrentIndex--;
            }
        }

        if(leftSelectedIndex != -1) {
            swapValues(arr, leftSelectedIndex, pivotIndex);
            pivotIndex = leftSelectedIndex;
        } else if(rightSelectedIndex != -1) {
            int nextIndex = rightSelectedIndex + 1;
            swapValues(arr, nextIndex, pivotIndex);
            pivotIndex = nextIndex;
        } else {
            int nextIndex = arr[leftCurrentIndex] > arr[pivotIndex] ? leftCurrentIndex : leftCurrentIndex + 1;
            swapValues(arr, nextIndex + 1, pivotIndex);
            pivotIndex = nextIndex;
        }

        int[] left = pivotIndex == 0 ? new int[0] : this.getSliceOfArray(arr, 0, pivotIndex);
        int[] right = pivotIndex == arr.length-1 ? new int[0] : this.getSliceOfArray(arr, pivotIndex+1, arr.length);

        left = this.sort(left);
        right = this.sort(right);

        int[] pivotArray = {pivotValue};

        return this.merge(this.merge(left, pivotArray), right);
    }

    private void swapValues(int[] arr, int index1, int index2) {
        int temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    private int[] merge(int[] array1, int[] array2) {
        int aLen = array1.length;
        int bLen = array2.length;
        int[] result = new int[aLen + bLen];

        System.arraycopy(array1, 0, result, 0, aLen);
        System.arraycopy(array2, 0, result, aLen, bLen);

        return result;
    }

    private int[] getSliceOfArray(int[] arr, int start, int end) {

        // Get the slice of the Array
        int[] slice = new int[end - start];

        // Copy elements of arr to slice
        for (int i = 0; i < slice.length; i++) {
            slice[i] = arr[start + i];
        }

        // return the slice
        return slice;
    }
}


