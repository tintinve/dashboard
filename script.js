var barChart = document.getElementById("myChart").getContext("2d");
function init() {
  let data = JSON.parse(FooBar.getData());
  console.log(data);
  drawGraph(data);
  update(data);
}
init();
function update(data) {
  setInterval(function() {
    drawGraph(data);
  }, 10000);
  //This creates a parameterless anonymous function which calls drawGraph() with arguments
}
function drawGraph(data) {
  console.log(data);
  var chart = new Chart(barChart, {
    type: "bar",
    data: {
      labels: [
        data.storage[0].name,
        data.storage[1].name,
        data.storage[2].name,
        data.storage[3].name,
        data.storage[4].name,
        data.storage[5].name,
        data.storage[6].name,
        data.storage[7].name,
        data.storage[8].name,
        data.storage[9].name
      ],
      datasets: [
        {
          label: "Storage Amount",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [
            data.storage[0].amount,
            data.storage[1].amount,
            data.storage[2].amount,
            data.storage[3].amount,
            data.storage[4].amount,
            data.storage[5].amount,
            data.storage[6].amount,
            data.storage[7].amount,
            data.storage[8].amount,
            data.storage[9].amount
          ]
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
}
