countryList.sort((a, b) => {
	return a > b ? 1 : a < b ? -1 : 0;
});
var displayingData = [];
var mergeOrigin = false;
var populationPercentage = false;
var legendOptions = [
	{ text: "Total Case", property: "totalCase", plotType: "scatter", population:true },
	{ text: "Total Death", property: "totalDeath", plotType: "scatter", population:true },
	{ text: "New Case", property: "newCase", plotType: "bar", population:true },
	{ text: "New Death", property: "newDeath", plotType: "bar", population:true },
	{ text: "Daily Case Increase Ratio", property: "increaseRate", plotType: "bar", population:false },
	{ text: "Case Increase Change Ratio", property: "accRate", plotType: "bar", population:false },
	{ text: "Total Death/Total Case", property: "deathRate", plotType: "scatter", population:false }
];
var selectedLegend = 0;
var selectedCountry = "Turkey";

function GetParameter(name, def) {
	let result = def;
	window.location.search.substr(1)
		.split("&")
		.forEach((item) => {
			let tmp = item.split("=");
			if (tmp[0] == name) result = decodeURIComponent(tmp[1]);
		});
	return result;
}

String.prototype.format = function () {
	var formatted = this;
	for (var arg in arguments) {
		formatted = formatted.replace("{" + arg + "}", arguments[arg]);
	}
	return formatted;
};

$(document).ready(function () {
	main();
});



function main() {
	selectedLegend = GetParameter("graph", 0);
	selectedCountry = GetParameter("country", 'England,France,Germany,Italy,Turkey');
	selectedCountry = selectedCountry.split(",");


	AppendLegendOptions();
	$('#countries').select2({
		placeholder: "Select Country",
		width: '100%',
		data: countryList,
		templateResult: BoxFormat,
		templateSelection: SelectedBoxFormat
	});
	$('#countries').on('select2:close', function (e) {
		DisplayGraph();
	});
	$('#countries').val(selectedCountry).trigger('change');
	$("#mergeOrigin").click(() => {
		mergeOrigin = !mergeOrigin;
		if (mergeOrigin) {
			//Split
			$("#mergeOrigin").removeClass("btn-primary");
			$("#mergeOrigin").addClass("btn-danger");
			$("#mergeOrigin").html("Split");
		}
		else {
			//Merge
			$("#mergeOrigin").addClass("btn-primary");
			$("#mergeOrigin").removeClass("btn-danger");
			$("#mergeOrigin").html("Merge");
		}
		DisplayGraph();
	});
	$("#populationPercentage").click(() => {
		populationPercentage = !populationPercentage;
		if (populationPercentage) {
			$("#populationPercentage").removeClass("btn-primary");
			$("#populationPercentage").addClass("btn-danger");
			$("#populationPercentage").html("Cancel");
		}
		else {
			$("#populationPercentage").addClass("btn-primary");
			$("#populationPercentage").removeClass("btn-danger");
			$("#populationPercentage").html("%Population");
		}
		DisplayGraph();
	});

	$("#plotLegend").val(selectedLegend);
	$("#plotLegend").change(() => {
		selectedLegend = parseInt($("#plotLegend").val());
		DisplayGraph();
	});
	$("#mergeOrigin").click();
	DisplayGraph();
}

function AppendLegendOptions() {
	let rootNode = $("#plotLegend");
	for (let i = 0; i < legendOptions.length; i++) {
		let html = '<option value= {0}> {1} </option>'.format(i, legendOptions[i].text);
		rootNode.append(html);
	}
}


function GetCountryGraphData(country, color) {
	var country_graph = [];
	let legend = legendOptions[selectedLegend]
	var data_x = [];
	var data_y = country.data[legend.property];
	textArr = [];
	var sampleCount = data_y.length;

	if (populationPercentage == true && legend.population == true )
	{

		data_y = data_y.map((x)=>{
									return ((x / countryPopulation[country.text]) *100);
									}
									);
	}
	let annotationTemplate = (value, index) => {
		if (populationPercentage == true && legend.population == true )
		{
			value = parseFloat(value).toFixed(2) + " %";
		}
		if (index == sampleCount - 1)
		{
			value = value +" - " + country.text;
		}
		return "<span class='font-weight-bold' style='padding-left:5px;color:{0};'>{1}</span>"
					.format(colorPalette[country.text], value);

		}



	if (mergeOrigin == true) {
		for (var i = 0; i < sampleCount; i++) {
			data_x.push(i + 1);
			if (i % 5 == 0 || i == sampleCount - 1) {
				textArr.push(annotationTemplate(data_y[i], i));
			}
			else {
				textArr.push("");
			}
		}
	}
	else {
		for (var i = 0; i < sampleCount; i++) {
			var newDate = new Date(country.startDate);
			newDate.setDate(country.startDate.getDate() + i);
			data_x.push(newDate);
			if (i % 5 == 0 || i == sampleCount - 1) {
				textArr.push(annotationTemplate(data_y[i], i));
			}
			else {
				textArr.push("");
			}
		}
	}
	country_graph.push(
		{
			name: "{0} - {1}".format(country.text, legend.text),
			visible: true,
			type: legend.plotType,
			marker: {
				color: colorPalette[country.text],
			},
			x: data_x,
			y: data_y.slice(0, sampleCount),
			mode: 'lines+text',
			text: textArr,
			textposition: "top left",
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
		title: '',
		height: 760,
		plot_bgcolor: "#ffffff",
		paper_bgcolor: "#ffffff",
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
	Plotly.newPlot('totalGraph', graph_data, layout, { responsive: true, displaylogo: false })
}

function SelectedBoxFormat(state) {
	if (!state.id) {
		return state.text;
	}
	var _state = $("<span class='f32' style><span class='flag {0}' style='margin-top:-4px;height:28px;'></span><span class='font-weight-bold' style='padding-left:5px;color:{1};'>{2}</span></span>"
		.format(flagCodes[state.text], colorPalette[state.text], state.text));
	return _state;
}

function BoxFormat(state) {
	if (!state.id) {
		return state.text;
	}
	var _state = $("<span class='f32' style><span class='flag {0}' style='margin-top:-4px;height:28px;'></span><span class='font-weight-bold' style='padding-left:5px;'>{1}</span></span>"
		.format(flagCodes[state.text], state.text));
	return _state;
}
