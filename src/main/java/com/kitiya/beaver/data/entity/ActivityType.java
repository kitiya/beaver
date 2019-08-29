package com.kitiya.beaver.data.entity;

import java.util.Arrays;

public enum ActivityType {
    ACADEMICS ("ACADEMICS"),
    ART_CRAFT ("ART_CRAFT"),
    DANCE ("DANCE"),
    FITNESS ("FITNESS"),
    GYMNASTICS ("GYMNASTICS"),
    MARTIAL_ARTS ("MARTIAL_ARTS"),
    MUSIC ("MUSIC"),
    SCIENCE_TECH ("SCIENCE_TECH"),
    SPORT ("SPORT"),
    WATER_SPORT ("WATER_SPORT"),
    WINTER_SPORT ("WINTER_SPORT"),
    OTHER("OTHER");

    private final String code;

    ActivityType(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public static ActivityType fromCode(String code) {
        switch (code) {
            case "ACADEMICS":
                return ActivityType.ACADEMICS;
            case "ART_CRAFT":
                return ActivityType.ART_CRAFT;
            case "DANCE":
                return ActivityType.DANCE;
            case "FITNESS":
                return ActivityType.FITNESS;
            case "GYMNASTICS":
                return ActivityType.GYMNASTICS;
            case "MARTIAL_ARTS":
                return ActivityType.MARTIAL_ARTS;
            case "MUSIC":
                return ActivityType.MUSIC;
            case "SCIENCE_TECH":
                return ActivityType.SCIENCE_TECH;
            case "SPORT":
                return ActivityType.SPORT;
            case "WATER_SPORT":
                return ActivityType.WATER_SPORT;
            case "WINTER_SPORT":
                return ActivityType.WINTER_SPORT;
            case "OTHER":
                return ActivityType.OTHER;
            default:
                throw new IllegalArgumentException("Unknown enum type [" + code + "], Allowed values are" + Arrays.toString(values()));
        }
    }
}
