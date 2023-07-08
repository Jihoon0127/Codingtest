public class Solution {
    public static void main(String[] args) {
        String message = "Happy Birthday Grandma!";
        Solution solution = new Solution();
        System.out.println(solution.solution(message));
    }

    public int solution(String message) {
        int answer = message.length() * 2;
        return answer;
    }
}