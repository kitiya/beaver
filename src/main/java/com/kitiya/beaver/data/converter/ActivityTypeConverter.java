package com.kitiya.beaver.data.converter;

import com.kitiya.beaver.data.entity.ActivityType;

import java.beans.PropertyEditorSupport;

public class ActivityTypeConverter extends PropertyEditorSupport {
    public void setAsText(final String text) throws IllegalArgumentException {
        setValue(ActivityType.fromValues(text));
    }
}
