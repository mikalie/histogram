// Only numbers, commas, and spaces allowed in string.
//const defaultDataStr = "72.00189617,4.163696349,6.695873125,48.9230311,47.0020768,67.36188905,3.297865606,68.81372471,81.13083088,16.60032684,68.31630086,63.81041066,79.21071051,47.0679652,1.085550573,12.77541427,95.23275494,86.99302836,48.05663475,93.82979813,14.57886079,39.00723323,7.19294781,17.71402649,28.90705102,68.1562176,44.52504199,65.04731815,1.114830841,47.96061024,15.64096472,76.82962165,21.79965496,46.34230094,27.9550519,19.50266579,65.7645206,31.76565758,75.78944876,95.98434526,67.37054523,6.603558788,29.61911073,2.313231202,46.91731251,29.52331169,63.2723499,35.88772342,36.73569603,71.59762997,58.44549372,45.75699729,75.30674242,61.8810401,34.58154608,78.01854965,60.47412281,17.35222972,13.9792118,10.09981156,78.69657213,19.40801107,46.93999699,86.54895375,56.29062698,94.50470575,89.82755381,65.9326623,10.74288158,80.07795797,50.10480966,63.53630596,15.4248977,8.532093446,86.73084427,27.78461033,29.42281127,21.87532325,81.74087153,19.64855947,85.69756046,37.48725743,79.39910157,73.77695658,75.42059316,21.54031165,23.00566516,7.68866899,14.08382353,90.75678004,6.255168306,11.08431224,25.86146107,55.46850072,95.98588494,91.18370857,36.70532921,37.35617845,76.22496375,71.96817194,23.78410051,43.78059606,9.626481334,45.30430171,29.13085422,57.2781179,11.71549644,50.14861429,8.742247444,3.578000671,85.79278372,12.38001606,54.87645792,94.40923777,71.92121898,12.27977851,98.92605655,2.399782344,22.10627108,59.27631118,74.99573398,14.5311706,25.59940719,44.29471111,0.1938790504,27.89669127,73.19467992,8.89869833,6.650761814,96.92145519,67.45512838,17.38523198,42.40506088,14.73783623,56.99702825,43.08971638,43.55440238,13.06990375,97.27648323,83.38242651,68.4443812,94.76566663,17.76419358,99.18435384,76.17456365,71.02607271,5.960686719,34.303411,26.32878749,61.41484987,2.39568421,7.489544118,74.59103475,28.89348134,37.57167489,85.82996217,39.78701673,64.41071148,31.75321251,41.95336033,21.89555541,5.986160228,21.56980066,69.4846752,57.70273859,75.76281191,73.5916926,81.28953303,11.02570367,45.16319209,94.35429565,43.27025688,7.811866262,93.06935952,48.74830439,2.822908877,42.92326207,4.856853168,54.25908603,55.53755182,5.044620815,71.14798649,27.23023394,56.32148805,88.90765934,84.30998133,19.14262355,21.84799561,89.90301775,98.00860901,95.8417238,90.08065588,5.155139507,10.53820043,80.71230268,99.59604139,97.26435657,56.18393193,3.991052883,26.52523399,12.17425046,40.53262203,74.72415556,70.15723209,81.00138412,35.43324247,19.31807011,9.594994025,77.16830883,57.21865182,11.19839493,63.32755213,44.80971185,87.83513739,49.78291675,71.17921813,62.17545059,62.6865195,33.79146032,83.81962702,54.63314512,41.2847693,13.85654474,88.86597404,25.87689058,97.2091677,2.465179979,24.58146677,33.07754564,12.41128272,65.45368591,32.27171186,91.96402495,37.56311948,18.59367639,76.70332506,61.20381876,84.93101278,5.248856332,20.21680955,21.95499017,53.16794129,36.64864345,70.67832321,38.09070274,44.4521298,35.01604565,36.01267035,55.35131465,23.55995303,31.60361643,8.782456428,73.55794202,85.74630209,36.63273569,73.1260492,5.025287825,45.71576258,16.19786208,73.3396171,14.44049983,33.50303696,82.38881565,8.486176313,20.72865096,84.74130998,27.20051525,20.63724597,29.80440204,42.58230427,8.241085209,25.70034375,58.61327069,46.44199338,24.81556919,95.25824515,5.49487425,68.78108705,6.653920894,35.44354927,19.65438703,75.28953289,74.36838836,24.59477515,23.40737064,26.12946559,20.66675009,65.28785662,44.86707389,6.301183996,4.414313084,78.30956442,25.87212911,71.73186249,45.82897001,16.23705384,80.20655657,24.34693056,60.41002691,2.510348565,90.54287432,84.16909446,71.64290752,8.232285833,49.04295945,9.400287621,98.08827619,63.40307288,66.18030829,26.47682496";
let defaultDataArr = [];

for (let i = 0; i < 100; i++) {
    defaultDataArr.push(10*Math.random())
}

let defaultDataStr = defaultDataArr.toString();

let userEnteredDataStr = "";
let cleanSortedArr = [];
let histogramYValues = [];

let chosenBinSize = 0;
let chosenScale = 0;

// Histogram calculations
let min = Infinity;
let max = -Infinity;
let binNumber = 0;

// Clean and sort the default data
const cleanSortData = (str) => {
    let cleanArr = str.replace(/\s+/g, '').split(',').filter(n => n);
    let sortedArr = cleanArr.sort(
        (a, b) => {
            return a-b;
        });
    return sortedArr;
}

const submitUserData = () => {
    userEnteredDataStr = document.getElementById("userEnteredData").value;
    chosenBinSize = Number(document.getElementById("chosenBinSize").value);
    if (chosenBinSize <= 0) {
        chosenBinSize = 1;
    } 

    // Validate the textarea input
    let regex = /^[0-9?,\.{0,1}]*$/g;
    if (regex.test(userEnteredDataStr)) {
        // Plot the histogram
        cleanSortedArr = cleanSortData(userEnteredDataStr);
        histogramYValues = histogram(cleanSortedArr, chosenBinSize);
        draw();
    } else {
        // Alert the user of data errors
        alert("Please enter at least two data points, consisting of only numbers, commas, and spaces.");
    }
} 

const histogram = (data, binSize) => {
    // Set up min and max for data range
    for (const item of data) {
        if (item < min) {
            min = item;
        } 
        else if (item > max) {
            max = item;
        }
    }

    // Calculate number of bins for data
    if (binSize > 0) {
        binNumber = Math.ceil((max - min + 1) / binSize);
    } else {
        binNumber = Math.ceil((max - min + 1) / 1);
    }

    // Set up results array
    let histogramResult = new Array(binNumber).fill(0);

    // Sort data into bins
    for (const item of data) {
        histogramResult[Math.floor((item - min) / binSize)]++;
    }

    return histogramResult;
}

// Build histogram based on histogramResults array
const draw = () => {
    const canvas = document.getElementById("histogram");
    const originX = 40;
    const originY = 260;
    const defaultSpace = 30;

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Clear Existing Data
        ctx.clearRect(0, 0, 500, 300)

        // Axes
        ctx.fillStyle = "#000000"; // X-Axis
        ctx.fillRect(originX, originY, 459, 2);

        ctx.font = "14px sans-serif"; // X-Axis label
        ctx.fillText("Values", 240, 290);

        ctx.fillStyle = "#000000"; // Y-Axis
        ctx.fillRect(originX,1,2,originY);

        ctx.font = "14px sans-serif"; // Y-Axis label
        ctx.save();
        ctx.translate(500, 300);
        ctx.rotate(-Math.PI/2);
        ctx.textAlign = "center;"
        ctx.fillText("Frequency", 130, -486);
        ctx.restore();

        // Plotting Data
        chosenScale = Number(document.getElementById("chosenScale").value);
        if (chosenScale <= 0) {
            chosenScale = 5; // Default chosen scale is 5
        }

        for (let i = 0; i < histogramYValues.length; i++) {
            // Histogram bars
            if (i % 3 == 0) {
                ctx.fillStyle = "#b3b3ff";
            } else if (i %2 == 0) {
                ctx.fillStyle = "#8080ff";
            } else {
                ctx.fillStyle = "#9999ff";
            }
            
            ctx.fillRect(originX+2+(defaultSpace*i), originY-(histogramYValues[i]*chosenScale), defaultSpace, (histogramYValues[i]*chosenScale));
            
            // X-Axis tick marks
            ctx.fillStyle="black";
            ctx.fillRect(originX+(defaultSpace*i), originY+2, 2, 4)

        }
        
        // Mid X-Axis label
        ctx.font="10px sans-serif";
        ctx.fillText(Math.round(((max-min)/(binNumber-1))*(Math.floor(histogramYValues.length/2))), originX+(defaultSpace*(Math.floor(histogramYValues.length/2)))-2, originY+20);

        // Last X-Axis tick mark
        ctx.fillStyle="black";
        ctx.fillRect(originX+(defaultSpace*(histogramYValues.length)), originY+2, 2, 4)

        // Last X-Axis label
        ctx.font="10px sans-serif";
        ctx.fillText(Math.round(((max-min)/(binNumber-1))*(histogramYValues.length)), originX+(defaultSpace*(histogramYValues.length))-2, originY+20);

        // Mid Y-Axis tick mark
        ctx.fillStyle="black";
        ctx.fillRect(originX-4, originY-(((Math.floor(Math.max(...histogramYValues)/2)))*chosenScale), 4, 2);
        
        // Mid Y-Axis label
        ctx.font="10px sans-serif";
        //ctx.fillText(Math.floor(((Math.max(...histogramYValues)/2)), originX-20, originY+4-((Math.floor((Math.max(...histogramYValues))/2)))));
        ctx.fillText((Math.floor(((Math.max(...histogramYValues)/2)))), originX-20, originY+4-(((Math.floor(Math.max(...histogramYValues)/2)))*chosenScale));

        // Last Y-Axis tick mark
        ctx.fillStyle="black";
        ctx.fillRect(originX-4, originY-((Math.floor(Math.max(...histogramYValues)))*chosenScale), 4, 2);

        // Last Y-Axis label
        ctx.font="10px sans-serif";
        ctx.fillText(Math.floor(Math.max(...histogramYValues)), originX-24, originY+4-((Math.floor(Math.max(...histogramYValues)))*chosenScale));

    } else { // Just in case Canvas doesn't work
        ctx.font ="18px sans-serif";
        ctx.fillText("Apologies, Canvas is not supported.", 100, 150);
    }
}

// On initial load, run with default data. Afterward, run with user data, if given
window.addEventListener("load", (event) => {
    cleanSortedArr = cleanSortData(defaultDataStr); // Initial default data is provided
    histogramYValues = histogram(cleanSortedArr, 1); // Initial bin size is 1
    draw();
}, {once: true});

// Enable data submit on click
const button = document.getElementById("data-submit");
button.addEventListener("click", submitUserData);