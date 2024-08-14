package com.example.fashion_forward.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.example.fashion_forward.model.Admin;

import com.example.fashion_forward.services.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private AdminService adminservice;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admin admin) {
        try {
            Admin existingUser = adminservice.getAdminByEmail(admin.getEmail());
            if (existingUser != null && existingUser.getPassword().equals(admin.getPassword())) {
                logger.info("User logged in successfully with email: {}", admin.getEmail());
                return ResponseEntity.status(HttpStatus.OK).body("User logged in successfully");
            } else {
                logger.warn("Invalid email or password for email: {}", admin.getEmail());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        } catch (Exception e) {
            logger.error("Error occurred during user login", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred during login");
        }
    }
}
