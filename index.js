var controller = new ScrollMagic.Controller();
$('body').addClass('stop_scroll');
gsap.set('.sc1 .bg', { height: 0, opacity: 0 });
gsap.set('.box1_1', { x: '-200%' });
gsap.set('.box1_2', { xPercent: 200 });
gsap.set('.box1_3', { yPercent: 200 });

window.addEventListener('beforeunload', function () {
	window.scrollTo(0, 0);
	gsap.to($('body, html'), { duration: 0, scrollTop: 0 });
	$('body').addClass('stop_scroll');
	ScrollTrigger.refresh(true);
});

const bgtext = '안녕하세요 GSAP TEST입니다..';
const text = bgtext.split('');
const durationIncrement = 0.1;
let delay = 0;
console.log(text.length);
for (let i = 0; i < text.length; i++) {
	if (text[i] === ' ') {
		const spanElement = document.createElement('span');
		spanElement.innerHTML = '&nbsp;';
		spanElement.classList.add('gap');
		document.querySelector('figure .intro_txt').appendChild(spanElement);
	} else {
		const spanElement = document.createElement('span');
		spanElement.innerHTML = text[i];
		document.querySelector('figure .intro_txt').appendChild(spanElement);
		spanElement.style.animationDelay = delay + 's';
		delay += durationIncrement;
	}
}

console.log(text);
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
		onComplete: function () {
			$('body').removeClass('stop_scroll');
		},
	});
gsap.fromTo(
	$('figure .intro_txt span'),
	{
		color: '#000',
	},
	{
		delay: 2.2,
		color: '#fff',
	}
);

var wipeAnimation = gsap
	.timeline()
	.to('.sc1 .bg', 3, {
		height: '100%',
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
			scrub: 1,
			pin: true,
			start: 'top 250px',
			end: 'top bottom',
		},
	})
	.to('.box1_2', {
		xPercent: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.wrap',
			scrub: 1.5,
			start: 'top 250px',
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

var sc2Animation = new TimelineMax();
sc2Animation.fromTo(
	'.box2_1',
	10,
	{ opacity: 0, y: 0 },
	{ opacity: 1, y: 0, scale: 1.25, ease: Linear.easeNone }
);
sc2Animation.to('.box2_1', 10, { opacity: 0, y: -100, ease: Linear.easeNone });
sc2Animation.fromTo(
	'.box2_2',
	10,
	{ opacity: 0, y: 0 },
	{ opacity: 1, y: 0, scale: 1.25, ease: Linear.easeNone }
);
sc2Animation.to('.box2_2', 10, { opacity: 0, y: -100, ease: Linear.easeNone });
sc2Animation.fromTo(
	'.box2_3',
	10,
	{ opacity: 0, y: 0 },
	{ opacity: 1, y: 0, scale: 1.25, ease: Linear.easeNone }
);
sc2Animation.to('.box2_3', 10, { opacity: 0, y: -100, ease: Linear.easeNone });
sc2Animation.fromTo(
	'.box2_4',
	10,
	{ opacity: 0, y: 0 },
	{ opacity: 1, y: 0, scale: 1.25, ease: Linear.easeNone }
);
sc2Animation.to('.box2_4', 10, { opacity: 0, y: -100, ease: Linear.easeNone });

new ScrollMagic.Scene({
	triggerElement: '.sc2',
	triggerHook: 'onLeave',
	duration: '500%',
})
	.setPin('.sc2')
	.setTween(sc2Animation)
	.addIndicators()
	.addTo(controller);

var sc3Animation = gsap.timeline().to('.item', {
	scrollTrigger: {
		trigger: '.sc3',
		start: 'center center',
		pin: true,
		end: '+=300%',
		scrub: true,
	},
	xPercent: -400,
});

new ScrollMagic.Scene({
	triggerElement: '.sc3',
	triggerHook: 'onLeave',
	// duration: "500%"
})
	// .setPin(".sc3")
	.setTween(sc3Animation)
	.addIndicators()
	.addTo(controller);
