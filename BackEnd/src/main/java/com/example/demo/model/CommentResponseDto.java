package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentResponseDto {

    private Integer id;

    private String message;

    private Integer UserId;

    private String username;

    private Integer offerId;

    public CommentResponseDto(Integer id,
                              String message,
                              Integer userId,
                              String username,
                              Integer offerId) {
        this.id = id;
        this.message = message;
        this.UserId = userId;
        this.username = username;
        this.offerId = offerId;
    }
}
