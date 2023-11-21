package com.example.Rent.House.controller;


import com.example.Rent.House.model.BookHouseModel;
import com.example.Rent.House.model.HouseModel;
import com.example.Rent.House.model.MessageModel;
import com.example.Rent.House.model.UserModel;
import com.example.Rent.House.repository.BookHouseRepository;
import com.example.Rent.House.repository.HouseRepository;
import com.example.Rent.House.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MainController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    HouseRepository houseRepository;

    @Autowired
    BookHouseRepository bookHouseRepository;

    //...........................auth start...................................//


    @PostMapping("/registerUser")
    public Object registerUser(@ModelAttribute UserModel userModel) {
        System.out.println(userModel.getEmail());
        try {
            userRepository.save(userModel);
            return new MessageModel("success");
        } catch (Error e) {
            return new MessageModel("fail to register");
        }
    }

    @PostMapping("/loginUser")
    public Object login(@RequestParam(name = "number") String number, @RequestParam String password) {
        UserModel userModel = userRepository.findByNumber(number);
        String[] parts = password.split(",");
        String pass = "";
        if (parts.length > 0) pass = parts[0];
        if (userModel == null) {
            return new MessageModel("no user found");
        } else {
            if (userModel.password.equalsIgnoreCase(pass)) {
                return userModel;
            } else {
                return new MessageModel("invalid credential");
            }
        }

    }


    //...........................auth end...................................//


    //...........................owner start..................................//


    @PostMapping("/addHouse")
    public MessageModel addHouse(@ModelAttribute HouseModel houseModel) {
        try {
            UserModel userModel = userRepository.findByNumber(houseModel.ownerNumber);
            if (userModel.role.equalsIgnoreCase("owner")) {
                houseRepository.save(houseModel);
                return new MessageModel("success");
            } else return new MessageModel("only owner can add house");
        } catch (Error e) {
            return new MessageModel("fail to add house");
        }
    }

    @GetMapping("/ownerHouseList")
    public Object ownerHouseList(@RequestParam String ownerNumber) {
        try {
            return houseRepository.getOwnerHouse(ownerNumber);
        } catch (Error e) {
            return new MessageModel("fail to get houses");
        }
    }

    @GetMapping("/getBookedHouseOwner")
    public Object getBookedHouseOwner(@RequestParam int id) {
        try {
            int houseId;
            ArrayList<HouseModel> houseModelList = new ArrayList<>();
            List<BookHouseModel> bookHouseModelList = bookHouseRepository.getBookedHouseModelOwner(id);
            for (int i = 0; i <= bookHouseModelList.size() - 1; i++) {
                houseId = bookHouseModelList.get(i).houseId;
                HouseModel houseModel = houseRepository.getHouseById(houseId);
                houseModelList.add(houseModel);
            }
            return houseModelList;
        } catch (Error e) {
            return new MessageModel("fail to get houses");
        }
    }

    //...........................owner end...................................//


    //...........................renter start...................................//

    @GetMapping("/getHouseList")
    public Object getHouseList() {
        try {
            return houseRepository.getAvailableHouse("available");
        } catch (Error e) {
            return new MessageModel("fail to get houses");
        }
    }

    @PostMapping("/bookHouse")
    public Object bookHouse(@RequestParam String ownerNumber, @RequestParam String renterNumber, @RequestParam int houseId) {
        UserModel userModelOwner = userRepository.findByNumber(ownerNumber);
        UserModel userModelRenter = userRepository.findByNumber(renterNumber);
        int ownerId = userModelOwner.getId();
        int renterId = userModelRenter.getId();
        System.out.println(ownerId + "" + renterId);
        BookHouseModel bookHouseModel = new BookHouseModel(renterId, ownerId, houseId);
        try {
            Optional<HouseModel> house = houseRepository.findById(houseId);
            if (house.isPresent()) {
                HouseModel houseModel = house.get();
                houseModel.setStatus("booked");
                houseRepository.save(houseModel);
                bookHouseRepository.save(bookHouseModel);
                return new MessageModel("house booked");
            } else return new MessageModel("no house found");
        } catch (Error e) {
            return new MessageModel("fail to book house");
        }
    }

    @GetMapping("/getRenterBookedHouse")
    public Object getRenterBookedHouse(@RequestParam int id) {
        try {
            int houseId;
            ArrayList<HouseModel> houseModelList = new ArrayList<>();
            List<BookHouseModel> bookHouseModelList = bookHouseRepository.getBookedHouseModelRenter(id);
            for (int i = 0; i <= bookHouseModelList.size() - 1; i++) {
                houseId = bookHouseModelList.get(i).houseId;
                HouseModel houseModel = houseRepository.getHouseById(houseId);
                houseModelList.add(houseModel);
            }
            return houseModelList;
        } catch (Error e) {
            return new MessageModel("fail to get houses");
        }
    }

    //...........................renter end...................................//


}
