package com.algorithms;

import java.util.*;
import com.algorithms.model.Array;

public class Main {
    public static void main(String[] args) {
        int[] numbers = new int[10];
        numbers[0] = 3;
        numbers[2] = 5;
        numbers[4] = 7;

        int[] moreNumbers = {2, 4, 6, 8, 9};
        Array evenMoreNumbers = new Array(7);
        evenMoreNumbers.insert(0, 14);
        evenMoreNumbers.insert(2, 18);

        System.out.println(Arrays.toString(numbers));
        System.out.println(Arrays.toString(moreNumbers));
        evenMoreNumbers.print();

        evenMoreNumbers.remove(0);

        evenMoreNumbers.print();
    }
}