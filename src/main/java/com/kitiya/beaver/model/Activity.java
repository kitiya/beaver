package com.kitiya.beaver.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name="activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private ActivityType type;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "provider")
    private String provider;

    @Column(name = "location")
    private String location;

    @Temporal(TemporalType.DATE)
    @Column(name = "start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "end_date")
    private Date endDate;

    @Temporal(TemporalType.TIME)
    @Column(name = "start_time")
    private Date startTime;

    @Temporal(TemporalType.TIME)
    @Column(name = "end_time")
    private Date endTime;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> imageUrls;

    @Enumerated(EnumType.STRING)
    @Column(name="day_of_week")
    private DayOfWeek dayOfWeek;

    @Column(name = "cost")
    private BigDecimal cost;

    public Activity() {}

    public Activity(@NotBlank String name, @NotBlank ActivityType type, String description, String provider, String location, Date startDate, Date endDate, Date startTime, Date endTime, List<String> imageUrls, DayOfWeek dayOfWeek, BigDecimal cost) {
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
        this.dayOfWeek = dayOfWeek;
        this.cost = cost;
    }
}
