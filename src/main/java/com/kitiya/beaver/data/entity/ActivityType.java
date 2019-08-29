package com.kitiya.beaver.data.entity;

import org.springframework.util.StringUtils;

import java.util.Arrays;

public enum ActivityType {
    ACADEMICS ("Academics"),
    ART_CRAFT ("Art and Craft"),
    DANCE ("Dance"),
    FITNESS ("Fitness"),
    GYMNASTICS ("Gymnastics"),
    MARTIAL_ARTS ("Martial Art"),
    MUSIC ("Music"),
    SCIENCE_TECH ("Science Tech"),
    SPORT ("sport"),
    WATER_SPORT ("Water Sport"),
    WINTER_SPORT ("Winter Sport"),
    OTHER("Other");

    private final String name;

    ActivityType(String name) {
        this.name = name;
    }

    public static ActivityType fromValues(String value) {
        for (ActivityType type: values()) {
            if (type.name.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException(
                "Unknown enum type " + value + ", Allowed values are " + Arrays.toString(values()));
    }

//    public static ActivityType findbyName(String byName) {
//        for (ActivityType a: ActivityType.values() ) {
//            if (a.name.equalsIgnoreCase(byName))
//                return a;
//        }
//        return null;
//    }
//
//    @Override
//    public String toString() {
//        return StringUtils.capitalize(name);
//    }

}
