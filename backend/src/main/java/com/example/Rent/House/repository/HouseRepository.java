package com.example.Rent.House.repository;


import com.example.Rent.House.model.HouseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseRepository extends JpaRepository<HouseModel, Integer> {

    @Query("from houses where id = ?1")
    HouseModel getHouseById(int id);

    @Query("from houses where ownerNumber = ?1")
    List<HouseModel> getOwnerHouse(String ownerNumber);

    @Query("from houses where status = ?1")
    List<HouseModel> getAvailableHouse(String status);


}
