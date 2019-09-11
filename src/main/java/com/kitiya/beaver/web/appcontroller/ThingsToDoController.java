package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.data.entity.ThingsToDo;
import com.kitiya.beaver.data.repository.ThingsToDoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ThingsToDoController {
    private ThingsToDoRepository thingsToDoRepository;

    public ThingsToDoController(ThingsToDoRepository thingsToDoRepository) {
        this.thingsToDoRepository = thingsToDoRepository;
    }

    @GetMapping("/things-to-do")
    List<ThingsToDo> getAllThingsToDos() {

        //return thingsToDoRepository.findAll();
        return thingsToDoRepository.findAllByOrderByName();
    }

    @GetMapping("/things-to-do/{id}")
    ThingsToDo getThingsToDoById(@PathVariable Long id) {
        return thingsToDoRepository.findById(id).orElse(null);
    }
}
