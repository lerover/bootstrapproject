<!-- Raphael must be included before justgage -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/justgage/1.2.9/justgage.min.js"></script>



// start gauge area 

var gaugeurs = new JustGage({
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

var gaugeems = new JustGage({
    id: "gaugeemployees", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugeins = new JustGage({
    id: "gaugeinvestors", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});
// update the value randomly
setInterval(() => {
gaugeurs.refresh(Math.random() * 100);
gaugecus.refresh(Math.random() * 100);
gaugeems.refresh(Math.random() * 100);
gaugeins.refresh(Math.random() * 100);
}, 5000)

// end gauge area 

// start expensess area 
const ctx = document.getElementById("myChart");

new CharacterData(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [12, 19, 3],
            borderWidth: 1
        }]
    },
    options: {
    }
});
// end expensess area 