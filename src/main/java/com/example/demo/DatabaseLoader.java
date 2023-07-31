package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	//private final InstrumentoRepository repository;
	private final EstudianteRepository repositoryEstudiante;
	private final InstrumentoRepository repositoryInstrumento;

	@Autowired
	public DatabaseLoader(EstudianteRepository repository, InstrumentoRepository repository1) {
		this.repositoryEstudiante = repository;
		this.repositoryInstrumento = repository1;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryInstrumento.save(new Instrumento("Guitarra", "Instrumento de Cuerda", "de madera, con una caja de resonancia y 6 cuerdas templadas"));
		this.repositoryInstrumento.save(new Instrumento("Ukelele", "Instrumento de Cuerda", "de madera, con una caja de resonancia y 4 cuerdas templadas"));
		this.repositoryInstrumento.save(new Instrumento("Melodica", "Instrumento de Viento", "de madera, con una caja de resonancia y 6 cuerdas templadas"));

		this.repositoryEstudiante.save(new Estudiante("Julio Rivero", "20", "72528736"));
	}
}