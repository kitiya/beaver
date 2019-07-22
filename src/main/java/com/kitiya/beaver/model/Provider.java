package com.kitiya.beaver.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Provider {
    private @Id @GeneratedValue Long id;
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String location;
    private String website;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> imageUrls;

    public Provider () {}

    public Provider(String name, String description, String location, String website, List<String> imageUrls) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.website = website;
        this.imageUrls = imageUrls;
    }
}
