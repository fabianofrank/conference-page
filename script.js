// eslint-disable-next-line no-unused-vars
const speakers = {
  user1: {
    title: 'Junior',
    image: ['images/photo1.png'],
    text: ['CEO of MEI in Brazil'],
    paragraph: ['The industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
  },
  user2: {
    title: 'Julia',
    image: ['images/photo2.png'],
    text: ['CEO of MEI in Brazil'],
    paragraph: ['The industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
  },
  user3: {
    title: 'Jessica',
    image: ['images/photo3.png'],
    hidden: ['hide'],
    text: ['CEO of MEI in Brazil'],
    paragraph: ['The industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
  },
  user4: {
    title: 'Jenilvado',
    image: ['images/photo4.png'],
    hidden: ['hide'],
    text: ['CEO of MEI in Brazil'],
    paragraph: ['The industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
  },
  user5: {
    title: 'Jander',
    image: ['images/photo5.png'],
    hidden: ['hide'],
    text: ['CEO of MEI in Brazil'],
    paragraph: ['The industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
  },
  user6: {
    title: 'Jarles',
    image: ['images/photo6.png'],
    hidden: ['hide'],
    text: ['CEO of MEI in Brazil'],
    paragraph: ['The industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
  },
};

const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
Object.keys(users).forEach((index) => {
  const objName = users[index];
  document.getElementById('featured').innerHTML += `
  <div class="${speakers[objName].hidden}">
    <div class="speakers-flex">
    <div class="photos">
      <img src="${speakers[objName].image}" alt="" class="photo">
    </div>
    <div class="profile">
      <h3>${speakers[objName].title}</h3>
      <h6>${speakers[objName].text}</h6>
      <div class="vector-profile"></div>
      <p>${speakers[objName].paragraph}</p>
    </div>
    </div>
  </div>`;
});

/* eslint-disable no-unused-vars */

function toggle() {
  const toggleMenu = document.getElementById('toggle-menu');
  const hideMenu = document.getElementById('hide-menu');
  if (toggleMenu.style.display === 'block') {
    toggleMenu.style.display = 'none';
    hideMenu.style.display = 'block';
  } else {
    toggleMenu.style.display = 'block';
    hideMenu.style.display = 'none';
  }
}

/* eslint-enable no-unused-vars */