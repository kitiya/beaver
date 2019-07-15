package com.kitiya.beaver.model;

public enum ActivityType {
    ACADEMICS ("Academics"),
    ART_CRAFT ("ArtCraft"),
    DANCE ("Dance"),
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

}
