google.charts.load("current", { packages: ["gauge"] });
google.charts.setOnLoadCallback(init);
let refreshFrecuency = 100000;

function update(data) {
  setInterval(function() {
    data = JSON.parse(FooBar.getData());
    const taps = data.taps;
    taps.forEach(drawGauge);
  }, refreshFrecuency);
  setInterval(function() {
    drawQueue(data);
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
  let queueGraphWidth = data.queue.length * 19 + "px";
  console.log(queueGraphWidth);
  document.getElementById("queueGraph").setAttribute("width", queueGraphWidth);
}
function init() {
  let data = JSON.parse(FooBar.getData());
  const taps = data.taps;
  taps.forEach(drawGauge);
  update(data);
  drawQueue(data);
}
