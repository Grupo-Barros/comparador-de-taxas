window.onload = function () {

  var tax = 1.49;

  const taxas = {
    simples:{
      visa:   [1.73,4.27,6.28,6.65,7.03,7.40,7.78,12.09,12.47,12.84,13.22,13.59,13.97],
      master: [1.74,4.27,6.32,6.69,7.07,7.44,7.82,11.95,12.33,12.70,13.08,13.45,13.83],
      elo:    [2.26,4.68,6.86,7.23,7.61,7.98,8.36,12.53,12.91,13.28,13.66,14.03,14.41],
      hiper:  [0.00,4.58,6.79,7.16,7.54,7.91,8.29,12.38,12.76,13.13,13.51,13.88,14.26],
      diners: [0.00,5.08,6.95,7.32,7.70,8.07,8.45,12.54,12.92,13.29,13.67,14.04,14.42],
      amex:   [0.00,4.68,6.91,7.28,7.66,8.03,8.41,12.52,12.90,13.27,13.65,14.02,14.40]
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
    // console.log(plan.value);
    // console.log(flag.value);

    sliderNum.innerText = Number(slider.value) > 0 ? slider.value + 'x' : 'DÉBITO';
    
    taxValue.innerText = 'Taxa: ' + taxas.simples[flag.value][slider.value] + '%'
    let value = (Number(amount.value) + Number(Number(amount.value) * Number(taxas.simples[flag.value][slider.value]))/100);
    partValue.innerText = 'R$ ' + value.toFixed(2).replace('.',',');
    valueTotal.innerText = Number(slider.value) > 0 ? ((value) / Number(slider.value)).toFixed(2).replace('.',',') : value.toFixed(2).replace('.',',');
  }

  slider.onchange = handleUpdate;
  // amount.onchange = handleUpdate;
  // amount.onkeydown = handleUpdate;
  // amount.onkeypress = handleUpdate;
  amount.onkeyup = handleUpdate;
  plan.onchange = handleUpdate;
  flag.onchange = handleUpdate;

  console.log(slider.value);
};

// Hello World