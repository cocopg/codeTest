class Solution {
    public int solution(int n) {
        int i;
        int result = 0;
        for(i=1; i<=n; i++){
            if(i%2==0){
                result += i;
                i++;
            }
        }
        return result;
    }
}