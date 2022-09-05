

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:


var xArray = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
            
let unitList = [
[
    [0,0,3,5,8,10,22,26,36,57,85,98],
    [13,30,37,48,63,86,105],
    [ , , , ,199,226,272],
    [ , , , ,520,526,513],        
    "Estaca Cárdenas México"
],
[
    [0,0,0,0,0,0,3,3,3,3,5,6],
    [1,3,5,8,11,15,18],
    [ , , , ,26,30,35],
    [ , , , ,52,55,60],        
    "Barrio Cañales"
],
[
    [0,0,0,0,1,1,2,2,5,7,8,8],
    [1,1,1,2,3,3,8],
    [ , , , ,21,22,27],
    [ , , , ,57,59,54],      
    "Barrio Comalcalco"
],
[
    [0,0,3,4,5,5,12,13,13,14,14,21],
    [8,10,11,11,12,21,22],
    [ , , , ,33,39,43],
    [ , , , ,71,70,73],        
    "Barrio Cunduacán"
],
[
    [0,0,0,0,0,1,1,1,3,3,4,4],
    [0,0,0,0,0,1,2],
    [ , , , ,10,10,13],
    [ , , , ,39,40,41],       
    "Barrio Cárdenas"
],
[
    [0,0,0,0,0,0,1,1,1,3,3,3],
    [1,1,1,1,1,1,4],
    [ , , , ,7,7,16],
    [ , , , ,26,28,27],        
    "Rama Huimanguillo"
],
[
    [0,0,0,0,0,0,0,2,2,3,7,8],
    [0,5,6,11,13,17,20],
    [10,17,18,26,26,28,31],
    [ , , , ,32,34,36],        
    "Barrio Los Reyes"
],
[
    [0,0,0,1,1,1,1,2,2,15,32,32],
    [2,6,9,9,10,12,15],
    [ , , , ,32,39,50],
    [ , , , ,79,82,84],        
    "Barrio Morelos"
],
[
    [0,0,0,0,0,2,2,2,7,8,10,11],
    [1, 3, 3, 5, 12, 13, 13],
    [ , , , ,33,35,38],
    [ , , , ,76,78,79],        
    "Barrio Paraíso"
],
[
    [0,0,0,0,0,0,0,0,0,1,2,5],
    [0,1,1,1,1,3,3],
    [ , , , ,11,15,16],
    [ , , , ,41,40,43],        
    "Barrio Petrolera"
],
[
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,1,3],
    [ , , , ,21,20,23],        
    "Rama Sánchez Magallanes"
]                
]

let unitGroupList = [
[
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [63,58,5,4,19],
    [86,78,8,9,22],
    [105,93,12,11,24],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],            
    "Estaca Cárdenas México"
],
[
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [11,11,0,1,0],
    [15,15,0,2,0],
    [18,18,0,2,0],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    "Barrio Cañales"
],
[
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [3,3,0,2,2],
    [3,3,0,1,2],
    [8,8,0,2,3],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    "Barrio Comalcalco"
],
[
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [12,8,4,0,3],
    [21,15,6,3,5],
    [22,16,6,3,5],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    "Barrio Cunduacán"
],
[
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [0,0,0,0,0],
    [1,1,0,0,0],
    [2,2,0,0,0],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    "Barrio Cárdenas"
],
[
    [ , , , , ],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [4,3,1,0,1],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    "Rama Huimanguillo"
],
[
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    "Barrio Los Reyes"
],
[
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [10, 10, 0, 0, 4],
    [12, 12, 0, 0, 5],
    [15, 13, 2, 0, 5],
    [ , 13, 2, 0, 5],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    "Barrio Morelos"
],
[
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    "Barrio Paraíso"
],
[
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    "Barrio Petrolera"
],
[
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    "Rama Sánchez Magallanes"
]
]


const reset = () => {
    document.querySelector('#myPlot').innerHTML = '';
}


const showBy = () => {
    reset()
    let filter = document.querySelector('#showBy').value;

    switch (filter) {

        case 'estakeCardenas':
            
            // Define Data 
            var data = [
            {x: xArray, y: unitList[0][0], name:"2021", type:"bar"},
            {x: xArray, y: unitList[0][1], name:"2022", type:"bar"},
            {x: xArray, y: unitList[0][2], name:"FamilySearch", mode:"lines"},
            {x: xArray, y: unitList[0][3], name:"Recomendación", mode:"lines"}                        
            ];
            // document.getElementById("demo").innerHTML = unitList[0][2];
            // Define Layout
                var recom =  unitList[8][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[8][recom]], title: "Membresía"},
            title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
            };
            
            // Display using Plotly
            Plotly.newPlot("myPlot", data, layout);
            break;
            
        case 'wardCanales':
            
            // Define Data 
            var data = [
            {x: xArray, y: unitList[1][0], name:"2021", type:"bar"},
            {x: xArray, y: unitList[1][1], name:"2022", type:"bar"},
            {x: xArray, y: unitList[1][2], name:"FamilySearch", mode:"lines"},
            {x: xArray, y: unitList[1][3], name:"Recomendación", mode:"lines"}                        
            ];
            // document.getElementById("demo").innerHTML = unitList[1][2];    
            // Define Layout
                var recom =  unitList[1][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[1][recom]], title: "Membresía"},
            title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
            };
            
            // Display using Plotly
            Plotly.newPlot("myPlot", data, layout);
            break;
            
        case 'wardComalcalco':
        
            // Define Data 
            var data = [
            {x: xArray, y: unitList[2][0], name:"2021", type:"bar"},
            {x: xArray, y: unitList[2][1], name:"2022", type:"bar"},
            {x: xArray, y: unitList[2][2], name:"FamilySearch", mode:"lines"}, 
            {x: xArray, y: unitList[2][3], name:"Recomendación", mode:"lines"}                        
            ];
            // document.getElementById("demo").innerHTML = unitList[2][2];    
            // Define Layout
                var recom =  unitList[2][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[2][recom]], title: "Membresía"}, 
            title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
            };
            
            // Display using Plotly
            Plotly.newPlot("myPlot", data, layout);
            break;
        
            case 'wardCunduacn':
        
                // Define Data 
                var data = [
                {x: xArray, y: unitList[3][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[3][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[3][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[3][3], name:"Recomendación", mode:"lines"}                            
                ];
                // document.getElementById("demo").innerHTML = unitList[3][2];    
                // Define Layout
                var recom =  unitList[3][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[3][recom]], title: "Membresía"},  
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;
        
            case 'wardCardenas':
    
                // Define Data 
                var data = [
                {x: xArray, y: unitList[4][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[4][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[4][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[4][3], name:"Recomendación", mode:"lines"}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[4][2];    
                // Define Layout
                var recom =  unitList[4][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[4][recom]], title: "Membresía"},
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;
        
            case 'branchHuimanguillo':

                // Define Data 
                var data = [
                {x: xArray, y: unitList[5][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[5][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[5][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[5][3], name:"Recomendación", mode:"lines"}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[5][2];    
                // Define Layout
                var recom =  unitList[5][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[5][recom]], title: "Membresía"},

                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;
            
            case 'wardReyes':

                // Define Data 
                var data = [
                {x: xArray, y: unitList[6][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[6][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[6][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[6][3], name:"Recomendación", mode:"lines"}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[6][2];    
                // Define Layout
                var recom =  unitList[6][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[6][recom]], title: "Membresía"},
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;
            
            case 'wardMorelos':

                // Define Data 
                var data = [
                {x: xArray, y: unitList[7][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[7][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[7][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[7][3], name:"Recomendación", mode:"lines"}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[7][2];    
                // Define Layout
                var recom =  unitList[7][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[7][recom]], title: "Membresía"}, 
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;
            
            case 'wardParaiso':

                // Define Data 
                var data = [
                {x: xArray, y: unitList[8][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[8][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[8][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[8][3], name:"Recomendación", mode:"lines"}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[8][2];    
                // Define Layout
                var recom =  unitList[8][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[8][recom]], title: "Membresía"}, 
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;

            case 'wardPetrolera':

                // Define Data 
                var data = [
                {x: xArray, y: unitList[9][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[9][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[9][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[9][3], name:"Recomendación", mode:"lines"}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[9][2];    
                // Define Layout
                var recom =  unitList[9][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[9][recom]], title: "Membresía"},
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;

            case 'branchMagallanes':

                // Define Data 
                var data = [
                {x: xArray, y: unitList[10][0], name:"2021", type:"bar"},
                {x: xArray, y: unitList[10][1], name:"2022", type:"bar"},
                {x: xArray, y: unitList[10][2], name:"FamilySearch", mode:"lines"},
                {x: xArray, y: unitList[10][3], name:"Recomendación", mode:"lines"}                             
                ];
                //document.getElementById("demo").innerHTML = unitList[10][2];    
                // Define Layout
                var recom =  unitList[10][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[10][recom]], title: "Membresía"},
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                
                // Display using Plotly
                Plotly.newPlot("myPlot", data, layout);
                break;
                                                                
        default:
            
            // Define Data 
            var data = [
            {x: xArray, y: unitList[0][0], name:"2021", type:"bar"},
            {x: xArray, y: unitList[0][1], name:"2022", type:"bar"},
            {x: xArray, y: unitList[0][2], name:"FamilySearch", mode:"lines"},
            {x: xArray, y: unitList[0][3], name:"Recomendación", mode:"lines"}                             
            ];
            // document.getElementById("demo").innerHTML = unitList[0][0];    
            // Define Layout
                var recom =  unitList[0][3].length
                var layout = {
                xaxis: { title: ""},
                yaxis: {range: [0, unitList[0][recom]], title: "Membresía"},
            title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
            };
       
            // Display using Plotly
            Plotly.newPlot("myPlot", data, layout);
            break;
    }

}

document.querySelector('#showBy').addEventListener('change', showBy);
