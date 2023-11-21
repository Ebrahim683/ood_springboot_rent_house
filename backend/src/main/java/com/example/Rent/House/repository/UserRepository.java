package com.example.Rent.House.repository;


import com.example.Rent.House.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> {

    @Query("from users")
    List<UserModel> getAllUsers();


    UserModel findByNumber(String number);

}
