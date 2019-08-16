package com.kitiya.beaver.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
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

    @Column(name = "website")
    private String website;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> imageUrls;

    public Provider () {}

    public Provider(String name, String description, String address, String website, List<String> imageUrls) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.website = website;
        this.imageUrls = imageUrls;
    }
}
