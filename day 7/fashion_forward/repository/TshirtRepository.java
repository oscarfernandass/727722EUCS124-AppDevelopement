package com.example.fashion_forward.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fashion_forward.model.Tshirt;

@Repository
public interface TshirtRepository extends JpaRepository<Tshirt, Long> {
    Tshirt findById(long id);

    Tshirt findByName(String name);

    List<Tshirt> findByPriceGreaterThanEqual(double price);

    List<Tshirt> findByPriceLessThanEqual(double price);
}
