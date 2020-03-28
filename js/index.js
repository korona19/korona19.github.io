countryList.sort((a, b) => {
	return a > b ? 1 : a < b ? -1 : 0;
});
var displayingData = [];
var mergeOrigin = false;
var legendOptions = [
	{text:"Total Case", property:"totalCase",plotType:"scatter"},
	{text:"Total Death", property:"totalDeath",plotType:"scatter"},
	{text:"New Case", property:"newCase",plotType:"bar"},
	{text:"New Death", property:"newDeath",plotType:"bar"}
];
var selectedLegend = 0;

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

$(document).ready(function () {
	main();
});



function main() {
	AppendLegendOptions();
	$('#countries').select2({
		placeholder: "Select Country",
		width: '100%',
		data: countryList,
		templateResult:boxFormat,
		templateSelection:boxFormat
	});
	$('#countries').on('select2:close', function (e) {
		DisplayGraph();
	});
	$('#countries').val('Turkey').trigger('change'); // Notify any JS components that the value changed
	$("#mergeOrigin").click(()=>{
		mergeOrigin = !mergeOrigin;
		if (mergeOrigin)
		{
			//Split
			$("#mergeOrigin").removeClass("btn-primary");
			$("#mergeOrigin").addClass("btn-danger");
			$("#mergeOrigin").html("Split");
		}
		else
		{
			//Merge
			$("#mergeOrigin").addClass("btn-primary");
			$("#mergeOrigin").removeClass("btn-danger");
			$("#mergeOrigin").html("Merge");
		}
		DisplayGraph();
	});
	$(".select2-selection__rendered").css("min-height","36px");
	$("#plotLegend").change(()=>{
		selectedLegend = parseInt($("#plotLegend").val());
		DisplayGraph();
	});
	DisplayGraph();
}

function AppendLegendOptions()
{
	let rootNode = $("#plotLegend");
	for (let i = 0; i< legendOptions.length;i++)
	{
		let html = '<option value= {0}> {1} </option>'.format(i,legendOptions[i].text);
		rootNode.append(html);
	}
}


function GetCountryGraphData(country, colorIndex) {
	var country_graph = [];
	var data_x = [];
	let legend = legendOptions[selectedLegend]
	var sampleCount = country.data[legend.property].length;
	if (mergeOrigin == true) {
		for (var i = 1; i <= sampleCount; i++) {
			data_x.push(i);
		}
	}
	else {
		for (var i = 0; i < sampleCount; i++) {
			var newDate = new Date(country.startDate);
			newDate.setDate(country.startDate.getDate() + i);
			data_x.push(newDate);
		}
	}
	country_graph.push(
		{
			name: "{0} - {1}".format(country.text, legend.text),
			visible: true,
			type: legend.plotType,
			x: data_x,
			y: country.data[legend.property].slice(0, sampleCount)
		}
	);
	return country_graph;
}

function CreateGraphData() {
	var result = [];
	displayingData = [];
	$('#countries').select2('data').forEach(element => {
		displayingData.push(data[element.text]);
	});
	var colorIndex = 0;
	displayingData.forEach(country => {
		result = result.concat(GetCountryGraphData(country, colorIndex));
		colorIndex += 2;
	});
	return result;
}

function DisplayGraph() {
	var graph_data = CreateGraphData();
	var layout = {
		title: 'COVID 19 Daily Data',
		height:760,
		plot_bgcolor:"#ffffff",
		paper_bgcolor:"#ffffff",
		xaxis: {
			tickformat: '%d.%m.%y',
			title: {
				text: "Date"
			},
			fixedrange: true
		},
		yaxis: {
			title: {
				text: "Person"
			},
			fixedrange: true
		},
		showlegend: false
	};
	if (mergeOrigin == true) {
		delete layout.xaxis.tickformat
	}
	Plotly.newPlot('totalGraph', graph_data, layout,{ responsive: true,displaylogo: false});
	layout.title = "COVID 19 Speed Graph";
}

function boxFormat(state)
{
	if (!state.id)
	{
		return state.text;
	}
	var _state = $("<span class='f32'><span class='flag "+flagCodes[state.text]+"' style='margin-top:-4px;height:28px;'></span><span class='font-weight-bold' style='padding-left:5px;'>"+state.text+"</span></span>");
	return _state;
}