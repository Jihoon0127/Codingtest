class Solution {
    public String solution(String my_string) {
        char[] arr = my_string.toCharArray();
        int n = arr.length;

        for (int i = 0; i < n / 2; i++) {
            char temp = arr[i];
            arr[i] = arr[n - 1 - i];
            arr[n - 1 - i] = temp;
        }

        return new String(arr);
    }
}