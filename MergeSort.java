import java.util.stream.IntStream;

public class MergeSort {

    public int[] sort(int[] arr) {

        if(arr.length <= 1) {
            return arr;
        }

        int half = (int)(Math.floor(arr.length /2));

        int[] left = getSliceOfArray(arr, 0, half);
        int[] right = getSliceOfArray(arr, half, arr.length);

        left = sort(left);
        right = sort(right);

        return merge(left, right);
    }

    private int[] merge(int[] left, int[] right) {

        int newArrayLength = left.length + right.length;
        int[] result = new int[newArrayLength];

        int minLeftIndex = 0;
        int minRightIndex = 0;

        if(left.length == 0) {
            return right;
        } else if(right.length == 0) {
            return left;
        }
        for(int i=0;i<newArrayLength;i++) {
            if(minLeftIndex != -1 && (minRightIndex == -1 || left[minLeftIndex] <= right[minRightIndex])) {
                result[i] = left[minLeftIndex++];
                if(minLeftIndex >= left.length) {
                    minLeftIndex = -1;
                }
            } else {
                result[i] = right[minRightIndex++];
                if(minRightIndex >= right.length) {
                    minRightIndex = -1;
                }
            }
        }
        return result;
    }

    public static int[] getSliceOfArray(int[] arr, int start, int end) {

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


