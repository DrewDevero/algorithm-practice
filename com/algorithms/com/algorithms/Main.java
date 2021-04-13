package com.algorithms;

import java.util.*;
import com.algorithms.model.Array;

public class Main {
    public static void main(String[] args) {

        HashMap<String, String> planetsFromSun = new HashMap<String, String>();
        Map<String, Integer> people = new HashMap<>();
        HashMap<String, Integer> objects = new HashMap<String, Integer>();

        int createObjects = 1;

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

        planetsFromSun.put("First", "Mercury");
        planetsFromSun.put("Second","Venus");
        planetsFromSun.put("Third", "Earth");

        for(String key : planetsFromSun.keySet()) {
        System.out.println("Key: " + key + "   Value: " + planetsFromSun.get(key));
        }
    
        System.out.println(planetsFromSun.size());

        planetsFromSun.remove("second");
        
        System.out.println(planetsFromSun);

        people.put("Harry", 70);
        people.put("Darcey", 38);
        people.put("Candice", 40);
        people.put("Carl", 25);

        System.out.println("Candice: " + people.get("Candice") + "\n" + "^ from all of the following:");
        
        for(String key : people.keySet()) {
            System.out.println(key + ": " + people.get(key));
        }

        System.out.println();

        people.remove("Harry");

        Iterator<String> iterator = people.keySet().iterator();

        while(iterator.hasNext()) {
            String key = iterator.next();
            System.out.println(key + ": " + people.get(key));
        }

        while(createObjects < 11) {
            String key = "Object" + String.valueOf(createObjects);
            objects.put( key, createObjects);
            System.out.println("Key: " + key + " Value: " + objects.get(key));
            createObjects++;
        }
        System.out.println(objects);
    }
}