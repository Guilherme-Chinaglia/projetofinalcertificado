$(function(){
	
	$('html, body').on('click', function(e){
		if(e.target == document.documentElement){	
			$('html, body').removeClass('show-menu');
		}
	});

	$('#js-open-sidebar').on('click',  function(){
		$('html').addClass('show-menu');
	});
});

//Chart.js
//Visitors Chart
  new Chart(document.getElementById("visitors"), {
  type: 'line',
  data: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [{ 
        data: [390,250,300,150,0,180,280],
        label: "Visitors",
        borderColor: "#3cba9f",
        fill: false
      },
    ]
  },
  options: {
    title: {
      display: false,
      text: ''
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

//Bar chart
new Chart(document.getElementById("subscriptions"), {
    type: 'bar',
    data: {
      labels: ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "",
          backgroundColor: ["#3cba9f", "#3cba9f","#3cba9f","#3cba9f","#3cba9f","#3cba9f","#3cba9f"],
          data: [310,150,80,100,200,290,440]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: ''
      }
    },
    responsive: true,
    maintainAspectRatio: false
});

//Pie chart
//overview-um
new Chart(document.getElementById("overview"), {
    type: 'doughnut',
    data: {
      labels:["Followers", "Shares", "Likes", "Comments"],
      datasets:[
        {
          label: "Overview",
          backgroundColor:["#3cba9f", "#c45850", "#50341b", "#c17e44"],
          data:[34, 60, 93, 10]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: 'Overviem'
      },
      cutoutPercentage:80,
      responsive: true,
      maintainAspectRatio: false
    }
});