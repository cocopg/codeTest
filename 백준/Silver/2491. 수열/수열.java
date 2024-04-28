import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			int N = Integer.parseInt(br.readLine());
			int[] arr = new int[N];
			StringTokenizer st = new StringTokenizer(br.readLine());
			int len = 1, max = 1;
			for(int i=0; i<N; i++) {
				arr[i] = Integer.parseInt(st.nextToken());
			}
			for(int i=0; i<N-1; i++) {
				if(arr[i] <= arr[i+1]) {
					len++;
				}else {
					if(max < len) {
						max = len;
					}
					len = 1;
				}
			}
			//
			int len2 = 1, max2 = 1;
			for(int i=0; i<N-1; i++) {
				if(arr[i] >= arr[i+1]) {
					len2++;
				}else {
					if(max2 < len2) {
						max2 = len2;
					}
					len2 = 1;
				}
			}
			
			if(max2 < len2) {
				max2 = len2;
			}
			if(max < len) {
				max = len;
			}
			System.out.println(Math.max(max, max2));
		}
}
