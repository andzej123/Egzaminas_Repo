package com.example.demo.exceptions;

public class OfferNotFoundException extends RuntimeException{

    public OfferNotFoundException(String message) {
        super(message);
    }
}
