package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.data.entity.Review;
import com.kitiya.beaver.data.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ReviewController {

    ReviewRepository reviewRepository;

    @Autowired
    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping("/reviews")
    Iterable<Review> getAllReview() {
        return reviewRepository.findAll();
    }

    @RequestMapping(value="reviews/search", params="thingsToDoId")
    @ResponseBody
    Iterable<Review> searchByThingToDoId(@RequestParam(value="thingsToDoId") Long thingsToDoId) {
        return reviewRepository.findByThingToDoId(thingsToDoId);
    }
}
