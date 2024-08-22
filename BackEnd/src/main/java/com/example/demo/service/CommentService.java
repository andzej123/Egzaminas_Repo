package com.example.demo.service;

import com.example.demo.exceptions.OfferNotFoundException;
import com.example.demo.mapper.CommentMapper;
import com.example.demo.model.Comment;
import com.example.demo.model.CommentResponseDto;
import com.example.demo.model.Offer;
import com.example.demo.model.User;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.OfferRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final OfferRepository offerRepository;
    private final UserRepository userRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository, OfferRepository offerRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.offerRepository = offerRepository;
        this.userRepository = userRepository;
    }

    public CommentResponseDto addComment(Comment request) {
        User user = userRepository.findByUsername(request.getUser().getUsername()).orElseThrow(
                () -> new UsernameNotFoundException("No user found")
        );

        Offer offer = offerRepository.findById(request.getOffer().getId()).orElseThrow(
                () -> new OfferNotFoundException("Offer not found")
        );
        Comment comment = new Comment();
        comment.setMessage(request.getMessage());
        comment.setOffer(offer);
        comment.setUser(user);
        commentRepository.save(comment);
        return CommentMapper.commentToCommentResponseDto(comment);
    }

    public List<CommentResponseDto> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().map(CommentMapper::commentToCommentResponseDto).collect(Collectors.toList());
    }

    public List<CommentResponseDto> findCommentsByBookId(Integer id) {
        List<Comment> comments = commentRepository.findCommentsByOfferId(id);
        return comments.stream().map(CommentMapper::commentToCommentResponseDto).collect(Collectors.toList());
    }




}
