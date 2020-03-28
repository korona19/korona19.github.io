countryList.sort((a, b) => {
	return a > b ? 1 : a < b ? -1 : 0;
});
var displayingData = [];
var mergeOrigin = false;
$(document).ready(function () {
	main();
});
colorPalette = ["rgb(255, 0, 0)", "rgb(153, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 102, 51)"];



function main() {
	$('#countries').select2({
		width: 'resolve',
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
	
	DisplayGraph();
}

function GetCountryGraphData(country, colorIndex) {
	var country_graph = [];
	var data_x = [];
	var sampleCount = country.data.totalCase.length;
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
			name: country.text + " - Total Case",
			visible: "legendonly",
			type: 'scatter',
			// marker: {
			//     color: colorPalette[colorIndex],
			// },
			x: data_x,
			y: country.data.totalCase.slice(0, sampleCount)
		}
	);
	country_graph.push(
		{
			name: country.text + " - Total Death",
			visible: "legendonly",
			type: 'scatter',
			// marker: {
			//     color: colorPalette[colorIndex + 1],
			// },
			x: data_x,
			y: country.data.totalDeath.slice(0, sampleCount)
		}
	);
	country_graph.push(
		{
			name: country.text + " - New Case",
			type: 'bar',
			// marker: {
			//     color: colorPalette[colorIndex],
			// },
			x: data_x,
			y: country.data.newCase.slice(0, sampleCount)
		}
	);
	country_graph.push(
		{
			name: country.text + " - New Death",
			type: 'bar',
			// marker: {
			//     color: colorPalette[colorIndex + 1],
			// },
			x: data_x,
			y: country.data.newDeath.slice(0, sampleCount)
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
		plot_bgcolor:"#e9ecef",
		paper_bgcolor:"#e9ecef",
		xaxis: {
			tickformat: '%d.%m.%y',
			title: {
				text: "Date"
			}
		},
		yaxis: {
			title: {
				text: "Person"
			}
		}
	};
	if (mergeOrigin == true) {
		delete layout.xaxis.tickformat
	}
	Plotly.newPlot('totalGraph', graph_data, layout,{scrollZoom:false,staticPlot: true});
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