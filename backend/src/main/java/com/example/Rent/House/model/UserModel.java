package com.example.Rent.House.model;

import jakarta.persistence.*;

@Entity(name = "users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    public String name;
    @Column(name = "email")
    public String email;
    @Column(name = "number")
    public String number;

    @Column(name = "role")
    public String role;

    @Column(name = "password")
    public String password;


    public UserModel() {
        super();
    }

    public UserModel(String name, String email, String number, String role, String password) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.role = role;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
