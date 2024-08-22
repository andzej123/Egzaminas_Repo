package com.example.demo.service;

import com.example.demo.exceptions.CategoryNotFoundException;
import com.example.demo.exceptions.OfferNotFoundException;
import com.example.demo.model.Category;
import com.example.demo.model.Offer;
import com.example.demo.model.User;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    private final OfferRepository offerRepository;
    private final CategoryRepository categoryRepository;

   @Autowired
    public OfferService(OfferRepository offerRepository, CategoryRepository categoryRepository) {
        this.offerRepository = offerRepository;
        this.categoryRepository = categoryRepository;
    }

    public Offer addOffer(Offer request) {
        Category category = categoryRepository.findById(request.getCategory().getId()).orElseThrow(
                () -> new CategoryNotFoundException("Not found")
        );
        Offer offer = new Offer();
        offer.setName(request.getName());
        offer.setDescription(request.getDescription());
        offer.setPrice(request.getPrice());
        offer.setCity(request.getCity());
        offer.setCategory(category);
        offerRepository.save(offer);
        return offer;
    }

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    public Offer getOfferById(Integer offerId) {
        return offerRepository.findById(offerId).orElseThrow(
                () -> new OfferNotFoundException("Offer with this id not found - " + offerId)
        );
    }

    public void deleteOffer(Integer offerId) {
        Offer offer = offerRepository.findById(offerId).orElseThrow(
                () -> new OfferNotFoundException("Offer with this id not found - " + offerId)
        );

        offerRepository.deleteById(offerId);
    }

    public Offer updateOffer(Integer id, Offer requestBook) {
        Offer offer = offerRepository.findById(id).orElseThrow(
                () -> new OfferNotFoundException("Book with this id not found - " + id)
        );
        Category category = categoryRepository.findById(requestBook.getCategory().getId()).orElseThrow(
                () -> new CategoryNotFoundException("Not found")
        );
        offer.setName(requestBook.getName());
        offer.setDescription(requestBook.getDescription());
        offer.setPrice(requestBook.getPrice());
        offer.setCity(requestBook.getCity());
        offer.setCategory(category);
        offerRepository.save(offer);
        return offer;
    }

    public List<Offer> filterOffersByCategory(Integer id) {
        return offerRepository.findOffersByCategory(id);
    }
}
