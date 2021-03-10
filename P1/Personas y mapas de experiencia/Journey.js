/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.AfterWork";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/VictorRubia/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Esteban Ramírez",
                Photo: "man.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar para él y su mujer una excursión por Granada durante este fin de semana",
                touch1: "Móvil",
                feel1: "3",
                con1: "no sabe qué tipo de actividad buscar ni en qué plataforma ",
                ima1: "cartoon-phone.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "descarga la app civitatis y se dispone a encontrar una actividad que le llame la atención ",
                touch2: "Móvil(Civitatis)",
                feel2: "4",
                con2: "hay muchas actividades y como todas le llaman la atención debe pensar cuál elegir",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Selecciona una actividad, tiene buen precio y muchísimas opiniones positivas. Esteban debe confiar que las restricciones de movilidad no le supongan un problema y que no le surja un imprevisto.",
                touch3: "Móvil(Civitatis)",
                feel3: "5",
                con3: "Debe consultar las condiciones de cancelación que tiene la actividad.",
                ima3: "cartoon-reading.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se da cuenta que la actividad no es reembolsable, se dispone a buscar otra actividad",
                touch4: "Móvil(Civitatis)",
                feel4: "2",
                con4: "Busca opciones en la modalidad 'Free Tour' más cercanas a donde ellos viven para no ir en coche y así no tener la posibilidad de perder el dinero en caso de reservarlo.",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra varias actividades dentro de esta modalida y le consulta a su mujer cuál prefiere.",
                touch5: "móvil (whatsapp)",
                feel5: "1",
                con5: "Llama a su mujer (whatsapp no responde) para ver cual es su preferencia, tiene que reservar rápido porque las plazas se agotan",
                ima5: "cartoon-phoningangry.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reservar una actividad acorde con sus preferencias",
                touch6: "Móvil(Civitatis)",
                feel6: "4",
                con6: "La modalidad que finalmente han escogido les ha proporcionado una experiencia bastante agradable en la que ellos decidían además que dinero pagar por el tour.",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Diana Fournier",
                Photo: "woman.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con sus amigas para final de curso, tienen que ir cuando hayan acabado todas de examenes",
                touch1: "ordenador",
                feel1: "5",
                con1: "Buscan un turismo de tipo cultural para ver monumentos, por lo que buscan hacer actividades organizadas.",
                ima1: "cartoon-PChappy.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Una de sus amigas le recomienda mirar actividades en Civitatis ya que sabe que es una de las mas usadas en España",
                touch2: "ordenador",
                feel2: "3",
                con2: "Tiene que meterse en Civitatis y buscar actividades en Granada, le preocupa que al ser en Granada las actividades no esten disponibles en su idioma o que sea dificil encontrarlas",
                ima2: "cartoon-PCSurprised.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra muchas actividades gratis o muy baratas para hacer pero se da cuenta de que los guias hablan en ingles y en español no en frances",
                touch3: "ordenador",
                feel3: "1",
                con3: "Como las atividades mas baratas no estan en frances tiene que hablar con sus amigas para ver si quieren gastarse mas dinero para que sean en frances o si les da igual que sean en ingles ya que son graduadas en turismo y entienden el idioma",
                ima3: "cartoon-PCcrying.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Las compañeras no quieren hacerlo en ingles porque al ser un tour cultural muchas palabras no las van a entender por lo tanto va a buscar que opciones hay para grupos en la web de Civitatis",
                touch4: "Móvil (llamada de teléfono)",
                feel4: "3",
                con4: "Buscando en la pagina se da cuenta de que hay una seccion de FAQ y en ellas indica que se puede selecionar el tamaño del grupo a la hora de reservar la actividad de esta forma le hacen un precio ajustado al tamaño de su grupo",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Elige el dia de la actividad, la hora y el tamaño el grupo ",
                touch5: "ordenador(para completar formulario) y movil (para recibir los datos de las compañeras)",
                feel5: "2",
                con5: "Le pide muchos datos de todos los integrantes del grupo y tiene que ir una por una preguntando todos los datos",
                ima5: "cartoon-PChard.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Tras rellenar los datos y reservar, a los pocos dias ya estan en Granada ya que se podia reservar hasta con 24h de antelacion",
                touch6: "Ordenador (reserva OK)",
                feel6: "1",
                con6: "Una de las compañeras no puede ir a la actividad porque le duele mucho la cabeza pero al tener ya reservada la actividad no les permite la devolución del dinero.",
                ima6: "cartoon-KO.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



