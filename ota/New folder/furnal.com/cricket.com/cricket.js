// var cricketers  =  [
//   {
//      name: 'Rohit Sharma',
//      type: "opener-Batsman",
//      jerseyNo: 45,
//      photo:'https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg',
//      centuries: 43,
//      halfCenturies: 91,
//      work: 'Hitman'
//    },
//   {
//      name: 'Shubman Gill',
//      type: "opener-Batsman",
//      jerseyNo: 77,
//      photo:'https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg',
//      centuries: 12,
//      halfCenturies: 29,
//      work: 'Prince'
//    },
//   {
//      name: 'Virat Kohli',
//      type: "3rd-down-batsman",
//      jerseyNo: 18,
//      photo:'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
//      centuries: 81,
//      halfCenturies: 129,
//      work: 'King'
//    },
//   {
//      name: 'Shreyas Iyer',
//      type: "4th-down-batsman",
//      jerseyNo: 96,
//      photo:'https://www.cricadium.com/_next/image?url=https%3A%2F%2Fadmin.cricadium.com%2Fwp-content%2Fuploads%2F2023%2F09%2FCricadium-84.jpg&w=1920&q=75',
//      centuries: 6,
//      halfCenturies: 30,
//      work: 'High-Flyer'
//    },
//   {
//      name: 'KL Rahul',
//      type: "middle-order-batsman",
//      jerseyNo: 1,
//      photo:'https://documents.bcci.tv/resizedimageskirti/1125_compress.png',
//      centuries: 17,
//      halfCenturies: 41,
//      work: 'Klassy'
//    },
//   {
//      name: 'Hardik Pandya',
//      type: "finisher",
//      jerseyNo: 33,
//      photo:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/388300/388343.5.png',
//      centuries: 0,
//      halfCenturies: 19,
//      work: 'Main emerging player'
//    },
//   {
//      name: 'Ravindra Jadeja',
//      type: "all-rounder",
//      jerseyNo: 8,
//      photo:'https://upload.wikimedia.org/wikipedia/commons/2/2c/PM_Shri_Narendra_Modi_with_Ravindra_Jadeja_%28Cropped%29.jpg',
//      centuries: 0,
//      halfCenturies: 10,
//      work: 'Sir'
//    },
//   {
//      name: 'Axar Patel',
//      type: "all-rounder",
//      jerseyNo: 20,
//      photo:'https://upload.wikimedia.org/wikipedia/commons/a/ad/Axar_Patel_in_PMO_New_Delhi.jpg',
//      centuries: 0,
//      halfCenturies: 9,
//      work: 'Bappu'
//    },
//   {
//      name: 'Harshit Rana',
//      type: "bowler",
//      jerseyNo: 22,
//      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxEOn0Ln7DPrXsw-DJDHGyLiDgZDwNzSrdA&s',
//      centuries: 0,
//      halfCenturies: 0,
//      work: 'Main emerging player'
//    },
//   {
//      name: 'Kuldeep Yadav',
//      type: "bowler",
//      jerseyNo: 23,
//      photo:'https://upload.wikimedia.org/wikipedia/commons/9/91/Kuldeep_Yadav_in_PMO_New_Delhi.jpg',
//      centuries: 0,
//      halfCenturies: 1,
//      work: 'Googly King'
//    },
//   {
//      name: 'Mohammed Shami',
//      type: "bowler",
//      jerseyNo: 11,
//      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeeCvhENpZFEzhGa5MouZA5yfexOtDKSINQ&s',
//      centuries: 12,
//      halfCenturies: 29,
//      work: 'Sensational Lala'
//    },
//  ];
 
//  var currentCricketer = 0;
//  function displayCricketer() {
//    document.getElementById('photo').src = cricketers[currentCricketer].photo;
//    document.getElementById('photo').alt = cricketers[currentCricketer].name + "'s photo"; // ✅ Added alt text
//    document.getElementById('name').innerText = cricketers[currentCricketer].name;
//    document.getElementById('type').innerText = cricketers[currentCricketer].type;
//    document.getElementById('R').innerText = cricketers[currentCricketer].work;
//    document.getElementById('jersey-icon').innerText = cricketers[currentCricketer].jerseyNo;
//    document.getElementById('centuries').innerText = 'Centuries: ' + cricketers[currentCricketer].centuries;
//    document.getElementById('half-centuries').innerText = 'H-Centuries: ' + cricketers[currentCricketer].halfCenturies;
//  }
 
//  // ✅ Display the first cricketer when the page loads
//  displayCricketer();
 
//  document.getElementById('next-button').addEventListener('click', function(){
//    currentCricketer = (currentCricketer + 1) % cricketers.length;
//    displayCricketer();
//  });
 
//  // ✅ Ensure the "animated" class is applied correctly
//  document.getElementById('next-button').classList.add('animated');
  
 


        var cricketers = [
            { name: 'Rohit Sharma', type: "Opener-Batsman", jerseyNo: 45, photo:'https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg', centuries: 43, halfCenturies: 91, work: 'Hitman' },
            { name: 'Shubman Gill', type: "Opener-Batsman", jerseyNo: 77, photo:'https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg', centuries: 12, halfCenturies: 29, work: 'Prince' },
            { name: 'Virat Kohli', type: "3rd-down-batsman", jerseyNo: 18, photo:'https://documents.bcci.tv/resizedimageskirti/164_compress.png', centuries: 81, halfCenturies: 129, work: 'King' }
        ];

        var currentCricketer = 0;

        function displayCricketer() {
            var cricketer = cricketers[currentCricketer];

            document.getElementById('photo').src = cricketer.photo;
            document.getElementById('photo').alt = cricketer.name + "'s photo";
            document.getElementById('name').innerText = cricketer.name;
            document.getElementById('type').innerText = cricketer.type;
            document.getElementById('R').innerText = cricketer.work;
            document.getElementById('jersey-icon').innerText = cricketer.jerseyNo;
            document.getElementById('centuries').innerText = cricketer.centuries;
            document.getElementById('half-centuries').innerText = cricketer.halfCenturies;
        }

        // Display first cricketer on page load
        document.addEventListener("DOMContentLoaded", function () {
            displayCricketer();

            document.getElementById('next-button').addEventListener('click', function() {
                currentCricketer = (currentCricketer + 1) % cricketers.length;
                displayCricketer();
            });

            document.getElementById('next-button').classList.add('animated');
        });