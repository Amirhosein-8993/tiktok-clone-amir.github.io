const heart = document.querySelector('.heart')
      const animationHeart = document.querySelector('.animation-heart');
      heart.addEventListener('click', () => {
      animationHeart.classList.add('animation')
      heart.classList.add('fill-color')
      })
      animationHeart.addEventListener('click', () => {
        animationHeart.classList.remove('animation');
        heart.classList.remove('fill-color')
      })

      const heart1 = document.querySelector('.heart1')
      const animationHeart1 = document.querySelector('.animation-heart1');
      heart1.addEventListener('click', () => {
      animationHeart1.classList.add('animation')
      heart1.classList.add('fill-color')
      })
      animationHeart1.addEventListener('click', () => {
        animationHeart1.classList.remove('animation');
        heart1.classList.remove('fill-color')
      })

      const heart2 = document.querySelector('.heart2')
      const animationHeart2 = document.querySelector('.animation-heart2');
      heart2.addEventListener('click', () => {
      animationHeart2.classList.add('animation')
      heart2.classList.add('fill-color')
      })
      animationHeart2.addEventListener('click', () => {
        animationHeart2.classList.remove('animation');
        heart2.classList.remove('fill-color')
      })

      const heart3 = document.querySelector('.heart3')
      const animationHeart3 = document.querySelector('.animation-heart3');
      heart3.addEventListener('click', () => {
      animationHeart3.classList.add('animation')
      heart3.classList.add('fill-color')
      })
      animationHeart3.addEventListener('click', () => {
        animationHeart3.classList.remove('animation');
        heart3.classList.remove('fill-color')
      })

      const heart4 = document.querySelector('.heart4')
      const animationHeart4 = document.querySelector('.animation-heart4');
      heart4.addEventListener('click', () => {
      animationHeart4.classList.add('animation')
      heart4.classList.add('fill-color')
      })
      animationHeart4.addEventListener('click', () => {
        animationHeart4.classList.remove('animation');
        heart4.classList.remove('fill-color')
      })

      const videos = document.querySelectorAll('video');
      for (const video of videos) {
        video.addEventListener('click', function () {
          console.log('clicked');
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
      }

      function myapp() {
        document.getElementById('text').innerHTML = '1';
      }
      function myapp1() {
        document.getElementById('text1').innerHTML = '1';
      }
      function myapp2() {
        document.getElementById('text2').innerHTML = '1';
      }
      function myapp3() {
        document.getElementById('text3').innerHTML = '1';
      }
      function myapp4() {
        document.getElementById('text4').innerHTML = '1';
      }
