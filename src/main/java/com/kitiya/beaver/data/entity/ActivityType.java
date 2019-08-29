package com.kitiya.beaver.data.entity;

import org.springframework.util.StringUtils;

import java.util.Arrays;

public enum ActivityType {
    ACADEMICS ("ACD"),
    ART_CRAFT ("ACR"),
    DANCE ("DCE"),
    FITNESS ("FNS"),
    GYMNASTICS ("GYM"),
    MARTIAL_ARTS ("MTR"),
    MUSIC ("MSC"),
    SCIENCE_TECH ("SCT"),
    SPORT ("SPT"),
    WATER_SPORT ("WTS"),
    WINTER_SPORT ("WNS"),
    OTHER("OTH");

    private final String code;

    ActivityType(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public static ActivityType fromCode(String code) {
        switch (code) {
            case "ACD":
                return ActivityType.ACADEMICS;
            case "ACR":
                return ActivityType.ART_CRAFT;
            case "DCE":
                return ActivityType.DANCE;
            case "FNS":
                return ActivityType.FITNESS;
            case "GYM":
                return ActivityType.GYMNASTICS;
            case "MTR":
                return ActivityType.MARTIAL_ARTS;
            case "MSC":
                return ActivityType.MUSIC;
            case "SCT":
                return ActivityType.SCIENCE_TECH;
            case "SPT":
                return ActivityType.SPORT;
            case "WTS":
                return ActivityType.WATER_SPORT;
            case "WNS":
                return ActivityType.WINTER_SPORT;
            case "OTH":
                return ActivityType.OTHER;
            default:
                throw new IllegalArgumentException("Unknown enum type [" + code + "], Allowed values are" + Arrays.toString(values()));
        }

//        for (ActivityType type: values()) {
//            if (type.code.equalsIgnoreCase(code));
//            return type;
//        }
//        throw new IllegalArgumentException("Unknown enum type [" + code + "], Allowed values are" + Arrays.toString(values()));
    }

//    public static ActivityType fromValues(String code) {
//        for (ActivityType type: values()) {
//            if (type.code.equalsIgnoreCase(value)) {
//                return type;
//            }
//        }
//        throw new IllegalArgumentException(
//                "Unknown enum type " + value + ", Allowed values are " + Arrays.toString(values()));
//    }

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
