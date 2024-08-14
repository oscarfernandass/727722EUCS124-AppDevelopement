package com.example.fashion_forward.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cart3 {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String category;

    private double total_price;

    private int quantity;

    @OneToMany(mappedBy = "cart3", cascade = CascadeType.ALL)
    private List<Shirt> shirts = new ArrayList<>();
    
    @OneToMany(mappedBy = "cart3", cascade = CascadeType.ALL)
    private List<Pant> pants = new ArrayList<>();
    
    @OneToMany(mappedBy = "cart3", cascade = CascadeType.ALL)
    private List<Trouser> trousers = new ArrayList<>();
    
    @OneToMany(mappedBy = "cart3", cascade = CascadeType.ALL)
    private List<Tshirt> tshirts = new ArrayList<>();
    
    @OneToMany(mappedBy = "cart3", cascade = CascadeType.ALL)
    private List<Suite> suites = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
