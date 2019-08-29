package com.kitiya.beaver.search;

import com.kitiya.beaver.data.entity.ActivityType;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.function.Consumer;


public class ActivitySearchQueryCriteriaConsumer implements Consumer<SearchCriteria> {
    private Predicate predicate;
    private CriteriaBuilder builder;
    private Root root;


    public ActivitySearchQueryCriteriaConsumer(Predicate predicate, CriteriaBuilder builder, Root root) {
        this.predicate = predicate;
        this.builder = builder;
        this.root = root;
    }

    @Override
    public void accept(SearchCriteria param) {
        if (param.getOperation().equalsIgnoreCase(">")) {
            predicate = builder.and(predicate, builder.greaterThanOrEqualTo(root.get(param.getKey()), param.getValue().toString()));
        } else if (param.getOperation().equalsIgnoreCase("<")) {
            predicate = builder.and(predicate, builder.lessThanOrEqualTo(root.get(param.getKey()), param.getValue().toString()));
        } else if (param.getOperation().equalsIgnoreCase(":")) {
            if (root.get(param.getKey()).getJavaType() == String.class ) {
//                if (root.get(param.getKey()).toString().equalsIgnoreCase("TYPE")) {
//                    System.out.println("ENUM");
//                    predicate = builder.and(predicate, builder.like(root.get(param.getKey()), "%" + ActivityType.SPORT + "%"));
//                } else {
//                    System.out.println("String");
                    predicate = builder.and(predicate, builder.like(root.get(param.getKey()), "%" + param.getValue() + "%"));
//                }

            } else {
                predicate = builder.and(predicate, builder.equal(root.get(param.getKey()), param.getValue()));
            }
        }
    }

    public Predicate getPredicate() {
        return predicate;
    }
}
