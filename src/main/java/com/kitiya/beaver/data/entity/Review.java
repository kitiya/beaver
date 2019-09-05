package com.kitiya.beaver.data.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@Table(name="review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "title")
    private String title;

    @NotBlank
    @Column(name = "score")
    private Integer score;

    @Column(name="comment")
    private String comment;

    @Column(name="avatar_url")
    private String avatarUrl;

    @ManyToOne
    private ThingsToDo thingsToDo;
}
