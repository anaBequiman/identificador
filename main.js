Webcam.set({
    width:400,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function captura(){
    Webcam.snap(function(data_uri){
        document.getElementById("resulatado").innerHTML = '<img id="imagemCapturada"src="'+data_uri+'"/>';
    });
}
console.log('ml5 version: ', ml5.version);
classificador = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vandi26Xs/model.json', classificadordeImgens);
function classificadordeImgens(){
    console.log("Modelo Carregado :)");
}
function indentificar(){
    imagemIdentificada =  document.getElementById("imagemCapturada");
    classificador.classify(imagemIdentificada,pegarResultado);
}
function pegarResultado(erro, resultado){
    porcentagem = resultado[0].confidence.toFixed(3) * 100 + "%";
    if (erro){
        console.log(erro);
    }
    else{
        console.log(resultado);
        document.getElementById("obj").innerHTML = resultado[0].label ;
        document.getElementById("pct").innerHTML= porcentagem;
    }
}