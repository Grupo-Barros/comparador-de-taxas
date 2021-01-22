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
  
  function handleUpdate(){
    sliderNum.innerText = slider.value + 'x';
    
    taxValue.innerText = 'Taxa: ' + taxas.simples.visa[slider.value] + '%'
    let value = (Number(amount.value) + Number(Number(amount.value) * Number(taxas.simples.visa[slider.value]))/100);
    partValue.innerText = 'R$' + value.toFixed(2).replace('.',',');
    valueTotal.innerText = Number(slider.value) >= 0 ? ((value) / Number(slider.value)).toFixed(2) : value.toFixed(2);
  }

  slider.onchange = handleUpdate;
  amount.onchange = handleUpdate;

  console.log(slider.value);
};

// Hello World