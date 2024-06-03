// start right navbar 
const getsitesettings = document.getElementById("sitesettings");

    getsitesettings.addEventListener('click',function(){
        document.body.classList.toggle("shownav");
    });
// end right navbar 

// Start Navbar 
    // start top navbar 
    function dropbtn(e){
        // console.log(e.target);
        // console.log(e.target.parentElement.nextElementSibling);
        
        e.target.parentElement.nextElementSibling.classList.toggle("show");
    }
    // end top navbar 
// end Navbar 

$(document).ready(function(){
    // start navbar
        // start left sidebar
        $(".sidebarlinks").click(function(){
            $("sidebarlinks").removeClass("currents");
            $(this).addClass("currents");
        }); 
        // end left sidebar 
    // end navbar 
});

// start gauge area

var gaugeusr = new JustGage({
    id: "gaugeusers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugecus = new JustGage({
    id: "gaugecustomers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});



var gaugeemp = new JustGage({
    id: "gaugeemployees", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});




var gaugeinv = new JustGage({
    id: "gaugeinvestors", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

// update the value randomly
setInterval(() => {
gaugeusr.refresh(Math.random() * 100);
gaugecus.refresh(Math.random() * 100);
gaugeemp.refresh(Math.random() * 100);
gaugeinv.refresh(Math.random() * 100);
}, 5000)



// end gauge area

//start expenses area
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  
});

//end expenses area

// start earning area 
google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
  
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
          ]);
  
          var options = {
            title: 'Sales Performance',
            curveType: 'function', 
            legend: { position: 'bottom' }
          };
  
          var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  
          chart.draw(data, options);
        }
// end earning area 


// Start Footer
const getyear = document.getElementById("getyear");
const getfullyear = new Date().getFullYear();
getyear.textContent =getfullyear;

// End Footer