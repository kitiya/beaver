package com.kitiya.beaver.business.domain;

import com.kitiya.beaver.data.entity.ActivityType;

import java.time.DayOfWeek;
import java.util.Date;
import java.util.List;

public class ActivityDomain {
    private long activityId;
    private String name;
    private ActivityType type;
    private String description;
    private String ageRange;
    private Long cost;
    private List<String> imageUrls;
    private long providerId;
    private String providerName;
    private String location;
    private Date startDate;
    private Date endDate;
    private Date startTime;
    private Date endTime;
    private DayOfWeek dayOfWeek;

    public ActivityDomain() {
    }

    public ActivityDomain(long activityId, String name, ActivityType type, String description, String ageRange, Long cost, List<String> imageUrls, long providerId, String providerName, String location, Date startDate, Date endDate, Date startTime, Date endTime, DayOfWeek dayOfWeek) {
        this.activityId = activityId;
        this.name = name;
        this.type = type;
        this.description = description;
        this.ageRange = ageRange;
        this.cost = cost;
        this.imageUrls = imageUrls;
        this.providerId = providerId;
        this.providerName = providerName;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.dayOfWeek = dayOfWeek;
    }

    public long getActivityId() {
        return activityId;
    }

    public void setActivityId(long activityId) {
        this.activityId = activityId;
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

    public String getAgeRange() {
        return ageRange;
    }

    public void setAgeRange(String ageRange) {
        this.ageRange = ageRange;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public long getProviderId() {
        return providerId;
    }

    public void setProviderId(long providerId) {
        this.providerId = providerId;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
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

    public DayOfWeek getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(DayOfWeek dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }
}
