package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "estudiantes", path = "estudiantes")
public interface EstudianteRepository extends CrudRepository<Estudiante, Long> {
    
}
