package com.example.Rent.House.model;

import jakarta.persistence.*;

@Entity(name = "houses")
public class HouseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "house_id")
    private int id;

    @Column(name = "house_name")
    public String name;

    @Column(name = "house_image")
    public String image;

    @Column(name = "house_fee")
    public int fee;

    @Column(name = "house_status")
    public String status;

    @Column(name = "house_location")
    public String location;

    @Column(name = "owner_number")
    public String ownerNumber;

    public HouseModel() {
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getFee() {
        return fee;
    }

    public void setFee(int fee) {
        this.fee = fee;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setOwnerNumber(String ownerNumber) {
        this.ownerNumber = ownerNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getOwnerNumber() {
        return ownerNumber;
    }
}
