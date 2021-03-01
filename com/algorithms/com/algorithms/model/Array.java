package com.algorithms.model;

public class Array {
    private int[] items;
    
    public Array(int length) {
        items = new int[length];
    }
    
    public void insert(int index, int insertion) {
        items[index] = insertion;
    }

    public void remove(int index) {
        items[index] = 0;
    }

    public void print() {
        for(int item: items)
            System.out.println(item);
    }
}
