package com.kitiya.beaver.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
public class Activity {
    private @Id @GeneratedValue Long id;
    private String activityName;
    //private Category category;
    //private Business business;
    //private Location location;
    private Date startDate;
    private Date endDate;
    private Date startTime;
    private Date endTime;
    private BigDecimal cost;
}
