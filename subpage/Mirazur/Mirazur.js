import {restaurants} from '/./restaurant.js'; 

// Insert restaurant data from import 
function insertDatas() {
  const header = document.querySelector('header');
  const container = document.querySelector('.container');
  header.innerHTML = `<h1 class="name">${restaurants[0].name}</h1>
                      <h1 class="rate">Rate: ${restaurants[0].stairs}</h1>`;

  container.innerHTML = `<div class="container">
  <section class="owner">
    <div class="owner-img-container"><img src="/img/${restaurants[0].ownerImg}" class="owner-img" alt=""><div class="owner-name">${restaurants[0].owner}</div></div>
    <p class="owner-presentation">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
  </section>

  <section class="description">
    <h1>Note About <span class="name">${restaurants[0].name}</span></h1>
    <p>Ut id condimentum lacus. Cras non magna vitae ligula cursus posuere. Etiam a nisi facilisis, posuere nisi a, suscipit erat. Sed eget euismod sem. Curabitur eget tempor sem. Donec hendrerit rhoncus orci id ullamcorper. Duis hendrerit lacus rhoncus faucibus euismod. Sed neque mauris, iaculis non ornare pulvinar, sollicitudin et ipsum. Aliquam egestas, nunc eget eleifend tincidunt, velit sapien rhoncus arcu, vel egestas felis quam non felis. Vestibulum ultrices rutrum lacus, in ornare justo volutpat sit amet.
    </p>
    <p>Duis consectetur cursus elit vitae commodo. Integer nec sollicitudin sem, ac mattis turpis. Cras et dapibus lacus, ac feugiat magna. Donec metus nisi, pretium vel felis vitae, eleifend posuere erat. Duis auctor elit tellus, id laoreet magna bibendum non. Nam in aliquet justo. Morbi convallis nibh sapien, hendrerit tempus velit faucibus id. In iaculis eu eros sed sodales. Vivamus fringilla est nec nulla hendrerit, nec cursus eros consequat. Praesent sit amet turpis sit amet mauris feugiat vulputate. Donec sit amet feugiat massa. Nullam sollicitudin ipsum metus, eu lobortis dolor pretium vel. Curabitur auctor, dui ut posuere efficitur, ex lacus elementum nulla, sit amet eleifend dui tortor eu mauris.</p>
  </section>

  <section class="leads">
    <div class="chart-wrapper"><canvas class="chart"></canvas></div>
    <div class="location">
      <h2 class="location-title">Location</h2>
      <div><span class="location-info">Cuntry: </span><span class="country">${restaurants[0].country}</span></div>
      <div><span class="location-info">City: </span><span class="city">${restaurants[0].city}</span></div>
      <div><span class="location-info">Street: </span><span class="street">${restaurants[0].street}</span></div> 
    </div>
  </section>
</div>`;
}
insertDatas();

// Chart with guests's frequency
const chart = document.querySelector('.chart').getContext('2d');
Chart.defaults.global.defaultFontSize = 13;
Chart.defaults.global.defaultFontColor = "#333";
const frequencyGuest = new Chart(chart, {
  type: 'bar',
  data: {
    labels:[8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets:[{
      label: 'Frequency of Guests',
      data: restaurants[0].chartDatas,
    backgroundColor: 'rgb(199, 184, 74)',
    hoverBackgroundColor: 'rgb(199, 184, 74, 0.8)',
    borderWidth: 1,
    borderColor: '#f6f6f6'
    }]
  },
  options:{
    title:{
      display: true,
      text:'Frequency of the guest in the Restaurant',
      fontSize: 23,
      fontColor: '#333' 
    },
    legend:{
      display: false,
    }
  }
})

// Comment scope;
function addComment() {
  // The form variables
  const comments = document.querySelector('.comments');
  const commentForm = document.querySelector('.form');
  const commentText = document.querySelector('.comment-text');
  const commentUser = document.querySelector('.username');

  commentForm.addEventListener('submit', function(e){
    e.preventDefault()

    if (commentText.value === '') return

    // Get currently time
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes()

    // Insert Datas to a new comment
    comments.insertAdjacentHTML('beforeend',
    `<div class="comment">
        <img class="user" src="/img/user.png" alt="">
        <div class="form">
          <div class="comment-data"><span class="new-username">${commentUser.innerHTML}</span><span class="data">${addZero(hour)}:${addZero(minute)}; ${year}-${addZero(month)}-${addZero(day)}</span></div>
          <p>${commentText.value}</p>
        </div>
      </div>`);

    // Reset textarea value
    commentText.value = '';
    // console.log(comments.innerHTML)
  localStorage.setItem(restaurants[0].name, comments.innerHTML);
  
})
  const saved = localStorage.getItem(restaurants[0].name);
  if(saved) {
   comments.insertAdjacentHTML('beforeend', saved);
  }
}

addComment();

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


