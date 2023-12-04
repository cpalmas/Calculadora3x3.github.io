function calcular(){
    var a11=Number(document.getElementById('x11').value);
    var a12=Number(document.getElementById('x12').value);
    var a13=Number(document.getElementById('x13').value);
    var b1=Number(document.getElementById('F_1').value);

    var a21=Number(document.getElementById('x21').value);
    var a22=Number(document.getElementById('x22').value);
    var a23=Number(document.getElementById('x23').value);
    var b2=Number(document.getElementById('F_2').value);

    var a31=Number(document.getElementById('x31').value);
    var a32=Number(document.getElementById('x32').value);
    var a33=Number(document.getElementById('x33').value);
    var b3=Number(document.getElementById('F_3').value);

    
// Primer Bloque 1.1
document.getElementById('B1.1.1B').innerHTML =b1;
document.getElementById('X1.2.1X').innerHTML =a12;
document.getElementById('X1.3.1X').innerHTML =a13;
document.getElementById('B1.1.2B').innerHTML =b2;
document.getElementById('X1.2.2X').innerHTML =a22;
document.getElementById('X1.3.2X').innerHTML =a23;
document.getElementById('B1.1.3B').innerHTML =b3;
document.getElementById('X1.2.3X').innerHTML =a32;
document.getElementById('X1.3.3X').innerHTML =a33;

document.getElementById('j1').innerHTML =a11;
document.getElementById('j2').innerHTML =a12;
document.getElementById('j3').innerHTML =a13;
document.getElementById('j4').innerHTML =a21;
document.getElementById('j5').innerHTML =a22;
document.getElementById('j6').innerHTML =a23;
document.getElementById('j7').innerHTML =a31;
document.getElementById('j8').innerHTML =a32;
document.getElementById('j9').innerHTML =a33;


//Segundo Bloque 2.1
document.getElementById('X2.1.1X').innerHTML =a11;
document.getElementById('B2.2.1B').innerHTML =b1;
document.getElementById('X2.3.1X').innerHTML =a13;
document.getElementById('X2.1.2X').innerHTML =a21;
document.getElementById('B2.2.2B').innerHTML =b2;
document.getElementById('X2.3.2X').innerHTML =a23;
document.getElementById('X2.1.3X').innerHTML =a31;
document.getElementById('B2.2.3B').innerHTML =b3;
document.getElementById('X2.3.3X').innerHTML =a33;

document.getElementById('k1').innerHTML =a11;
document.getElementById('k2').innerHTML =a12;
document.getElementById('k3').innerHTML =a13;
document.getElementById('k4').innerHTML =a21;
document.getElementById('k5').innerHTML =a22;
document.getElementById('k6').innerHTML =a23;
document.getElementById('k7').innerHTML =a31;
document.getElementById('k8').innerHTML =a32;
document.getElementById('k9').innerHTML =a33;

//Tercer Bloque 3.1
document.getElementById('X3.1.1X').innerHTML =a11;
document.getElementById('X3.2.1X').innerHTML =a12;
document.getElementById('B3.3.1B').innerHTML =b1;
document.getElementById('X3.1.2X').innerHTML =a21;
document.getElementById('X3.2.2X').innerHTML =a22;
document.getElementById('B3.3.2B').innerHTML =b2;
document.getElementById('X3.1.3X').innerHTML =a31;
document.getElementById('X3.2.3X').innerHTML =a32;
document.getElementById('B3.3.3B').innerHTML =b3;

document.getElementById('l1').innerHTML =a11;
document.getElementById('l2').innerHTML =a12;
document.getElementById('l3').innerHTML =a13;
document.getElementById('l4').innerHTML =a21;
document.getElementById('l5').innerHTML =a22;
document.getElementById('l6').innerHTML =a23;
document.getElementById('l7').innerHTML =a31;
document.getElementById('l8').innerHTML =a32;
document.getElementById('l9').innerHTML =a33;

// Operaciones cruzadas

respuesta=((a11)*(a22)*(a33))+((a21)*(a32)*(a13))+((a31)*(a12)*(a23))-((a31)*(a22)*(a13))-((a11)*(a32)*(a23))-((a21)*(a12)*(a33));

respuesta1=((b1)*(a22)*(a33))+((b2)*(a32)*(a13))+((b3)*(a12)*(a23))-((b3)*(a22)*(a13))-((b1)*(a32)*(a23))-((b2)*(a12)*(a33));
respuesta2=((a11)*(b2)*(a33))+((a21)*(b3)*(a13))+((a31)*(b1)*(a23))-((a31)*(b2)*(a13))-((a11)*(b3)*(a23))-((a21)*(b1)*(a33));
respuesta3=((a11)*(a22)*(b3))+((a21)*(a32)*(b1))+((a31)*(a12)*(b2))-((a31)*(a22)*(b1))-((a11)*(a32)*(b2))-((a21)*(a12)*(b3));


document.getElementById('Respuesta1').innerHTML =respuesta1;
document.getElementById('Respuesta2').innerHTML =respuesta2;
document.getElementById('Respuesta3').innerHTML =respuesta3;

document.getElementById('fin').innerHTML =respuesta;


// Respuesta final1
var f11=respuesta1/respuesta;
var f1= Math.trunc(f11);


document.getElementById('fin1').innerHTML =f1;
document.getElementById('f1.2').innerHTML =respuesta;
document.getElementById('f1.1').innerHTML =respuesta1;
document.getElementById('simi').innerHTML ="=";

// Respuesta final2
var f22=respuesta2/respuesta;
var f2= Math.trunc(f22);


document.getElementById('fin2').innerHTML =f2;
document.getElementById('f2.2').innerHTML =respuesta;
document.getElementById('f2.1').innerHTML =respuesta2;
document.getElementById('simi2').innerHTML ="=";

// Respuesta final3
var f33=respuesta3/respuesta;
var f3= Math.trunc(f33);


document.getElementById('fin3').innerHTML =f3;
document.getElementById('f3.2').innerHTML =respuesta;
document.getElementById('f3.1').innerHTML =respuesta3;
document.getElementById('simi3').innerHTML ="=";

}