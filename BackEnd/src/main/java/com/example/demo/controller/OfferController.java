package com.example.demo.controller;

import com.example.demo.model.Offer;
import com.example.demo.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class OfferController {

    private final OfferService offerService;

    @Autowired
    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @PostMapping("/offers")
    public ResponseEntity<Offer> addOffer(@RequestBody Offer offer) {
        return ResponseEntity.ok(offerService.addOffer(offer));
    }

    @GetMapping("/offers")
    public List<Offer> getAllOffers() {
        return offerService.getAllOffers();
    }

    @GetMapping("/offers/{id}")
    public Offer getOfferById(@PathVariable Integer id) {
        return offerService.getOfferById(id);
    }

    @DeleteMapping("/offers/{id}")
    public void deleteOffer(@PathVariable Integer id) {
        offerService.deleteOffer(id);
    }

    @PatchMapping("/offers/{id}")
    public Offer updateOffer(@PathVariable Integer id, @RequestBody Offer offer) {
        return offerService.updateOffer(id, offer);
    }

    @GetMapping("/offers/searchcategory")
    public List<Offer> getFilteredBooksByCategory(@RequestParam Integer id) {
        return offerService.filterOffersByCategory(id);
    }

}

