import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int K = Integer.parseInt(st.nextToken());
		int hMax = 0;
		int wMax = 0; // 가로 세로의 최대 길이

		int hMaxIdx = 0;
		int wMaxIdx = 0; // 가로 세로의 최대 길이의 인덱스

		int[] dirs = new int[6]; // 순서대로 방향 저장
		int[] dist = new int[6]; // 변의 길이 저장
		for (int i = 0; i < 6; i++) {
			st = new StringTokenizer(br.readLine());
			dirs[i] = Integer.parseInt(st.nextToken());
			dist[i] = Integer.parseInt(st.nextToken());
			if (dirs[i] == 1 || dirs[i] == 2) { // 가로 방향
				if (wMax < dist[i]) { // 가로 값 저장
					wMax = dist[i];
					wMaxIdx = i;
				}
			} else { // 세로 값 저장
				if (hMax < dist[i]) {
					hMax = dist[i];
					hMaxIdx = i;
				}
			}
		}
		int maxSquare = wMax * hMax; //전체넓이
		//작은 사각형넓이
		int minSquare = dist[(wMaxIdx + 3) % 6] * dist[(hMaxIdx + 3) % 6];
		System.out.println((maxSquare - minSquare) * K);
	}
}
