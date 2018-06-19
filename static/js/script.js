console.log('test');
var ctx = document.getElementById('myChart');
var cat = [];
var nums = [];
// loop through set variables to gorilla and bear and increment variables based on answer

data.forEach(function (item) {
  if (cat.indexOf(item.answer) === -1) {
    cat.push(item.answer)
    console.log(cat)
    var index = cat.indexOf(item.answer)
    console.log(index)
    nums[index] = 1
  } else {
    var index = cat.indexOf(item.answer)
    nums[index]++
  }
})

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: cat,
    datasets: [{
      label: '# of Votes',
      data: nums
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});