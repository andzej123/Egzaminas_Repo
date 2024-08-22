package com.example.demo.exceptions;

public class CategoryAlreadyExists extends RuntimeException{

    public CategoryAlreadyExists(String message) {
        super(message);
    }

}
