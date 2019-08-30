package com.kitiya.beaver.search;

import com.kitiya.beaver.data.entity.Activity;

import java.util.List;

public interface ActivityDAO_QDSL {
    public Activity save(Activity activity);

    public List<Activity> findActivitiesByNameQueryDSL(String name);

    public List<Activity> findActivitiesByNameAndDescQueryDSL(String name);
}
