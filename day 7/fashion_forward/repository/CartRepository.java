package com.example.fashion_forward.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fashion_forward.model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    // Native query to find a Cart by the user ID
    @Query(value = "SELECT * FROM Cart WHERE user_id = ?1", nativeQuery = true)
    Cart findByUserId(Long userId);
   
}
