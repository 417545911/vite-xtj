<script setup lang="ts">
import { onMounted, ref } from 'vue';
import selfPlanePath from '@/assets/airplane/self1-1.png';
import enemyPlanePath from '@/assets/airplane/enemy1-1.png';

const canvas1 = ref();
/** 我方战机图片资源 */
const selfPlane = ref();
/** 敌机图片资源 */
const enemyPlane = ref();
/** 多个敌机对象组成的对象 */
const enemys: Record<string, any> = {};
/** 多个子弹对象组成的对象 */
const bullets: Record<string, any> = {};

const canHeight = window.innerHeight;
const canWidth = window.innerWidth;

/** 我方战机对象的实现 */
function createFighter(ctx: any) {
  const selfWidth = selfPlane.value.width;
  const selfHeight = selfPlane.value.height;
  const fighter = {
    x: 130,
    y: canHeight - selfHeight,
    w: selfWidth,
    h: selfHeight,
    speed: 10,
    move(x: number) {
      ctx.clearRect(this.x, this.y, this.w, this.h);
      ctx.drawImage(selfPlane.value, (this.x += x), this.y);
    },
    left() {
      this.move(-this.speed);
    },
    right() {
      this.move(this.speed);
    },
  };

  ctx.drawImage(selfPlane.value, fighter.x, fighter.y);

  window.addEventListener('keydown', e => {
    if (e.keyCode == 37) {
      fighter.left();
    } else {
      fighter.right();
    }
  });

  return fighter;
}

/** 敌方战机对象的实现 */
function createEnemy(ctx: any) {
  let timer: any = null;
  const enemyWidth = enemyPlane.value.width;
  const enemyHeight = enemyPlane.value.height;
  const enemy = {
    x: Math.random() * (canWidth - enemyWidth),
    y: 0,
    name: '',
    w: enemyWidth,
    h: enemyHeight,
    clear() {
      ctx.clearRect(this.x, this.y, this.w, this.h);
    },
    stop() {
      clearInterval(timer);
      enemys[this.name] = null;
      delete enemys[this.name];
    },
    init() {
      ctx.drawImage(enemyPlane.value, enemy.x, enemy.y);
      timer = setInterval(() => {
        if (this.y > canHeight) {
          this.stop();
          return;
        }
        this.clear();
        ctx.drawImage(enemyPlane.value, this.x, (this.y += 3));
      }, 20);
    },
  };
  enemy.init();

  return enemy;
}

/** 子弹对象的实现 */
function createBullet(ctx: any, x: number, y: number, speed: number) {
  let timer: any = null;
  const bullet = {
    x,
    y,
    name: '',
    init() {
      timer = setInterval(() => {
        if (this.y < 0) {
          this.stop();
          enemys[this.name] = null;
          return;
        }
        this.fly();
      }, speed);
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(x, y, 4, 8);
    },
    stop() {
      clearInterval(timer);
      bullets[this.name] = null;
    },
    fly() {
      this.check();
      ctx.clearRect(this.x, this.y, 4, 8);
      ctx.fillRect(this.x, (this.y -= 50), 4, 8);
    },
    check() {
      const x1 = this.x;
      const y1 = this.y;
      const w1 = 2;
      const h1 = 4;
      for (const key in enemys) {
        const e = enemys[key];
        if (!e) continue;
        const x2 = e.x,
          y2 = e.y,
          w2 = e.w,
          h2 = e.h;
        /** 矩形的碰撞检测 */
        if (x1 + w1 > x2 && x1 < x2 + w2 && y1 + h1 > y2 && y1 < y2 + h2) {
          enemys[e.name].clear();
          enemys[e.name].stop();
        }
      }
    },
  };
  bullet.init();
  return bullet;
}

/** 图片加载 */
function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject();
    image.src = src;
  });
}

onMounted(async () => {
  canvas1.value.height = canHeight;
  canvas1.value.width = canWidth;
  const ctx1 = canvas1.value.getContext('2d');
  selfPlane.value = await loadImage(selfPlanePath);
  const myFig = createFighter(ctx1);
  enemyPlane.value = await loadImage(enemyPlanePath);
  setInterval(() => {
    const n = Math.random();
    enemys[n] = createEnemy(ctx1);
    enemys[n].name = n;
  }, 1000);
  setInterval(() => {
    const n = Math.random();
    bullets[n] = createBullet(ctx1, myFig.x + myFig.w / 2, myFig.y - 10, 100);
    bullets[n].name = n;
  }, 200);
});
</script>

<template>
  <div class="main-box">
    <canvas class="canvas1" ref="canvas1">您的浏览器不支持canvas!</canvas>
    <div class="bgc"></div>
  </div>
</template>

<style lang="scss" scoped>
.main-box {
  position: relative;
  width: 100vw;
  height: 100vh;
  .bgc {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('@/assets/airplane/bg1.jpg');
    z-index: 1;
    animation: flymove 10s linear 20000;
  }
  .canvas1 {
    position: absolute;
    z-index: 2;
  }
}
@keyframes flymove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 800px;
  }
}
</style>
