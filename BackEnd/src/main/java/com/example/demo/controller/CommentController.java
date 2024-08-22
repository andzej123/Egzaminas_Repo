package com.example.demo.controller;

import com.example.demo.model.Comment;
import com.example.demo.model.CommentResponseDto;
import com.example.demo.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/comments")
    public CommentResponseDto addComment(@RequestBody Comment comment) {
        return commentService.addComment(comment);
    }

    @GetMapping("/comments")
    public List<CommentResponseDto> getAllComments() {
        return commentService.getAllComments();
    }

    @GetMapping("/comments/{offerId}")
    public List<CommentResponseDto> findCommentsByOfferId(@PathVariable Integer offerId) {
        return commentService.findCommentsByBookId(offerId);
    }


}
