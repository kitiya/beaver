package com.kitiya.beaver.model;

public enum Province {
    AB ("Alberta"),
    BC ("British Columbia"),
    MB ("Manitoba"),
    NS ("Nova Scotia"),
    ON ("Ontario"),
    QC ("Quebec"),
    SK ("Saskatchewan");

    private final String name;

    Province(String name) {
        this.name = name;
    }
}
