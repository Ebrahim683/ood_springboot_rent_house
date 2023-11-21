package com.example.Rent.House.model;

import jakarta.persistence.*;

@Entity(name = "booked_house")
public class BookHouseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "renter_id")
    public int renterId;

    @Column(name = "owner_id")
    public int ownerId;

    @Column(name = "house_id")
    public int houseId;


    public BookHouseModel() {
    }

    public BookHouseModel(int renterId, int ownerId, int houseId) {
        this.renterId = renterId;
        this.ownerId = ownerId;
        this.houseId = houseId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRenterId() {
        return renterId;
    }

    public void setRenterId(int renterId) {
        this.renterId = renterId;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public int getHouseId() {
        return houseId;
    }

    public void setHouseId(int houseId) {
        this.houseId = houseId;
    }
}
