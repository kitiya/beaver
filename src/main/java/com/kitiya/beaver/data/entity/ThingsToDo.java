package com.kitiya.beaver.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="things_to_do")
public class ThingsToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name="name")
    private String name;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name="location")
    private String location;

    @Column(name="date_info")
    private String dateInfo;

    @Column(name="time_info")
    private String timeInfo;

    @Column(name = "website")
    private String website;

    @Column(name = "image_url")
    private String imageUrl;
}
