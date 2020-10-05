var fortuneCookies = [
    "Conquista tus sueños o ellos te conquistarán",
    "Los ríos necesitan de la primavera",
    "No le temas a lo desconocido",
    "Tendrás una agradable sorpresa",
    "Cuando sea posible, mantenlo simple"
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random()* fortuneCookies.length);
    return fortuneCookies[idx];
};