package com.example.fashion_forward.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fashion_forward.model.Pant;


@Repository
public interface PantRepository extends JpaRepository<Pant,Long>{
     Pant findById(long id);

    Pant findByName(String name);

    List<Pant> findByPriceGreaterThanEqual(double price);

    List<Pant> findByPriceLessThanEqual(double price);
}
