var controller = new ScrollMagic.Controller();

//reset
// $('body').addClass('stop_scroll');
gsap.set('.sc1 .bg', { height: 50, opacity: 0 });
gsap.set('.box1_1', { x: '-200%' });
gsap.set('.box1_2', { xPercent: 200 });
gsap.set('.box1_3', { yPercent: 200 });

//load
window.addEventListener('beforeunload', function () {
	window.scrollTo(0, 0);
	gsap.to($('body, html'), { duration: 0, scrollTop: 0 });
	$('body').addClass('stop_scroll');
	ScrollTrigger.refresh(true);
});


//intro text
const bgtext = '안녕하세요 GSAP TEST입니다.';
const text = bgtext.split('');
const durationIncrement = 0.1;
let delay = 0;
for (let i = 0; i < text.length; i++) {
	if (text[i] === ' ') {
		const spanElement = document.createElement('span');
		spanElement.innerHTML = '&nbsp;';
		spanElement.classList.add('gap');
		document.querySelector('figure .intro_txt h2').appendChild(spanElement);
	} else {
		const spanElement = document.createElement('span');
		spanElement.innerHTML = text[i];
		document.querySelector('figure .intro_txt h2').appendChild(spanElement);
		spanElement.style.animationDelay = delay + 's';
		delay += durationIncrement;
	}
}

var _visualInitTop = window.innerHeight - 200;
var _visualMaxHeight = window.innerHeight;
var figureAnimation = gsap
	.timeline()
	.to('figure .bg', {
		top: _visualInitTop,
		opacity: 1,
		delay: 1.5,
		onComplete: function () {
			$('header').addClass('on');
		},
	})
	.to('figure .bg', 1, {
		width: '100%',
		top: 0,
		height: _visualMaxHeight,
		delay: 0.1,
	});
	gsap.to(
		$('figure .intro_txt h2 span'),
		{
			fontSize: '34px',
			color: '#fff',
			delay: 2.3,
		}
	);
	gsap.to(
		$('figure .intro_txt h2'),
		{
			delay: 2.6,
			top:150,
			left:0,
			onComplete: function () {
				$('figure .intro_txt').css({
					'display':'block',
					'padding-top': '150px',
				})
				$('figure .intro_txt .items').css({
					'display':'block',
				})
				$('body').removeClass('stop_scroll');
				gsap.fromTo(
					$('figure .intro_txt .item1'),
					{
						opacity: 0,
					},
					{
						delay: 0.3,
						duration: 1,
						opacity: 1,

					}
				);
				gsap.fromTo(
					$('figure .intro_txt .item2'),
					{
						opacity: 0,
					},
					{
						delay: 0.3,
						duration: 1,
						opacity: 1,

					}
				);
				gsap.fromTo(
					$('figure .intro_txt .item3 .introduction'),
					{
						opacity: 0,
						transform: 'translateY(50px)',
					},
					{
						delay: 1,
						duration: 0.5,
						transform: 'translateY(0)',
						opacity: 1,
					}
				);
				gsap.fromTo(
					$('figure .intro_txt .item3 .skill h3'),
					{
						opacity: 0,
					},
					{
						delay: 1.5,
						duration: 0.5,
						opacity: 1,
					}
				);
				gsap.fromTo(
					$('figure .intro_txt .item3 .skill li'),
					{
						opacity: 0,
						transform: 'rotateY(-180deg)',
					},
					{
						delay: 1.5,
						duration: 0.5,
						transform: 'rotateY(0)',
						opacity: 1,
					}
				);
				gsap.fromTo(
					$('figure .intro_txt .skill_motion'),
					{
						opacity: 0,
						transform: 'translateY(200px)',
					},
					{
						delay: 2,
						duration: 0.5,
						transform: 'translateY(0)',
						opacity: 1,
					}
				);
			},
		}
	);


var wipeAnimation = gsap
	.timeline()
	.to('.sc1 .bg', 3, {
		height: 'calc(100% + 1px)',
		opacity: 1,
		borderRadius: 0,
		scrollTrigger: {
			trigger: '.sc1',
			scrub: 1.5,
			start: 'top 300px',
			end: 'top bottom',
		},
	})
	.to('.box1_1', {
		x: 0,
		borderRadius: 0,
		scrollTrigger: {
			trigger: '.wrap',
			scrub: 1.5,
			start: 'top 300px',
			end: 'top bottom',
		},
	})
	.to('.box1_2', {
		xPercent: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.wrap',
			scrub: 1.5,
			start: 'top 300px',
			end: 'top bottom',
		},
	})
	.to('.box1_3', {
		yPercent: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.wrap',
			scrub: 2,
			start: 'top 250px',
			end: 'top bottom',
		},
	});
let sc1 = new ScrollMagic.Scene({
	triggerElement: '.sc1',
	triggerHook: 'onLeave',
	duration: '500',
})
	.setPin('.sc1')
	.setTween(wipeAnimation)
	.addIndicators()
	.addTo(controller);

var sc2Animation = gsap.timeline().to('.item', {
	scrollTrigger: {
		trigger: '.sc2',
		start: 'center center',
		pin: true,
		end: '+=300%',
		scrub: true,
	},
	xPercent: -400,
});

new ScrollMagic.Scene({
	triggerElement: '.sc2',
	triggerHook: 'onLeave',
})
	.setTween(sc2Animation)
	.addIndicators()
	.addTo(controller);



// skill_motion
const focus_motion = document.querySelector('.skill_value');
const focus_guide = document.querySelector('.guide');
const skill_items = document.querySelector('.skill');
const skill_item = skill_items.querySelectorAll('ul li');
const focus_items = focus_motion.textContent.split(' ');

skill_item.forEach((el, idx) => {
  el.addEventListener('mouseenter', (e) => {
		focus_motion.classList.remove('blind');
		focus_guide.classList.add('blind');
    let index = el.querySelector('span').textContent;

		focus_motion.innerHTML = focus_items.map(item =>{
			if(item !== index){
				return `<span class="animated">${index}</span>`;
			}else{
				return item;
			}
		}).join(' ');

		void focus_motion.offsetWidth;
    const animatedSpans = focus_motion.querySelectorAll('.animated');
    animatedSpans.forEach(span => {
			span.classList.add('appear');
    });
  });
});