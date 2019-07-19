package com.kitiya.beaver.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class Activity {
    private @Id @GeneratedValue Long id;
    private String name;
    private String type;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String provider;
    private String location;
    private String startDate;
    private String endDate;
    private String startTime;
    private String endTime;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> imageUrls;
    //private Provider provider;
    //private Location location;
    //private Date startDate;
    //private Date endDate;
    //private Date startTime;
    //private Date endTime;
    private BigDecimal cost;

    public Activity() {}

    public Activity(String name, String type, String description, String provider, String location, String startDate, String endDate, String startTime, String endTime, List<String> imageUrls, BigDecimal cost) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.provider = provider;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.imageUrls = imageUrls;
        this.cost = cost;
    }
}
