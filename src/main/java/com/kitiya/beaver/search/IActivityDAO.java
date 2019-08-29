package com.kitiya.beaver.search;

import com.kitiya.beaver.data.entity.Activity;

import java.util.List;

public interface IActivityDAO {
    List<Activity> searchActivity(List<SearchCriteria> params);

    void save(Activity entity);
}
