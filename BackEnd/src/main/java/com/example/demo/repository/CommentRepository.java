package com.example.demo.repository;

import com.example.demo.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query("""
            Select c from Comment c where c.offer.id = :id
            """)
    List<Comment> findCommentsByOfferId(@Param("id") Integer id);
}
