$(function () {
    // Set global variables (width, height, etc.)
    var width = 1240,
        height = 700;

    // Create svg and g elements
    var svg = d3.select("#vis")
                .append('svg')
                .attr('height', height)
                .attr('width', width);
    // Legend
    var g = svg.append('g')
        .attr('class', 'legend')
        .attr("transform", "translate(950,200)");

    // Create a color scale
    var color = d3.scaleThreshold();
    var expectancy = d3.map();
    var path = d3.geoPath();
    var min = 66; 
    var max = 86;

    console.log("Ready!");
    // Load and prep data and shapefile
    var url = "website/data/seattle-zipcodes.geojson";
    // var csvData = "data/ihme-life-expectancy.csv";

    d3.queue()
        .defer(d3.json, url)
    //     .defer(d3.csv, csvData, function (e) {
    //         // Correct codes with just 4 characters
    //         if (e["FIPS"].length == 4) {
    //             e["FIPS"] = "0" + e["FIPS"]
    //         }
            
    //         // Use only those with 5 characters
    //         if (e.FIPS.length === 5) {
    //             Object.keys(e).slice(2).map(function (key, index) {
    //                 e[key] = parseFloat(e[key].split(" ")[0])
    //             });
    //             // Values to use
    //             expectancy.set(e["FIPS"], +e["Life expectancy, 2014*"]);
    //         }
    //     })
    //     .await(ready);

    // Function once data and shapefile are loaded
    function ready(error, us) {
        // Set color scale domain
        let min = d3.min(expectancy.values());
        let max = d3.max(expectancy.values());

        color.domain(d3.range(min, max, ((max - min) / 5)))
            .range(d3.schemeRdBu[6]);

        // Append and draw counties (with transition)
        // var counties = svg.append("g")
        //     .attr("class", "counties")
        //     .selectAll("path")
        //     .data(topojson.feature(us, us.objects.counties).features)
        //     .enter().append("path")
        //     .attr("fill", function(d) { return color(d["Life expectancy, 2014*"] = expectancy.get(d.id)); })
        //     .transition()
        //     .delay(function(d) { return d["Life expectancy, 2014*"] ** 2 - min ** 2 + 80; })
        //     .attr("d", path);

        // Draw state paths
        // var states = svg.append("path")
        //     .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        //     .attr("class", "states")
        //     .attr("d", path);
        
        // Append a legend using d3.legend
        // var legend = d3.legendColor()
        //     .title("Life Expectancy (years)")
        //     .labelFormat(d3.format(".0f"))
        //     .labels(d3.legendHelpers.thresholdLabels)
        //     .scale(color);

        // g.call(legend); 
    }
});