package com.kitiya.beaver.data.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.time.DayOfWeek;
import java.util.Date;

@Data
@Entity
@Table(name="schedule")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "schedule")
    @JsonIgnore
    private Activity activity;

    @Temporal(TemporalType.DATE)
    @Column(name = "start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "end_date")
    private Date endDate;

    @Temporal(TemporalType.TIME)
    @Column(name = "start_time")
    @JsonFormat(pattern = "HH:mm:ss")
    private Date startTime;

    @Temporal(TemporalType.TIME)
    @Column(name = "end_time")
    @JsonFormat(pattern = "HH:mm:ss")
    private Date endTime;

    @Enumerated(EnumType.STRING)
    @Column(name="day_of_week")
    private DayOfWeek dayOfWeek;

    public Schedule() {}

    public Schedule(Long id, Activity activity, Date startDate, Date endDate, Date startTime, Date endTime, DayOfWeek dayOfWeek) {
        this.id = id;
        this.activity = activity;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.dayOfWeek = dayOfWeek;
    }

    public Schedule(Date startDate, Date endDate, Date startTime, Date endTime, DayOfWeek dayOfWeek) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.dayOfWeek = dayOfWeek;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public DayOfWeek getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(DayOfWeek dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }
}
