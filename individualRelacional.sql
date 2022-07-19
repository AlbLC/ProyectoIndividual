#DROP DATABASE individualRelacional;


CREATE DATABASE individualRelacional;

USE individualRelacional;

CREATE TABLE Usuarios (
id INT AUTO_INCREMENT,
nombre VARCHAR(300) NOT NULL,
apellido VARCHAR(300) NOT NULL,
dni CHAR(9) UNIQUE NOT NULL,
email VARCHAR(300),
direccion VARCHAR(300),
telefono VARCHAR(15),
contrasena VARCHAR(300) NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM Usuarios;


CREATE TABLE Pedidos (
id INT AUTO_INCREMENT,
fecha DATE NOT NULL,
hora TIME NOT NULL,
PRIMARY KEY(id)
);   


CREATE TABLE Usuarios_Pedidos(
id INT AUTO_INCREMENT,
fk_id_usuario INT NOT NULL,
fk_id_pedido INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(fk_id_usuario) REFERENCES Usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE, 
FOREIGN KEY(fk_id_pedido) REFERENCES Pedidos(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Repuestos (
id INT AUTO_INCREMENT,
marca VARCHAR(300) NOT NULL,
modelo VARCHAR(300) NOT NULL,
tipoRepuesto VARCHAR(300) NOT NULL,
precio VARCHAR(300) NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM Repuestos;

INSERT INTO Repuestos VALUES(null, "Apple", "Iphone11Pro", "Pantalla", "79€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone11Pro", "FlexCarga", "49€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone11Pro", "Pcb", "299€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone11Pro", "Chasis", "149€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone12Pro", "Pantalla", "149€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone12Pro", "FlexCarga", "69€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone12Pro", "Pcb", "399€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone12Pro", "Chasis", "199€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone13Pro", "Pantalla", "199€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone13Pro", "FlexCarga", "79€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone13Pro", "Pcb", "499€");
INSERT INTO Repuestos VALUES(null, "Apple", "Iphone13Pro", "Chasis", "249€");


CREATE TABLE Pedidos_Repuestos(
id INT AUTO_INCREMENT,
fk_id_repuesto INT NOT NULL,
fk_id_pedido INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(fk_id_repuesto) REFERENCES Repuestos(id) ON UPDATE CASCADE ON DELETE CASCADE, 
FOREIGN KEY(fk_id_pedido) REFERENCES Pedidos(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Facturas (
id INT AUTO_INCREMENT,
nombre VARCHAR(300) NOT NULL,
apellido VARCHAR(300) NOT NULL,
dni CHAR(9) UNIQUE NOT NULL,
email VARCHAR(300),
direccion VARCHAR(300),
telefono VARCHAR(15),
fk_id_pedido INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(fk_id_pedido) REFERENCES Pedidos(id) ON UPDATE CASCADE ON DELETE CASCADE
);



CREATE TABLE Reparaciones (
id INT AUTO_INCREMENT,
marca VARCHAR(300) NOT NULL,
modelo VARCHAR(300) NOT NULL,
precio VARCHAR(300),
email VARCHAR(300),
descripcion text,
fk_id_pedido INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(fk_id_pedido) REFERENCES Pedidos(id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE Almacen (
id INT AUTO_INCREMENT,
marca VARCHAR(300) NOT NULL,
modelo VARCHAR(300) NOT NULL,
precio VARCHAR(300),
tipoRepuesto VARCHAR(300),
PRIMARY KEY(id)
);

CREATE TABLE Reparaciones_Almacen(
id INT AUTO_INCREMENT,
fk_id_reparacion INT NOT NULL,
fk_id_almacen INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(fk_id_reparacion) REFERENCES Reparaciones(id) ON UPDATE CASCADE ON DELETE CASCADE, 
FOREIGN KEY(fk_id_almacen) REFERENCES Almacen(id) ON UPDATE CASCADE ON DELETE CASCADE
);




