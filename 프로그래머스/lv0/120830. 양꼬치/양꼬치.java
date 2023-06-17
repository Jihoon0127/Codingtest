class Solution {
    public int solution(int n, int k) {
        int totalAmount = 0;
        
        // 양꼬치의 가격 계산
        totalAmount += n * 12000;
        
        // 음료수의 개수에 따른 서비스 계산
        int freeDrinks = n / 10;
        int drinksToPay = k - freeDrinks;
        
        if (drinksToPay > 0) {
            totalAmount += drinksToPay * 2000;
        }
        
        return totalAmount;
    }
}