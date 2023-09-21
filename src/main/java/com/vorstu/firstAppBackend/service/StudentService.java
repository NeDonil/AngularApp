package com.vorstu.firstAppBackend.service;

import com.vorstu.firstAppBackend.entity.StudentEntity;
import com.vorstu.firstAppBackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;
    public List<StudentEntity> getAll(){
       List<StudentEntity> studentArray = new ArrayList<>();

       Iterable<StudentEntity> result = studentRepository.findAll();
       result.forEach(studentArray::add);

       return studentArray;
    }

    public StudentEntity createStudent(StudentEntity student){
        return studentRepository.save(student);
    }
}
