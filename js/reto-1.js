document.getElementById("btn1").addEventListener("click", () => {
  console.log("CALLBACKS");
  console.log("Este es un callback a través de un evento click");
});

document.getElementById("btn2").addEventListener("click", () => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos obtenidos");
    }, 1000);

    setTimeout(() => {
      reject("Datos no obtenidos");
    }, 3000);
  });

  promesa
    .then((resonse) => {
      console.log("PROMESAS");
      console.log(resonse);
    })
    .catch((error) => {
      console.log("PROMESAS");
      console.log(error);
    });
});

document.getElementById("btn3").addEventListener("click", () => {
  console.log("CALLBACK HELL");
  sumar(8, 5, function(resultSuma) {
    console.log('La suma es:', resultSuma)
    potencia(resultSuma, function(resultPot) {
      console.log('La potencia de la suma es:', resultPot)
    })
  })  
});

function sumar(n1, n2, callback) {
  callback(n1+n2)
}

function potencia(num, callback) {
  callback(num*num)
}

