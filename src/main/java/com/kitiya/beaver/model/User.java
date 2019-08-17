package com.kitiya.beaver.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="user")
public class User {
    @Id @GeneratedValue
    private Long id;

    @Column (name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email")
    private String email;

    @Column(name="role")
    private Role role;

    private User() {}

    public User(String firstName, String lastName, String email, Role role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }
}
