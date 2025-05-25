import java.util.*;

public class Aurbhai {
    public static void printFactorial(int n) {
        int factorial = 1;

        // Correcting the loop to multiply factorial correctly
        for (int i = 1; i <= n; i++) {
            factorial *= i;  // Multiply factorial by i
        }

        // Printing the calculated factorial
        System.out.println(factorial);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Getting input from user
        int n = sc.nextInt();  // Fixed the missing dot in nextInt()
        
        // Calling the method to print factorial
        printFactorial(n);
    }
}
