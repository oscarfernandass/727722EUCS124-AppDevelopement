package com.example.fashion_forward.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fashion_forward.model.Admin;



@Repository
public interface AdminRepository extends JpaRepository<Admin,Long>{
    Admin findByEmail(String email); 
    Admin findById(long id);
}
