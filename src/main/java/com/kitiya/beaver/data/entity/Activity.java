package com.kitiya.beaver.data.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

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

    @Column(name="from_age")
    private Integer fromAge;

    @Column(name="to_age")
    private Integer toAge;

    @ManyToOne
    @JsonProperty("providerName")
    private Provider provider;

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

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdDate = new Date();

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date modifiedDate = new Date();

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> imageUrls;

    @Enumerated(EnumType.STRING)
    @Column(name="day_of_week")
    private DayOfWeek dayOfWeek;

    @Column(name = "cost")
    private BigDecimal cost;

    public Activity() {}

    public Activity(@NotBlank String name, ActivityType type, String description, Integer fromAge, Integer toAge, Provider provider, String location, Date startDate, Date endDate, Date startTime, Date endTime, Date createdDate, Date modifiedDate, List<String> imageUrls, DayOfWeek dayOfWeek, BigDecimal cost) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.fromAge = fromAge;
        this.toAge = toAge;
        this.provider = provider;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.createdDate = new Date();
        this.modifiedDate = modifiedDate;
        this.imageUrls = imageUrls;
        this.dayOfWeek = dayOfWeek;
        this.cost = cost;
    }

    public Activity(@NotBlank String name, ActivityType type, String description) {
        this.name = name;
        this.type = ActivityType.MUSIC;
        this.description = description;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ActivityType getType() {
        return type;
    }

    public void setType(ActivityType type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getFromAge() {
        return fromAge;
    }

    public void setFromAge(Integer fromAge) {
        this.fromAge = fromAge;
    }

    public Integer getToAge() {
        return toAge;
    }

    public void setToAge(Integer toAge) {
        this.toAge = toAge;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public DayOfWeek getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(DayOfWeek dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }
}
