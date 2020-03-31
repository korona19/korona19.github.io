countryList.sort((a, b) => {
	return a > b ? 1 : a < b ? -1 : 0;
});
var displayingData = [];
var mergeOrigin = false;
var legendOptions = [
	{ text: "Total Case", property: "totalCase", plotType: "scatter" },
	{ text: "Total Death", property: "totalDeath", plotType: "scatter" },
	{ text: "New Case", property: "newCase", plotType: "bar" },
	{ text: "New Death", property: "newDeath", plotType: "bar" },
	{ text: "Daily Case Increase Ratio", property: "increaseRate", plotType: "bar" },
	{ text: "Case Increase Change Ratio", property: "accRate", plotType: "bar" },
	{ text: "Total Death/Total Case", property: "deathRate", plotType: "scatter" }
];
var selectedLegend = 0;

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
	$('#countries').val('Turkey').trigger('change'); // Notify any JS components that the value changed
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
	$("#plotLegend").change(() => {
		selectedLegend = parseInt($("#plotLegend").val());
		DisplayGraph();
	});
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
	var data_x = [];
	textArr = [];
	let legend = legendOptions[selectedLegend]
	var sampleCount = country.data[legend.property].length;
	let annotationTemplate = (text) =>"<span class='font-weight-bold' style='padding-left:5px;color:{0};'>{1}</span>"
		    .format(colorPalette[country.text],text);
	if (mergeOrigin == true) {
		for (var i = 1; i <= sampleCount; i++) {
			data_x.push(i);
			if (i % 5 == 0 || i == sampleCount -1)
			{
				textArr.push(annotationTemplate(country.data[legend.property][i]));
			}
			else
			{
				textArr.push("");
			}			
		}
	}
	else {
		for (var i = 0; i < sampleCount; i++) {
			var newDate = new Date(country.startDate);
			newDate.setDate(country.startDate.getDate() + i);
			data_x.push(newDate);
			if (i % 5 == 0 || i == sampleCount -1)
			{
				textArr.push(annotationTemplate(country.data[legend.property][i]));
			}
			else
			{
				textArr.push("");
			}
		}
	}
	textArr[textArr.length - 1] = annotationTemplate(country.data[legend.property][sampleCount - 1] + " - "+country.text);
	country_graph.push(
		{
			name: "{0} - {1}".format(country.text, legend.text),
			visible: true,
			type: legend.plotType,
			marker: {
				color: colorPalette[country.text],
			},
			x: data_x,
			y: country.data[legend.property].slice(0, sampleCount),
			mode: 'lines+text',
			text:textArr,
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
	Plotly.newPlot('totalGraph', graph_data, layout, { responsive: true, displaylogo: false });
	layout.title = "";
}

function SelectedBoxFormat(state) {
	if (!state.id) {
		return state.text;
	}
	var _state = $("<span class='f32' style><span class='flag {0}' style='margin-top:-4px;height:28px;'></span><span class='font-weight-bold' style='padding-left:5px;color:{1};'>{2}</span></span>"
				    .format(flagCodes[state.text],colorPalette[state.text],state.text));
	return _state;
}

function BoxFormat(state) {
	if (!state.id) {
		return state.text;
	}
	var _state = $("<span class='f32' style><span class='flag {0}' style='margin-top:-4px;height:28px;'></span><span class='font-weight-bold' style='padding-left:5px;'>{1}</span></span>"
				    .format(flagCodes[state.text],state.text));
	return _state;
}
