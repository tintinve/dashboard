google.charts.load("current", { packages: ["gauge", "bar"] });
google.charts.setOnLoadCallback(init);
let refreshFrecuency = 1000;
function update(data) {
  setInterval(function() {
    data = JSON.parse(FooBar.getData());
    const taps = data.taps;
    taps.forEach(drawGauge);
  }, refreshFrecuency);
  setInterval(function() {
    drawQueue(data);
  }, refreshFrecuency);
  setInterval(function() {
    bartenders(data);
  }, refreshFrecuency);
  setInterval(function() {
    drawStorage(data);
  }, refreshFrecuency);

  //This creates a parameterless anonymous function which calls drawGraph() with arguments
}
function drawGauge(data) {
  let porcentageLevel = (data.level * 100) / 2500;
  let aGaugeData = google.visualization.arrayToDataTable([
    ["Label", "Value"],
    ["Level %", porcentageLevel]
  ]);
  let options = {
    width: 400,
    height: 120,
    redFrom: 0,
    redTo: 20,
    yellowFrom: 20,
    yellowTo: 40,
    greenFrom: 40,
    greenTo: 100,
    minorTicks: 15
  };
  let chart = new google.visualization.Gauge(
    document.getElementById("chart_div" + data.id)
  );
  chart.draw(aGaugeData, options);
  let aGuage = document.getElementById("chart_div" + data.id);
  let gaugeName = document.createTextNode(data.beer);
  let gaugeStatus = document.createTextNode(" / " + data.inUse);
  aGuage.appendChild(gaugeName);
  aGuage.appendChild(gaugeStatus);
}
function drawQueue(data) {
  let queueGraphWidth = data.queue.length * 24 + "px";
  document.getElementById("queueGraph").setAttribute("width", queueGraphWidth);
  document.querySelector(".queueLength").textContent =
    "Customers waiting to be served " + data.queue.length;
}
function bartenders(data) {
  document.querySelector(".peterStatus").textContent =
    data.bartenders[0].status;
  document.querySelector(".peterUsingTap").textContent =
    "using tap " + data.bartenders[0].usingTap;
  document.querySelector(".jonasStatus").textContent =
    data.bartenders[1].status;
  document.querySelector(".jonasUsingTap").textContent =
    "using tap " + data.bartenders[1].usingTap;
  document.querySelector(".martinStatus").textContent =
    data.bartenders[2].status;
  document.querySelector(".martinUsingTap").textContent =
    "using tap " + data.bartenders[2].usingTap;
}
function drawStorage(data) {
  console.log(data.storage);
  let beerType = data.storage;
  console.log(beerType[0].name);
  var data = google.visualization.arrayToDataTable([
    ["ØL", "STOCK"],
    [beerType[0].name, beerType[0].amount],
    [beerType[1].name, beerType[1].amount],
    [beerType[2].name, beerType[2].amount],
    [beerType[3].name, beerType[3].amount],
    [beerType[4].name, beerType[4].amount],
    [beerType[5].name, beerType[5].amount],
    [beerType[6].name, beerType[6].amount],
    [beerType[7].name, beerType[7].amount],
    [beerType[8].name, beerType[8].amount],
    [beerType[9].name, beerType[9].amount]
  ]);

  var options = {
    legend: { position: "none" }
  };

  var chart = new google.charts.Bar(
    document.getElementById("columnchart_material")
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function init() {
  let data = JSON.parse(FooBar.getData());
  const taps = data.taps;
  taps.forEach(drawGauge);
  update(data);
  drawQueue(data);
  bartenders(data);
  drawStorage(data);
}
