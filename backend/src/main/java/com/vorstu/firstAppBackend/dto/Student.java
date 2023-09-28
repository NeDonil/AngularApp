package com.vorstu.firstAppBackend.dto;

import lombok.Data;

@Data
public class Student {
    public Student(){}

    private String name;
    private String lastname;
    private String phoneNumber;
}
