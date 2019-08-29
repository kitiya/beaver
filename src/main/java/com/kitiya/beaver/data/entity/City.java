package com.kitiya.beaver.data.entity;

public enum City {
    CALGARY ("CGR"),
    SASKATOON ("STN"),
    TORONTO ("TRT"),
    VANCOUVER ("VCV"),
    OTHER ("OTH");
    //EDMONTON ("EMT"),
    //HALIFAX ("HLF"),
    //MONTREAL ("MTR"),
    //OTTAWA ("OTW"),
    //QUEBEC_CITY ("QBC"),
    //WINNIPEG ("WNP"),

    private final String code;

    City(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public static City fromCode(String code) {
        switch (code) {
            case "CGR":
                return City.CALGARY;
            case "STN":
                return City.SASKATOON;
            case "TRT":
                return City.TORONTO;
            case "VCV":
                return City.VANCOUVER;
            case "OTH":
                return City.OTHER;
            default:
                throw new IllegalArgumentException("Code [" + code + "] not supported");
        }
    }
}
