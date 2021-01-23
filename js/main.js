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
    },
    silver:{
      visa:   [1.43,3.27,4.68,5.05,5.43,5.80,6.18,6.99,7.37,7.74,8.12,8.49,8.87],
      master: [1.44,3.27,4.72,5.09,5.47,5.84,6.22,6.85,7.23,7.60,7.98,8.35,8.73],
      elo:    [1.96,3.68,5.26,5.63,6.01,6.38,6.76,7.43,7.81,8.18,8.56,8.93,9.31],
      hiper:  [0.00,3.58,5.19,5.56,5.94,6.31,6.69,7.28,7.66,8.03,8.41,8.78,9.16],
      diners: [0.00,4.08,5.35,5.72,6.10,6.47,6.85,7.44,7.82,8.19,8.57,8.94,9.32],
      amex:   [0.00,3.68,5.31,5.68,6.06,6.43,6.81,7.42,7.80,8.17,8.55,8.92,9.30]
    },
    diamante:{
      visa:   [1.43,3.17,4.28,4.65,5.03,5.40,5.78,6.59,6.97,7.34,7.72,8.09,8.47],
      master: [1.44,3.17,4.72,4.69,5.07,5.44,5.82,6.45,6.83,7.20,7.58,7.95,8.33],
      elo:    [1.96,3.58,5.26,5.23,5.61,5.98,6.36,7.03,7.41,7.78,8.16,8.53,8.91],
      hiper:  [0.00,3.58,5.19,5.56,5.94,6.31,6.69,7.28,7.66,8.03,8.41,8.78,9.16],
      diners: [0.00,4.08,5.35,5.72,6.10,6.47,6.85,7.44,7.82,8.19,8.57,8.94,9.32],
      amex:   [0,00,3.68,5.31,5.68,6.06,6.43,6.81,7.42,7.80,8.17,8.55,8.92,9.30]
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