package com.kitiya.beaver.data.entity;

import org.springframework.util.StringUtils;

public enum ActivityType {
    ACADEMICS ("AM"),
    ART_CRAFT ("AC"),
    DANCE ("DANCE"),
    FITNESS ("FITNESS"),
    GYMNASTICS ("Gymnastics"),
    MARTIAL_ARTS ("MartialArt"),
    MUSIC ("Music"),
    SCIENCE_TECH ("ScienceTech"),
    SPORT ("sport"),
    WATER_SPORT ("WaterSport"),
    WINTER_SPORT ("WinterSport"),
    OTHER("Other");

    private final String name;

    ActivityType(String name) {
        this.name = name;
    }

    public static ActivityType findbyName(String byName) {
        for (ActivityType a: ActivityType.values()
             ) {
            if (a.name.equalsIgnoreCase(byName))
                return a;
        }
        return null;
    }

    @Override
    public String toString() {
        return StringUtils.capitalize(name);
    }

}
