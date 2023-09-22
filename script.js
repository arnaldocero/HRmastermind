const questions = [
    {
        question: "Un buen empleado solicita trabajar de forma remota debido a responsabilidades familiares. ¿Qué decisión toma?",
        answers: ["Conceder la solicitud de trabajo remoto.", "Negar la solicitud y sugerir horarios flexibles.", "Establecer un período de prueba para evaluar el trabajo remoto.", "Ofrecer tiempo libre adicional en lugar de trabajo remoto."],
        correctAnswer: "Establecer un período de prueba para evaluar el trabajo remoto."
    },
    {
        question: "Un empleado con un excelente desempeño solicita un aumento de sueldo ¿Qué haría usted?",
        answers: ["Estar de acuerdo con el aumento de sueldo.", "Negar el aumento debido al presupuesto limitado.", "Ofrecer un bono en lugar de un aumento de salario.", "Establecer nuevas metas y no considerar el aumento."],
        correctAnswer: "Ofrecer un bono en lugar de un aumento de salario."
    },
    {
        question: "Dos miembros del equipo tienen un conflicto personal. ¿Qué acción pasa a tomar usted?",
        answers: ["Ignorar el conflicto y asumir que se resolverá solo.", "Cambiar de departamento a uno de los empleados para separarlos.", "Conversar con cada empleado por separado y buscar una solución.", "Tomar medidas disciplinarias inmediatas."],
        correctAnswer: "Conversar con cada empleado por separado y buscar una solución."
    },
    {
        question: "Es hora de realizar las evaluaciones de desempeño anuales de los empleados. Debes decidir cómo abordar estas revisiones.",
        answers: ["Realizar evaluaciones de desempeño rápidas sin una retroalimentación detallada.", "Posponer las evaluaciones de desempeño indefinidamente debido a la carga de trabajo", "Programar reuniones de revisión de desempeño individuales con cada empleado.", "Realizar evaluaciones de desempeño pero sin dar aumentos salariales."],
        correctAnswer: "Programar reuniones de revisión de desempeño individuales con cada empleado"
    },
    {
        question: "Su empresa está creciendo y necesita contratar un nuevo empleado. ¿Qué decisión tomarías?",
        answers: ["Contratar al primer candidato que cumpla con los requisitos.", "Realizar una evaluación exhaustiva de los candidatos y seleccionar al mejor.", "Contratar a un conocido que busca trabajo, aunque no sea el más calificado.", "Externalizar el proceso de contratación a una empresa de selección de personal."],
        correctAnswer: "Realizar una evaluación exhaustiva de los candidatos y seleccionar al mejor."
    },
    {
        question: "Se ha presentado una queja de acoso laboral en el lugar de trabajo. ¿Qué harías?",
        answers: ["Ignorar la queja para evitar conflictos.", "Realizar una investigación imparcial para determinar la validez de la queja.", "Sancionar al empleado acusado sin investigar.", "Tomar medidas legales sin una investigación completa."],
        correctAnswer: "Realizar una investigación imparcial para determinar la validez de la queja."
    },
    {
        question: "Es hora de realizar las evaluaciones de desempeño anuales de sus empleados. ¿Qué opción eliges?",
        answers: ["Aumentar los salarios de todos los empleados para motivarlos.", "Realizar evaluaciones objetivas y proporcionar retroalimentación específica.", "Ignorar las evaluaciones este año debido a la carga de trabajo.", "Reducir los salarios de los empleados con bajo desempeño."],
        correctAnswer: "Realizar evaluaciones objetivas y proporcionar retroalimentación específica."
    },
    {
        question: "Uno de sus empleados clave ha anunciado su renuncia. ¿Cómo reaccionaría?",
        answers: ["Ignorar la renuncia y esperar a que el empleado cambie de opinión.", "Buscar un reemplazo de inmediato.", "Ofrecer un aumento sustancial para retener al empleado.", "Elaborar un plan de sucesión y gestionar la transición."],
        correctAnswer: "Elaborar un plan de sucesión y gestionar la transición."
    },
    {
        question: "La empresa está experimentando dificultades financieras y necesita reducir costos. Debes tomar una decisión sobre cómo abordar esta situación con respecto al personal.",
        answers: ["Realizar despidos masivos.", "Implementar un programa de reducción de jornada laboral con reducción salarial.", "Incentivar a los empleados a tomar vacaciones no remuneradas.", "Congelar las contrataciones futuras y reducir el presupuesto de capacitación."],
        correctAnswer: "Implementar un programa de reducción de jornada laboral con reducción salarial."
    },
    {
        question: "La empresa está considerando implementar una política de trabajo remoto a largo plazo. ¿Qué hace?",
        answers: ["Realizar una encuesta a los empleados para obtener su opinión.", "Implementarla de inmediato para satisfacer a los empleados.", "Rechazar la idea debido a preocupaciones de control.", "Probarla en un equipo pequeño antes de implementarla por completo."],
        correctAnswer: "Realizar una encuesta a los empleados para obtener su opinión."
    },
    
    // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next");
const nextButton1 = document.getElementById("botonsigiengenera");
const sigButton = document.getElementById("flechimage");
const titulotext = document.getElementById("titulo");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestion.question}`;
    titulotext.textContent = `Pregunta ${currentQuestionIndex + 1}`;
    
    // Limpia las respuestas anteriores
    answersElement.innerHTML = "";
    
    // Crea botones para las respuestas
    let i=1;
    currentQuestion.answers.forEach((answer, index) => {
        /*const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.addEventListener("click", () => checkAnswer(answer, currentQuestion.correctAnswer));
        answersElement.appendChild(answerButton);*/
        const Buttonanswr = document.getElementById("answr"+i);
        Buttonanswr.textContent = answer;
        const Buttonanswrd = document.getElementById("preguntas"+i);
        Buttonanswrd.addEventListener("click", () => checkAnswer(answer, currentQuestion.correctAnswer));
        i++;
    });
    
    // Oculta el botón "Siguiente Pregunta" después de responder
    nextButton.style.display = "none";
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        
        var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalText = document.getElementById('modalText');

    // Configura la imagen y el texto dinámico
    modalImage.src = 'happy.gif'; // Reemplaza 'ruta_de_la_imagen.jpg' con la URL de tu imagen
    document.getElementById('demo').play();
      document.getElementById('demo').volume = 0.9;
      setTimeout(() => {
        document.getElementById('demo').pause();
        document.getElementById('demo').currentTime=0;
      }, 3500);
    modalText.innerHTML = '';

    modal.style.display = 'block';
    } else {
        veropcion(selectedAnswer);
    }
    
    // Muestra el botón "Siguiente Pregunta"
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    resultElement.textContent = "";
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Final!.";
        answersElement.innerHTML = "";
        nextButton.style.display = "none";
        document.getElementById("preguntas1").style.display = "none";
         document.getElementById("preguntas2").style.display = "none";
         document.getElementById("preguntas3").style.display = "none";
         document.getElementById("preguntas4").style.display = "none";
    }
});
sigButton.addEventListener("click", () => {
    currentQuestionIndex++;
    resultElement.textContent = "";
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "¡Final.";
        answersElement.innerHTML = "";
        nextButton.style.display = "none";
         document.getElementById("preguntas1").style.display = "none";
         document.getElementById("preguntas2").style.display = "none";
         document.getElementById("preguntas3").style.display = "none";
         document.getElementById("preguntas4").style.display = "none";
    }
});
nextButton1.addEventListener("click", () => {
    document.getElementById('question-container').style.display='block';
    document.getElementById('pmc').style.backgroundImage='url(fondo.jpg)';
    nextButton1.style.display="none";
    document.getElementById('titulo').style.display='block';
    document.getElementById('logodiv').style.display='block';
});

function mostrarModal(tipo) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalText = document.getElementById('modalText');

    // Configura la imagen y el texto dinámico
    modalImage.src = 'ruta_de_la_imagen.jpg'; // Reemplaza 'ruta_de_la_imagen.jpg' con la URL de tu imagen
    modalText.innerHTML = 'Este es un texto dinámico para el modal.';

    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Cierra el modal haciendo clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function veropcion(selectedAnswer) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalText = document.getElementById('modalText');

    // Configura la imagen y el texto dinámico
    modalImage.src = 'sad.gif'; // Reemplaza 'ruta_de_la_imagen.jpg' con la URL de tu imagen
    document.getElementById('demo2').play();
      document.getElementById('demo2').volume = 0.9;
      setTimeout(() => {
        document.getElementById('demo2').pause();
        document.getElementById('demo2').currentTime=0;
      }, 3500);
    if(selectedAnswer=='Conceder la solicitud de trabajo remoto.'){
        modalText.innerHTML = 'Conceder la solicitud de inmediato podría tener un impacto desconocido en la productividad.';
    }else if (selectedAnswer=='Negar la solicitud y sugerir horarios flexibles.'){
        modalText.innerHTML = 'Negar la solicitud sin alternativas podría desmotivar al empleado.';
    }else if (selectedAnswer=='Ofrecer tiempo libre adicional en lugar de trabajo remoto.'){
        modalText.innerHTML = 'Esto afectaría la disposición de los empleados.';
    }else if(selectedAnswer=='Estar de acuerdo con el aumento de sueldo.'){
        modalText.innerHTML = 'Conceder el aumento de sueldo afecta el presupuesto.';
    }else if (selectedAnswer=='Negar el aumento debido al presupuesto limitado.'){
        modalText.innerHTML = 'Negar el aumento desmotivaría al empleado.';
    }else if (selectedAnswer=='Establecer nuevas metas y no considerar el aumento.'){
        modalText.innerHTML = 'El empleado presentaría un desempeño bajo debido a la desmotivación.';
    }else if(selectedAnswer=='Ignorar el conflicto y asumir que se resolverá solo.'){
        modalText.innerHTML = 'Ignorar el conflicto puede empeorar la situación.';
    }else if (selectedAnswer=='Cambiar de departamento a uno de los empleados para separarlos.'){
        modalText.innerHTML = 'Cambiar de departamento puede ser una solución extrema';
    }else if (selectedAnswer=='Tomar medidas disciplinarias inmediatas.'){
        modalText.innerHTML = 'Tomar medidas disciplinarias sin entender  puede ser injusto y empeorar el ambiente laboral.';
    }else if(selectedAnswer=='Realizar evaluaciones de desempeño rápidas sin una retroalimentación detallada.'){
        modalText.innerHTML = 'Programar reuniones de revisión de desempeño individuales con cada empleado.';
    }else if (selectedAnswer=='Posponer las evaluaciones de desempeño indefinidamente debido a la carga de trabajo.'){
        modalText.innerHTML = 'La falta de evaluaciones puede llevar a la insatisfacción de los empleados y problemas de desarrollo.';
    }else if (selectedAnswer=='Realizar evaluaciones de desempeño pero sin dar aumentos salariales.'){
        modalText.innerHTML = 'Puede afectar la motivación de los empleados y la retención del talento.';
    }else if(selectedAnswer=='Contratar al primer candidato que cumpla con los requisitos.'){
        modalText.innerHTML = 'Contratar al primer candidato puede no ser la elección más acertada.';
    }else if (selectedAnswer=='Contratar a un conocido que busca trabajo, aunque no sea el más calificado.'){
        modalText.innerHTML = 'Contratar a alguien no calificado podría afectar la productividad.';
    }else if (selectedAnswer=='Externalizar el proceso de contratación a una empresa de selección de personal.'){
        modalText.innerHTML = 'Externalizar la contratación puede ser costoso y no garantizar la calidad.';
    }else if(selectedAnswer=='Ignorar la queja para evitar conflictos.'){
        modalText.innerHTML = 'Ignorar la queja puede crear un ambiente laboral tóxico y podría llevar a demandas.';
    }else if (selectedAnswer=='Sancionar al empleado acusado sin investigar.'){
        modalText.innerHTML = 'Sancionar sin investigación podría ser injusto y resultar en problemas legales.';
    }else if (selectedAnswer=='Tomar medidas legales sin una investigación completa.'){
        modalText.innerHTML = 'Tomar medidas legales sin una investigación completa puede ser prematuro y costoso.';
    }else if(selectedAnswer=='Aumentar los salarios de todos los empleados para motivarlos.'){
        modalText.innerHTML = 'Aumentar los salarios sin justificación puede afectar negativamente el presupuesto.';
    }else if (selectedAnswer=='Ignorar las evaluaciones este año debido a la carga de trabajo.'){
        modalText.innerHTML = 'Ignorar las evaluaciones podría disminuir la motivación y el desarrollo.';
    }else if (selectedAnswer=='Reducir los salarios de los empleados con bajo desempeño.'){
        modalText.innerHTML = 'Reducir salarios sin un proceso adecuado puede ser injusto y perjudicial para su ambiente laboral';
    }else if(selectedAnswer=='Ignorar la renuncia y esperar a que el empleado cambie de opinión.'){
        modalText.innerHTML = 'Ignorar la renuncia podría resultar en una pérdida de conocimiento crítico.';
    }else if (selectedAnswer=='Buscar un reemplazo de inmediato.'){
        modalText.innerHTML = 'Buscar un reemplazo sin un plan puede llevar a contrataciones apresuradas.';
    }else if (selectedAnswer=='Ofrecer un aumento sustancial para retener al empleado.'){
        modalText.innerHTML = 'Ofrecer un aumento sin considerar el plan a largo plazo puede no ser sostenible.';
    }else if(selectedAnswer=='Realizar despidos masivos.'){
        modalText.innerHTML = 'Los empleados que mantienen sus empleos se les reduce su moral y el estrés en el lugar de trabajo aumenta.';
    }else if (selectedAnswer=='Incentivar a los empleados a tomar vacaciones no remuneradas.'){
        modalText.innerHTML = 'Esta decisión es tanto ética como legalmente incorrecta';
    }else if (selectedAnswer=='Congelar las contrataciones futuras y reducir el presupuesto de capacitación.'){
        modalText.innerHTML = 'Es importante comunicar de manera efectiva esta decisión para minimizar la resistencia de los empleados.';
    }else if(selectedAnswer=='Implementarla de inmediato para satisfacer a los empleados.'){
        modalText.innerHTML = 'Implementar de inmediato podría tener implicaciones no previstas.';
    }else if (selectedAnswer=='Rechazar la idea debido a preocupaciones de control.'){
        modalText.innerHTML = 'Rechazar sin considerar la opinión de los empleados podría generar descontento.';
    }else if (selectedAnswer=='Probarla en un equipo pequeño antes de implementarla por completo.'){
        modalText.innerHTML = 'Realizar una encuesta es la mejor opción, pues tiene la opinión de todos los empleados.';
    }
    

    modal.style.display = 'block';
}
      
loadQuestion();
