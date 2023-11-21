package com.example.Rent.House.repository;


import com.example.Rent.House.model.BookHouseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BookHouseRepository extends JpaRepository<BookHouseModel, Integer> {

    @Query("from booked_house where ownerId = ?1")
    List<BookHouseModel> getBookedHouseModelOwner(int id);

    @Query("from booked_house where renterId = ?1")
    List<BookHouseModel> getBookedHouseModelRenter(int id);
}
