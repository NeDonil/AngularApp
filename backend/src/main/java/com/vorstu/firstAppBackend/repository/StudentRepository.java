package com.vorstu.firstAppBackend.repository;

import com.vorstu.firstAppBackend.entity.StudentEntity;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<StudentEntity, Long> {
}
