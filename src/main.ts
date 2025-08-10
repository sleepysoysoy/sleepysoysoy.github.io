import './style.css'
import Phaser from 'phaser'

class MyScene extends Phaser.Scene {
	constructor() {
		super('MyScene');
	}

	preload() {
		this.load.image('background', 'background.webp');
		this.load.image('flame', 'https://labs.phaser.io/assets/particles/yellow.png');
	}

	create() {

		const bg = this.add.image(0, 0, 'background');
		bg.setOrigin(0, 0); // Align top-left corner
		bg.setDisplaySize(this.sys.game.config.width as number, this.sys.game.config.height as number);

		this.add.particles(1158, 20
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(1127, 10
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(1090, 29
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(1054, 23
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(964, 23
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});

		this.add.particles(934, 29
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(889, 12
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(846, 20
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(1370, 705
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});
		this.add.particles(1428, 705
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});

		this.add.particles(1554, 400
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});

		this.add.particles(1616, 400
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});

		this.add.particles(368, 400
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});

		this.add.particles(430, 400
			, 'flame', {
			speed: { min: -50, max: 50 },
			angle: { min: -85, max: -95 },
			scale: { start: 0.1, end: 0 },
			alpha: { start: 1, end: 0 },
			lifespan: 600,
			blendMode: 'ADD',
			frequency: 50
		});

	}

}

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 2000,
	height: 1200,
	backgroundColor: '#1d1d1d',
	scene: MyScene,
	scale: {
		mode: Phaser.Scale.FIT,  // This makes it responsive and fits the screen
		autoCenter: Phaser.Scale.CENTER_BOTH
	}
};

new Phaser.Game(config);
//
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
