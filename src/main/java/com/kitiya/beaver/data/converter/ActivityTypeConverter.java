package com.kitiya.beaver.data.converter;

import com.kitiya.beaver.data.entity.ActivityType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class ActivityTypeConverter implements AttributeConverter<ActivityType, String> {

    @Override
    public String convertToDatabaseColumn(ActivityType activityType) {
        return activityType.getCode();
    }

    @Override
    public ActivityType convertToEntityAttribute(String dbData) {
        return ActivityType.fromCode(dbData);
    }
}
