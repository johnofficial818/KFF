import javafx.print.Collation;

// package com.kffdemo;

public class test{

    double voteage(double name, double age){
        // str name ="john";
        // int age =25;
        double voteage = 0;
        voteage = name + age;
        return voteage;

            // if (int age > 18) {
            //     System.out.println("Eligible to vote");
            // }else {
            //     System.out.println("Not Eligible to vote");
            // }
    }


    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println(new test().voteage(2, 25));
    }
}


// package com.kffdemo;

// public class test {

//     /**
//      * @param args
//      */
//     public static void main(String[] args) {

//     //     int age = 2;

//     //     if (age > 18) {
//     //         System.out.println("Eligible to vote");
//     //     } else {
//     //         System.out.println("Not Eligible to vote");
//     //     }
//     // }

//         int[] arr = {25, 35, 4};
//             System.out.println(arr);

// }

// }
