package com.kitiya.beaver.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="provider")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @Column(name="description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private City city;

    @Column(name = "province")
    private Province province;

    @Column(name = "website")
    private String website;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> imageUrls;

    @OneToMany(fetch=FetchType.EAGER,mappedBy = "provider", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Activity> activities = new ArrayList<>();

    public Provider () {}

    public Provider(@NotBlank String name) {
        this.name = name;
    }

    public Provider(@NotBlank String name, String description, String address, City city, Province province, String website, List<String> imageUrls) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.city = city;
        this.province = province;
        this.website = website;
        this.imageUrls = imageUrls;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        this.province = province;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }

    public void addActivity(Activity activity) {
        this.activities.add(activity);
    }
}
