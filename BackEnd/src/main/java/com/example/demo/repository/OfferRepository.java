package com.example.demo.repository;

import com.example.demo.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer, Integer> {

    @Query("""
            Select o from Offer o where o.category.id = :id
            """)
    List<Offer> findOffersByCategory(@Param("id") Integer id);
}
