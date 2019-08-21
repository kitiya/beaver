package com.kitiya.beaver.data.entity;

import org.springframework.util.StringUtils;

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
    WINNIPEG ("Winnipeg"),
    OTHER ("Other");

    private final String name;

    City(String name) {
        this.name = name;
    }

    public String getName() {
        return StringUtils.capitalize(name);
    }
}
