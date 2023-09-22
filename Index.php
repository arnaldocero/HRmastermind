<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>>HR mastermind</title>
</head>
<body>
    <div class="container">
    <div class="card">
    <div class="card-body card-missueno">
    <h1>HR mastermind</h1>
        <div id="question-container">
            <p id="question">Pregunta:</p>
            <ul id="answers">
                <li><button id="answer1" ></button></li>
                <li><button id="answer2"></button></li>
                <li><button id="answer3"></button></li>
                <li><button id="answer4"></button></li>
            </ul>
        </div>
        <div id="result"></div>
        <button id="next">Siguiente Pregunta</button>     

    </div>
    </div>
        
    </div>
    <!-- Modal -->
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="cerrarModal()">&times;</span>
            <img id="modalImage" class="modal-image" src="" alt="Imagen del Modal">
            <p id="modalText">Texto dinámico</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
