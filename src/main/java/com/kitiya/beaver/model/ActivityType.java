package com.kitiya.beaver.model;

import org.springframework.util.StringUtils;

public enum ActivityType {
    ACADEMICS ("AM"),
    ART_CRAFT ("AC"),
    DANCE ("DANCE"),
    GYMNASTICS ("Gymnastics"),
    MARTIAL_ARTS ("MartialArt"),
    MUSIC ("Music"),
    SCIENCE_TECH ("ScienceTech"),
    SPORT ("sport"),
    WATER_SPORT ("WaterSport");

    private final String name;

    ActivityType(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return StringUtils.capitalize(name);
    }

}
