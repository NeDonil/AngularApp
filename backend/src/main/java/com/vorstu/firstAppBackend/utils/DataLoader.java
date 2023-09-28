package com.vorstu.firstAppBackend.utils;

import com.vorstu.firstAppBackend.entity.StudentEntity;
import com.vorstu.firstAppBackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private StudentRepository studentRepository;

    @Autowired
    public void setStudentRepository(StudentRepository repository) {
        this.studentRepository = repository;
    }

    public void run(ApplicationArguments args) {
        studentRepository.save(new StudentEntity("Dima", "Rudnev"));
        studentRepository.save(new StudentEntity("Danil", "Svinoukhov"));
        studentRepository.save(new StudentEntity("Ilya", "Ignathinko"));
        studentRepository.save(new StudentEntity("Andrew", "Abramov"));
        studentRepository.save(new StudentEntity("Danil", "Kabup"));
        studentRepository.save(new StudentEntity("Admin", "Admin"));

    }

}