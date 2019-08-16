package com.kitiya.beaver.model;

public enum City {
    CALGARY ("Calgary"),
    EDMONTON ("Edmonton"),
    HALIFAX ("Halifax"),
    OTTAWA ("Ottawa"),
    MONTREAL ("Montreal"),
    QUEBEC_CITY ("Quebec City"),
    SASKATOON ("Saskatoon"),
    TORONTO ("Toronto"),
    VANCOUVER ("Vancouver"),
    WINNIPEG ("Winnipeg");

    private final String name;

    City(String name) {
        this.name = name;
    }
}
