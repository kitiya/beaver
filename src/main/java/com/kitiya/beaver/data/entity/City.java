package com.kitiya.beaver.data.entity;

public enum City {
    CALGARY ("CALGARY"),
    SASKATOON ("SASKATOON"),
    TORONTO ("TORONTO"),
    VANCOUVER ("VANCOUVER"),
    OTHER ("OTHER");
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
            case "CALGARY":
                return City.CALGARY;
            case "SASKATOON":
                return City.SASKATOON;
            case "TORONTO":
                return City.TORONTO;
            case "VANCOUVER":
                return City.VANCOUVER;
            case "OTHER":
                return City.OTHER;
            default:
                throw new IllegalArgumentException("Code [" + code + "] not supported");
        }
    }
}
