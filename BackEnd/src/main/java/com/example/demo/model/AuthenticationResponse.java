package com.example.demo.model;

import lombok.Getter;

@Getter
public class AuthenticationResponse {

    private final String token;

    public AuthenticationResponse(String token) {
        this.token = token;
    }
}
