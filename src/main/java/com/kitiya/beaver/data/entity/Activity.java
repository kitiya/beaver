package com.kitiya.beaver.data.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
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

    //@Enumerated(EnumType.STRING)
    @Column(name = "activity_type")
    private ActivityType type;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name="from_age")
    private Integer fromAge;

    @Column(name="to_age")
    private Integer toAge;

    @ManyToOne
    private Provider provider;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="schedule_id", referencedColumnName = "id")
    private Schedule schedule;

    @Column(name = "cost")
    private Long cost;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> imageUrls;
    public Activity() {}

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdDate = new Date();

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date modifiedDate = new Date();

    public Activity(@NotBlank String name, ActivityType type, String description, Integer fromAge, Integer toAge, Provider provider, Schedule schedule, Long cost, List<String> imageUrls, Date createdDate, Date modifiedDate) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.fromAge = fromAge;
        this.toAge = toAge;
        this.provider = provider;
        this.schedule = schedule;
        this.cost = cost;
        this.imageUrls = imageUrls;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }

    // for development
    public Activity(@NotBlank String name, ActivityType type, String description, Integer fromAge, Integer toAge, Provider provider, Schedule schedule, Long cost, List<String> imageUrls) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.fromAge = fromAge;
        this.toAge = toAge;
        this.provider = provider;
        this.schedule = schedule;
        this.cost = cost;
        this.imageUrls = imageUrls;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
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

    public Date getCreatedDate() {
        return createdDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public String getAgeRange() {return this.fromAge + " - " + this.getToAge() + " yrs";}

    @PreRemove
    private void removeSchedule() {
        this.schedule = null;
    }
}
