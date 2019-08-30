package com.kitiya.beaver.search;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class ProviderPredicatesBuilder {
    private List<SearchCriteria> params;

    public ProviderPredicatesBuilder() {
        params = new ArrayList<>();
    }

    public ProviderPredicatesBuilder with(String key, String operation, Object value) {
        params.add(new SearchCriteria(key, operation, value));
        return this;
    }

    public BooleanExpression build() {
        if (params.size() == 0) {
            return null;
        }

        final List<BooleanExpression> predicates = params.stream().map(param -> {
            ProviderPredicate predicate = new ProviderPredicate(param);
            return predicate.getPredicate();
        }).filter(Objects::nonNull).collect(Collectors.toList());

        BooleanExpression result = Expressions.asBoolean(true).isTrue();
        for (BooleanExpression predicate: predicates) {
            result = result.and(predicate);
        }
        return result;
    }

    static class BooleanExpressionWrapper {
        private BooleanExpression result;

        public BooleanExpressionWrapper(final BooleanExpression result) {
            super();
            this.result = result;
        }

        public BooleanExpression getResult() {
            return result;
        }
        public void setResult(BooleanExpression result) {
            this.result = result;
        }
    }
}
