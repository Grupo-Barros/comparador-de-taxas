window.onload = function () {

  var tax = 1.49;

  const taxas = {
    simples:{
      visa: [1.73,4.27,6.28,6.65,7.03,7.40,7.78,12.09,12.47,12.84,13.22,13.59,13.97],
      master: [],
      elo: [],
      hiper: [],
      diners: [],
      amex: []
    }
  }

  const plan = document.getElementById("plans");
  const flag = document.getElementById("flag");
  const amount = document.getElementById("value2");
  const slider = document.getElementById("slider");
  const sliderNum = document.getElementById("indice");
  const partValue = document.getElementById("part-value");

  const taxValue = document.getElementById("tax-value");
  const valueTotal = document.getElementById("value-total");
  
  slider.onchange = (e) => {
    sliderNum.innerText = slider.value + 'x';
    valueTotal.innerText = (amount.value / slider.value).toFixed(2);
    taxValue.innerText = 'Taxa: ' + taxas.simples.visa[slider.value] + '%'
    partValue.innerText = 'R$ ' + (amount.value * taxas.simples.visa[slider.value]).toFixed(2);
  }



  console.log(slider.value);
};
