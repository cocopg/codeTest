import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int A = sc.nextInt();
		int B = sc.nextInt();

		int aSum = A + B;
		int bSum = A - B;
		int cSum = A * B;
		int dSum = A / B;
		int eSum = A % B;
		System.out.println(aSum);
		System.out.println(bSum);
		System.out.println(cSum);
		System.out.println(dSum);
		System.out.println(eSum);

	}

}