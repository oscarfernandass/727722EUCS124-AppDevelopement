package com.example.fashion_forward.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fashion_forward.model.Cart2;

@Repository
public interface Cart2Repository extends JpaRepository<Cart2,Long>{
    @Query(value = "SELECT * FROM Cart2 WHERE user_id = ?1", nativeQuery = true)
    Cart2 findByUserId(Long userId);
}
