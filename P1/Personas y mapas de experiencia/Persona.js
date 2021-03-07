/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.Afterwork";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Diana Rodriguez",
				Photo: "woman.jpg",
				Quote: "Never Surrender!",
				Age: 24,
				Occupation: "Profesora de Infantil",
				Family: "Su gato Yuumi",
				Location: "Gran Canaria (Madroñal)",
				Character: "Le gusta pasar el tiempo consigo misma y desarrollarse como persona, es demasiado sincera y le cuesta conocer gente nueva ",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1.5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2
			 }
				], 
				Goals: ["Viajar y visitar todos las maravillas del mundo", "Tener una vida estable"],
				Frustrations: ["le gustaria saltarse las normas alguna vez, porque siempre hace lo que es 'lo más correcto' en cada ocasión", "Le gustaría aprender a tocar un istrumento siempre ha querido desde pequeña"],
				Bio: "Nacio en Gran Canaria, vivio toda su infancia alli junto a su madre ya su hermano menor. Estudio y fue a la universidad, no le fue dificil elegir lo que queria estudiar ya que los niños siempre le han gustado, su gran paciencia, sus dotes para animar y tratar con cariño hacen que sea idoneo para ella. Ahora esta como profesora de practicas en un colegio de infantil. Aqui tambien ha conocido a otros profesores y se ha creado un bonito circulo de amigos con los que sale y disfruta su tiempo libre, por eso quiere quedarse a trabajar indefinidamente en este centro ya que su vida ya gira en torno a el.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3.5 },
					{ Name: "Software", Value: 1.5 }
					
				], 
                Contextos: "Necesita darse un regalo a si misma y un viaje sola es lo mejor, tanto para desconectar de la vida cotidiana como para buscar algo nuevo que se la cambie",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4.5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Esteban Ramírez",
				Photo: "man.jpg",
				Quote: "Sólo se vive una vez, pero si lo haces bien, una vez es suficiente",
				Age: 34,
				Occupation: "Inspector de bomberos",
				Family: "En una relación formal. Familia tradicional, un hermano menor.",
				Location: "Valencia",
				Character: "Sociable y leal, pero suele ser bastante competitivo.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3.5 }
				], 
				Goals: ["Aprender a hablar inglés.", "Ver a mis amigos con mayor frecuencia.", "Conocer sitios nuevos.", "Viajar a un país desconocido."],
				Frustrations: ["El trabajo le ocupa mucho tiempo.", "No ser el mejor en todo lo que hace.", "No poder salvar siempre todas las vidas.", "No se reconozca suficientemente su trabajo."],
				Bio: "Esteban nació en Sevilla en un barrio humilde. Es el hijo mayor y sus padres se dedican a la hostelería. Su deseo por ayudar a los demás y por tener buena complexión física le llevó a opositar para bombero en su ciudad. Mientras intentaba aprobarlas, trabajaba como interino en el puesto de bomberos de su distrito. Cuando aprobó oposiciones tuvo que aceptar la plaza en Valencia, por lo que se mudó a la ciudad con 27 años. Esteban tiene un carácter sociable y muy amable, siempre le ha encantado conocer gente nueva. Sin embargo, el ser muy competitivo le ha supuesto una barrera a la hora de conservar a sus amigos. Una de sus aficiones preferidas es viajar con su mujer, que se casaron cuando tenia 30 años. Esteban tiene un grupo de amigos del trabajo con los que suele hacer actividades deportivas diversas, entre las cuales suelen ir a torneos y competiciones que se realizan. Esta planeando con su mujer tener hijos próximamente, por lo que estan bastante ilusionados.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3.5 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Esteban lleva viviendo en Valencia unos pocos años y nunca ha tenido tiempo para explorar la ciudad. Como su mujer tampoco conocía Valencia antes de mudarse con su actual marido, ambos han decidido hacer más actividades juntos. Por ello, quieren visitar todos los rincones de su ciudad y, a la vez, están abiertos a conocer a gente que tengan su misma afición por el turismo y el viajar para poder, en un futuro, contar con ellos para realizar viajes." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1.5 },
					{ Name: "Online & Social Media", Value: 2.5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4.5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])