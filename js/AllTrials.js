var items = ["Cotton Candy","Basketball","Nerf Football","Gummy Bear","Oobleck","Feather","Water Balloon","Watermelon","Apple"]
var mass = [0.3,590,49,1.4,2.5,0.01,4,3500,70]
var xaxisarray = items;
var trial1 = {
    x: xaxisarray,
    y: [1,1.81,1.58,1.65,0.87,6.55,1.37,1.01,1.49],
    name: 'Trial 1',
    type: 'bar'
  };
  
  var trial2 = {
    x: xaxisarray,
    y: [1.51,1.03,1.25,2.02,0.81,6.1,1.21,"",1.39],
    name: 'Trial 2',
    type: 'bar'
  };
  
  var trial3 = {
    x: xaxisarray,
    y: [1.89,1.36,1.07,1.39,0.86,3.21,1.17,"",1.1],
    name: 'Trial3',
    type: 'bar'
  };

  var average = {
      x: xaxisarray,
      y: [1.47,1.4,1.3,1.69,0.85,5.29,1.25,1.01,1.33],
      name: "Average",
      type: "bar"
  }

  var data = [trial1, trial2,trial3,average];
  
  var layout = {
    barmode: 'group',
    title: {
      text:'Drop Data',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    yaxis: {
      title: {
        text: 'Time (s)',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    xaxis: {
      title: {
        text: (xaxisarray == items) ? 'Item' : 'Mass',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };
  function ReverseXAndY(data){
    var datareversed = data;
    for(var i = 0; i < datareversed.y.length; i++){
      var temp = datareversed.x;
      datareversed.x = datareversed.y;
      datareversed.y = temp;
    }
    return datareversed;
  }
  
  
  Plotly.newPlot('myDiv', data, layout);

  