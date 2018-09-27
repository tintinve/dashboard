import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";

console.log(format(new Date(), "[Today is a] dddd"));
//=> "Today is a Thursday"
// ---------------------------->
function init() {
  setInterval(update, 1000);
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());
  // OJO FooBar no es cammelCase
  console.log(data);
  handleBartenders(data.bartenders);
}
function handleBartenders(bartenders) {
  console.log(bartenders);
}
// ---------------------------->
