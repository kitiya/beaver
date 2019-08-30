package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Provider;
import com.kitiya.beaver.data.entity.QProvider;
import com.querydsl.core.types.dsl.StringExpression;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;
import org.springframework.data.querydsl.binding.SingleValueBinding;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProviderRepository extends JpaRepository<Provider, Long>, QuerydslPredicateExecutor<Provider>, QuerydslBinderCustomizer<QProvider> {
    Provider findByName(String name);

    @Query("SELECT MIN(id) AS id, name FROM Provider GROUP BY name ORDER BY name")
    Iterable<Provider> getAllProviderNames();

    @Override
    default public void customize(final QuerydslBindings bindings, final QProvider root) {
        bindings.bind(String.class)
                .first((SingleValueBinding<StringPath, String>) StringExpression::containsIgnoreCase);
        bindings.excluding(root.email);
    }
}
