package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Estudiante {

    private @Id @GeneratedValue Long id;
	private String nombre;
	private String edad;
	private String dni;

    private Estudiante() {}

    public Estudiante(String nombre, String edad, String dni) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
	}

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Estudiante estudiante = (Estudiante) o;
		return Objects.equals(id, estudiante.id) &&
			Objects.equals(nombre, estudiante.nombre) &&
			Objects.equals(edad, estudiante.edad) &&
			Objects.equals(dni, estudiante.dni);
	}

    @Override
	public int hashCode() {

		return Objects.hash(id, nombre, edad, dni);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEdad() {
		return edad;
	}

	public void setEdad(String edad) {
		this.edad = edad;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

    @Override
	public String toString() {
		return "Estudiante{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", categoria='" + edad + '\'' +
			", descripcion='" + dni + '\'' +
			'}';
	}
    
}
