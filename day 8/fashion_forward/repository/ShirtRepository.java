package com.example.fashion_forward.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fashion_forward.model.Shirt;
import java.util.List;

@Repository
public interface ShirtRepository extends JpaRepository<Shirt, Long> {
    Shirt findById(long id);

    Shirt findByName(String name);

    List<Shirt> findByPriceGreaterThanEqual(double price);

    List<Shirt> findByPriceLessThanEqual(double price);
}
