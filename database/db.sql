USE DATABASE viverocoyoacan;

CREATE TABLE Trabajadores(
    tabajadorId SERIAL PRIMARY KEY, 
    nameTrabajador VARCHAR (20) NOT NULL,
    apPatTrabajador VARCHAR (30) NOT NULL,
    apMatTrabajador VARCHAR (20) NOT NULL,
    direccionTrabajador VARCHAR (64) NOT NULL,
    telTrabajador VARCHAR (10) NOT NULL,
    emailTrabajador VARCHAR (64) NOT NULL
);
/*carga de usuarios*/
INSERT INTO Trabajadores(nameTrabajador, apPatTrabajador, apMatTrabajador, direccionTrabajador, telTrabajador, emailTrabajador)
    VALUES('Efren', 'Banini', 'Salazar', 'Av tepozanes #16 NezaYork', '5566471525', 'bananini@gmail.com');
INSERT INTO Trabajadores(nameTrabajador, apPatTrabajador, apMatTrabajador, direccionTrabajador, telTrabajador, emailTrabajador)
    VALUES('Angelica Rosario', 'García', 'Reyes', 'Av. Río de los remedios, #61, San Juan Ixhuantepec', '5635737424', 'anggie@gmail.com');
/*PPRUEBAS*/
SELECT *FROM Trabajadores;


CREATE TABLE Plantas(
	idPlanta SERIAL PRIMARY KEY,
    namePlanta VARCHAR(20),
    nameCient VARCHAR(30),
    typePlanta VARCHAR(15),
    tamPlanta VARCHAR(15),
    typeLuz VARCHAR(7),
    frecuenciaRiego VARCHAR(20),
    precioPlanta NUMERIC(4)
);

INSERT INTO Plantas(namePlanta, nameCient, typePlanta, tamPlanta, typeLuz, frecuenciaRiego, precioPlanta)
    VALUES("Noche buena", "Uphorbia Pulcherrima", "ornamental", "35.5", "indirecta", "A diario", 150)

