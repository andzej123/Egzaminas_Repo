package com.example.demo.mapper;

import com.example.demo.model.Comment;
import com.example.demo.model.CommentResponseDto;

public class CommentMapper {

    public static CommentResponseDto commentToCommentResponseDto(Comment comment) {
        return new CommentResponseDto(
                comment.getId(),
                comment.getMessage(),
                comment.getUser().getId(),
                comment.getUser().getUsername(),
                comment.getOffer().getId()
        );
    }
}
