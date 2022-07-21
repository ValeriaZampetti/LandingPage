import React from "react";

export const Card = () => {
	return (
		<div className="container">
			<div className="justifi-content-center m-0 row my-3">
				<div className="card">
					<div className="card-body">
						<h1 className="card-title fs-1">{"Bienvenidos!"}</h1>
						<p className="card-text fs-5">
							{
								"A continuacion veran fotos de perritos y comida"
							}
						</p>
						<a href="#" className="btn btn-primary fs-5">
							{"Seleccione el boton"}
						</a>
					</div>
				</div>
			</div>
			<div className="d-sm-flex">
				<div className="card text-center">
					<img
						src="https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="My Dog">{"My beatiful dog"}</h4>
						<p className="card-text">
							{
								"My dog is a programmer"
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Toca para ver más fotos de mi perro!"}
						</a>
					</div>
				</div>
				<div className="card mx-1 text-center">
					<img
						src="https://assets.puzzlefactory.pl/puzzle/349/536/original.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"El perro de mi hermana"}</h4>
						<p className="card-text">
							{
								"El perro de mi hermana es muy tierno, ama jugar en la grama"
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Selecciona para ver más al perro de mi hermana!"}
						</a>
					</div>
				</div>
				<div className="card me-1 text-center">
					<img
						src="https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"El perro de mi vecino"}</h4>
						<p className="card-text">
							{
								"Es el perro más cariñoso que he visto, se llama Danco."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Selecciona para ver más fotos de Danco!"}
						</a>
					</div>
				</div>
				<div className="card text-center">
					<img
						src="https://www.recetas-arabes.com/base/stock/Post/2-image/2-image_web.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body ">
						<h4 className="card-title">{"Mi comida Favorita"}</h4>
						<p className="card-text">
							{
								"Mi comida favorita es la comida arabe, esta es una foto de cuando fui a comer junto a mi familia."
							}
						</p>
						<a href="#" className="btn btn-primary mx-auto">
							{"Selecciona para ver más de mis comidas!"}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};