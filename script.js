import { format, formatDistance, formatRelative, subDays } from "date-fns";

console.log(format(new Date(), "[Today is a] dddd"));
//=> "Today is a Thursday"
console.log(formatDistance(subDays(new Date(), 3), new Date()));
