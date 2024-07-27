const $imgPlace = document.getElementById('sec6Img');
const $slide = document.getElementById('slide');

// container IMAGE SWitch
mfilm = {
   1: 'mfilm/1.jpg',
   2: 'mfilm/2.jpg',
   3: 'mfilm/3.jpg',
   4: 'mfilm/4.jpg',
   5: 'mfilm/5.jpg',
   6: 'mfilm/6.jpg',
   7: 'mfilm/7.jpg',
   8: 'mfilm/8.jpg',
   9: 'mfilm/9.jpg',
   10: 'mfilm/10.jpg'
}

anime = {
   1: 'anime/1.jpg',
   2: 'anime/2.jpg',
   3: 'anime/3.jpg',
   4: 'anime/4.jpg',
   5: 'anime/5.jfif',
   6: 'anime/6.png',
   7: 'anime/7.jpg',
   8: 'anime/8.jpg',
   9: 'anime/9.jpg',
   10: 'anime/10.jpg'
}

function pictureChanging(params) {
   if (params === 'anime') {
      render(anime)
  } else if (params === 'mfilm') {
      render(mfilm)
  }
  function render(name) {
      for (let key in name) {n = Math.floor(key)}
      x = (Math.floor(Math.random() * n)) + 1;
      $imgPlace.style.backgroundImage = `url('img/${name[x]}')`;
  }
}
// container IMAGE Slider
let s = 1;

character = {
   1: {
      name: 'Танжиро Комадо',
      icon: 'bVuVBEOHCRQ.jpg',
      desc: 'Жил обычной жизнью, зарабатывая добыванием угля. Пока семью не убили демоны. Сестре повезло выжить, однако она сама стала демоном. Теперь Танджиро скитается в поисках способа лечения сестры с надеждой сделать её вновь человеком.',
      work: 'Клинок, рассекающий демонов'
   },
   2: {
      name: 'Узумаки Наруто',
      icon: '10f3d7d5ccad6f39b41194f8f73f9033.jpg',
      desc: 'Хочет завести как можно больше друзей, остановить войны и жить в спокойном мире, будучи буквально изгоем в обществе из-за запечатанного внутри демона, он изо всех сил стремится воплотить свою мечту.',
      work: 'Наруто'
   },
   3: {
      name: 'Мэгумин',
      icon: '2n9n_sI3BMQ0Sjsf1dgkaL8OGbtawa.jpg',
      desc: 'Ещё в детстве увидела мощный взрыв и пламя от него, эти воспоминания навсегда остались в её алых глазах. Немного повзрослев, стала изучать магию взрывов.',
      work: 'КоноСуба'
   },
   4: {
      name: 'Тюльпанка',
      icon: 'ac07679eb784512f2c4a7657279555da.jpg',
      desc: 'Обычная 12-летняя девчонка Тюлип обожает приключения. Однажды она попадает в поезд, который не имеет ни начала, ни конца и годами едет без остановок. И для того, чтобы вернуться домой, Тюлип придется раскрыть все секреты.',
      work: 'Бесконечный поезд'
   },
   5: {
      name: 'Мерида',
      icon: 'f655bf92a22028c003cfe1e0db9c92ab.jpg',
      desc: 'Шотландская принцесса, с самого детства она была очень бойкой и смелой, ездила верхом, стреляла из лука и была похожа на своего отца, короля-охотника Фергюса, несмотря на то, что её мать, королева Элинор, обучала её этикету, скромности, церемониалу и прочим вещам, которые буквально раздражали принцессу.',
      work: 'Храбрая сердцем'
   }
}
for (let num in character) {
   m = num;
}

function slider() {
   card = `
   <div class="image">
		<img loading="lazy" src="img/avatar/${character[s].icon}" width="220px" height="220px">
	</div>
	<div class="overlay_image_box">
		<div class="overlay_image_title">${character[s].name}</div>
		<div class="overlay_image_subtitle"><em>${character[s].work}</em><br>${character[s].desc}</div>
	</div>
   `
   $slide.insertAdjacentHTML('beforeend', card)
}

function goLeft() {
   $slide.replaceChildren();
   s = s - 1;
   if (s < 1) {s = m};
   slider();
}

function goRight() {
   $slide.replaceChildren();
   s = s + 1;
   if (s > m) {s = 1};
   slider();
}

slider()