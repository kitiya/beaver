package com.kitiya.beaver.controller;

import com.kitiya.beaver.model.Activity;
import com.kitiya.beaver.model.ActivityType;
import com.kitiya.beaver.repository.ActivityRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.hamcrest.CoreMatchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(ActivityController.class)
public class ActivityControllerTest {

    @MockBean
    private ActivityRepository activityRepository;

    @Autowired
    private MockMvc mockMvc;

    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    @Test
    public void getActivitiesByDate() throws Exception {
        Date dateParam = DATE_FORMAT.parse("2019-08-15");
        List<Activity> mockActivityList = new ArrayList<>();
        Activity mockActivity = new Activity();
        mockActivity.setName("Test Activity");
        mockActivity.setType(ActivityType.MUSIC);
        mockActivity.setDescription("test description");
        mockActivity.setStartDate(DATE_FORMAT.parse("2019-08-01"));
        mockActivity.setEndDate(DATE_FORMAT.parse("2019-08-31"));

        mockActivityList.add(mockActivity);

        given(activityRepository.findByDate(dateParam)).willReturn(mockActivityList);
        this.mockMvc.perform(get("/api/activities/date/2019-08-15")).andExpect(status().isOk()).andExpect(content().string(containsString("Test Activity")));
    }
}
