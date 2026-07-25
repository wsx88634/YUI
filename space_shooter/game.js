/**
 * 霓虹星空射擊戰 - Neon Galaxy
 * 核心遊戲邏輯 (Vanilla JS & HTML5 Canvas)
 */

// --- 音效管理器 (Web Audio API Synthesizer) ---
class SoundEffects {
    constructor() {
        this.ctx = null;
        this.muted = false;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        // 如果處於暫停狀態，嘗試恢復（瀏覽器安全限制）
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playShoot() {
        if (!this.ctx || this.muted) return;
        this.init();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.12);
        
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
        
        osc.start(now);
        osc.stop(now + 0.12);
    }

    playEnemyShoot() {
        if (!this.ctx || this.muted) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.2);
        
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        
        osc.start(now);
        osc.stop(now + 0.2);
    }

    playExplosion() {
        if (!this.ctx || this.muted) return;
        const now = this.ctx.currentTime;
        
        // 創建白噪音緩衝區
        const bufferSize = this.ctx.sampleRate * 0.25; // 0.25 秒
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, now);
        filter.frequency.exponentialRampToValueAtTime(80, now + 0.25);
        
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        
        noise.start(now);
        noise.stop(now + 0.25);
    }

    playHit() {
        if (!this.ctx || this.muted) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.setValueAtTime(120, now + 0.05);
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
        
        osc.start(now);
        osc.stop(now + 0.08);
    }

    playPowerup() {
        if (!this.ctx || this.muted) return;
        const now = this.ctx.currentTime;
        
        const playTone = (freq, time, dur) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.frequency.setValueAtTime(freq, time);
            gain.gain.setValueAtTime(0.15, time);
            gain.gain.linearRampToValueAtTime(0.01, time + dur);
            osc.start(time);
            osc.stop(time + dur);
        };

        // 琶音效果
        playTone(330, now, 0.08);       // Mi
        playTone(392, now + 0.06, 0.08); // Sol
        playTone(523, now + 0.12, 0.08); // Do
        playTone(659, now + 0.18, 0.15); // Mi (高音)
    }

    playBomb() {
        if (!this.ctx || this.muted) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.linearRampToValueAtTime(450, now + 0.3);
        osc.frequency.exponentialRampToValueAtTime(40, now + 1.0);
        
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
        
        osc.start(now);
        osc.stop(now + 1.0);
    }

    playVictory() {
        if (!this.ctx || this.muted) return;
        const now = this.ctx.currentTime;
        const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50]; // C大調音階
        notes.forEach((freq, idx) => {
            const playTime = now + idx * 0.1;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.frequency.setValueAtTime(freq, playTime);
            gain.gain.setValueAtTime(0.15, playTime);
            gain.gain.linearRampToValueAtTime(0.01, playTime + 0.25);
            osc.start(playTime);
            osc.stop(playTime + 0.25);
        });
    }

    playGameOver() {
        if (!this.ctx || this.muted) return;
        const now = this.ctx.currentTime;
        const notes = [392.00, 349.23, 311.13, 261.63]; // 降音階
        notes.forEach((freq, idx) => {
            const playTime = now + idx * 0.22;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.frequency.setValueAtTime(freq, playTime);
            gain.gain.setValueAtTime(0.18, playTime);
            gain.gain.linearRampToValueAtTime(0.01, playTime + 0.28);
            osc.start(playTime);
            osc.stop(playTime + 0.28);
        });
    }
}

const sfx = new SoundEffects();

// --- 遊戲引擎設置 ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 鎖定內部邏輯解析度 (2:3 比例)
const LOGICAL_WIDTH = 600;
const LOGICAL_HEIGHT = 900;
canvas.width = LOGICAL_WIDTH;
canvas.height = LOGICAL_HEIGHT;

// 遊戲狀態常數
const STATES = {
    START: 'START',
    PLAYING: 'PLAYING',
    GAME_OVER: 'GAME_OVER',
    VICTORY: 'VICTORY'
};
let gameState = STATES.START;

// 遊戲全局變數
let score = 0;
let highScore = parseInt(localStorage.getItem('neon_galaxy_highscore') || '0');
let wave = 1;
const MAX_WAVES = 5;
let gameActive = false;

// 震動螢幕變數
let shakeTime = 0;
let shakeIntensity = 0;

// 更新 UI 數據顯示
document.getElementById('high-score-val').textContent = String(highScore).padStart(6, '0');

// --- 實體陣列 ---
let player;
let playerLasers = [];
let enemyLasers = [];
let enemies = [];
let powerups = [];
let particles = [];
let stars = [];

// 鍵盤狀態
const keys = {};

// 初始化星背景 (背景、中景、前景)
function initStars() {
    stars = [];
    // 背景星 (慢、暗)
    for (let i = 0; i < 60; i++) {
        stars.push({
            x: Math.random() * LOGICAL_WIDTH,
            y: Math.random() * LOGICAL_HEIGHT,
            speed: 0.5 + Math.random() * 0.5,
            size: 1 + Math.random() * 1.5,
            color: 'rgba(255, 255, 255, 0.3)'
        });
    }
    // 中景星 (中、稍亮)
    for (let i = 0; i < 40; i++) {
        stars.push({
            x: Math.random() * LOGICAL_WIDTH,
            y: Math.random() * LOGICAL_HEIGHT,
            speed: 1.2 + Math.random() * 0.8,
            size: 1.5 + Math.random() * 1.5,
            color: 'rgba(0, 240, 255, 0.5)'
        });
    }
    // 前景星 (快、亮)
    for (let i = 0; i < 15; i++) {
        stars.push({
            x: Math.random() * LOGICAL_WIDTH,
            y: Math.random() * LOGICAL_HEIGHT,
            speed: 2.5 + Math.random() * 1.5,
            size: 2 + Math.random() * 2,
            color: 'rgba(255, 0, 127, 0.7)'
        });
    }
}

// 繪製與更新背景星
function updateAndDrawStars() {
    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > LOGICAL_HEIGHT) {
            star.y = 0;
            star.x = Math.random() * LOGICAL_WIDTH;
        }
        ctx.fillStyle = star.color;
        ctx.fillRect(star.x, star.y, star.size, star.size);
    });
}

// 螢幕震動觸發
function triggerShake(intensity, duration) {
    shakeIntensity = intensity;
    shakeTime = duration;
}

// --- 玩家戰機類別 ---
class Player {
    constructor() {
        this.width = 44;
        this.height = 44;
        this.x = LOGICAL_WIDTH / 2;
        this.y = LOGICAL_HEIGHT - 120;
        this.speed = 6.5;
        this.lives = 3;
        this.maxShield = 100;
        this.shield = 100;
        this.weaponLevel = 1;
        this.maxWeaponLevel = 4;
        this.lastShotTime = 0;
        this.shotInterval = 180; // 毫秒
        this.invincible = false;
        this.invincibleDuration = 2000; // 2秒無敵
        this.invincibleTimer = 0;
        this.thrusterScale = 1;
        this.thrusterDirection = 1;
    }

    update(dt) {
        // 鍵盤移動邏輯
        let dx = 0;
        let dy = 0;
        if (keys['w'] || keys['ArrowUp']) dy -= 1;
        if (keys['s'] || keys['ArrowDown']) dy += 1;
        if (keys['a'] || keys['ArrowLeft']) dx -= 1;
        if (keys['d'] || keys['ArrowRight']) dx += 1;

        // 斜向移動速度歸一化
        if (dx !== 0 && dy !== 0) {
            dx *= 0.7071;
            dy *= 0.7071;
        }

        this.x += dx * this.speed;
        this.y += dy * this.speed;

        // 限制移動在畫布範圍
        this.x = Math.max(this.width / 2, Math.min(LOGICAL_WIDTH - this.width / 2, this.x));
        this.y = Math.max(this.height / 2, Math.min(LOGICAL_HEIGHT - this.height / 2, this.y));

        // 噴射火焰動畫
        this.thrusterScale += 0.1 * this.thrusterDirection;
        if (this.thrusterScale > 1.3 || this.thrusterScale < 0.7) {
            this.thrusterDirection *= -1;
        }

        // 產生引擎微小粒子
        if (Math.random() < 0.3) {
            createThrusterParticles(this.x, this.y + this.height / 2);
        }

        // 自動或手動射擊
        if (keys[' '] || keys['Shoot']) {
            this.shoot();
        }

        // 無敵時間計算
        if (this.invincible) {
            this.invincibleTimer -= dt;
            if (this.invincibleTimer <= 0) {
                this.invincible = false;
            }
        }
    }

    shoot() {
        const now = Date.now();
        if (now - this.lastShotTime >= this.shotInterval) {
            sfx.playShoot();
            
            // 根據武器等級發射不同彈道
            if (this.weaponLevel === 1) {
                // 單發中央雷射
                playerLasers.push(new PlayerLaser(this.x, this.y - 20, 0, -12, 10));
            } else if (this.weaponLevel === 2) {
                // 雙發並行雷射
                playerLasers.push(new PlayerLaser(this.x - 12, this.y - 15, 0, -12, 10));
                playerLasers.push(new PlayerLaser(this.x + 12, this.y - 15, 0, -12, 10));
            } else if (this.weaponLevel === 3) {
                // 三發擴散射擊
                playerLasers.push(new PlayerLaser(this.x, this.y - 20, 0, -12, 12));
                playerLasers.push(new PlayerLaser(this.x - 12, this.y - 15, -2, -11.5, 8));
                playerLasers.push(new PlayerLaser(this.x + 12, this.y - 15, 2, -11.5, 8));
            } else {
                // 四發豪華散彈 + 邊緣雷射
                playerLasers.push(new PlayerLaser(this.x - 6, this.y - 20, -0.5, -13, 10));
                playerLasers.push(new PlayerLaser(this.x + 6, this.y - 20, 0.5, -13, 10));
                playerLasers.push(new PlayerLaser(this.x - 18, this.y - 10, -3, -11, 8));
                playerLasers.push(new PlayerLaser(this.x + 18, this.y - 10, 3, -11, 8));
            }

            this.lastShotTime = now;
        }
    }

    hit(damage) {
        if (this.invincible) return;

        this.shield -= damage;
        sfx.playHit();
        triggerShake(6, 12);
        
        // 受到傷害的粒子效果
        createHitParticles(this.x, this.y, '#00f0ff');

        if (this.shield <= 0) {
            this.lives--;
            updateLivesUI();
            
            // 爆炸效果
            createExplosionParticles(this.x, this.y, '#00f0ff', 40);
            sfx.playExplosion();

            if (this.lives <= 0) {
                endGame(STATES.GAME_OVER);
            } else {
                // 重生，滿護盾，進入短暫無敵
                this.shield = this.maxShield;
                this.invincible = true;
                this.invincibleTimer = this.invincibleDuration;
                this.x = LOGICAL_WIDTH / 2;
                this.y = LOGICAL_HEIGHT - 120;
            }
        }
        updateShieldUI();
    }

    draw() {
        if (this.invincible && Math.floor(Date.now() / 80) % 2 === 0) {
            // 無敵時閃爍效果
            return;
        }

        ctx.save();
        
        // 設定發光效果
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00f0ff';

        // 繪製引擎火焰
        ctx.fillStyle = '#ff5500';
        ctx.beginPath();
        ctx.moveTo(this.x - 8, this.y + 15);
        ctx.lineTo(this.x, this.y + 15 + (18 * this.thrusterScale));
        ctx.lineTo(this.x + 8, this.y + 15);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ffea00';
        ctx.beginPath();
        ctx.moveTo(this.x - 4, this.y + 15);
        ctx.lineTo(this.x, this.y + 15 + (10 * this.thrusterScale));
        ctx.lineTo(this.x + 4, this.y + 15);
        ctx.closePath();
        ctx.fill();

        // 繪製戰機主體（三角形/翼型未來科幻設計）
        ctx.strokeStyle = '#00f0ff';
        ctx.fillStyle = 'rgba(0, 80, 100, 0.4)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        // 機頭
        ctx.moveTo(this.x, this.y - 20);
        // 右翼前緣
        ctx.lineTo(this.x + 8, this.y - 4);
        ctx.lineTo(this.x + 22, this.y + 14);
        // 右翼尾翼
        ctx.lineTo(this.x + 14, this.y + 18);
        ctx.lineTo(this.x + 5, this.y + 10);
        // 機身底部
        ctx.lineTo(this.x - 5, this.y + 10);
        // 左翼尾翼
        ctx.lineTo(this.x - 14, this.y + 18);
        ctx.lineTo(this.x - 22, this.y + 14);
        // 左翼前緣
        ctx.lineTo(this.x - 8, this.y - 4);
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 機翼邊緣裝飾線
        ctx.strokeStyle = '#ff007f';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x - 18, this.y + 12);
        ctx.lineTo(this.x - 8, this.y - 2);
        ctx.moveTo(this.x + 18, this.y + 12);
        ctx.lineTo(this.x + 8, this.y - 2);
        ctx.stroke();

        // 座艙罩
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y - 2, 4, 8, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}

// --- 玩家雷射類別 ---
class PlayerLaser {
    constructor(x, y, vx, vy, damage) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.width = 4;
        this.height = 18;
        this.damage = damage;
        this.active = true;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // 超出邊界失效
        if (this.y < -20 || this.x < -10 || this.x > LOGICAL_WIDTH + 10) {
            this.active = false;
        }
    }

    draw() {
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f0ff';
        ctx.fillStyle = '#00f0ff';
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        ctx.restore();
    }
}

// --- 敵人雷射類別 ---
class EnemyLaser {
    constructor(x, y, vx, vy, color = '#ff007f', isLarge = false) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = isLarge ? 8 : 4;
        this.color = color;
        this.active = true;
        this.isLarge = isLarge;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.y > LOGICAL_HEIGHT + 20 || this.x < -20 || this.x > LOGICAL_WIDTH + 20) {
            this.active = false;
        }
    }

    draw() {
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.restore();
    }
}

// --- 敵人基底與衍生類別 ---
class Enemy {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.active = true;
        this.time = 0;
        this.lastShotTime = Date.now() + Math.random() * 1000;
        this.pathSeed = Math.random() * 100; // 移動曲線種子
        
        // 設定不同敵人屬性
        switch (type) {
            case 'SCOUT':
                this.width = 30;
                this.height = 30;
                this.hp = 10;
                this.maxHp = 10;
                this.points = 100;
                this.color = '#39ff14'; // 霓虹綠
                this.shotInterval = 2500;
                this.vx = 2;
                this.vy = 1.2;
                break;
            case 'FIGHTER':
                this.width = 36;
                this.height = 36;
                this.hp = 20;
                this.maxHp = 20;
                this.points = 200;
                this.color = '#0044ff'; // 藍色
                this.shotInterval = 2000;
                this.vx = 1;
                this.vy = 1.6;
                break;
            case 'STRIKER':
                this.width = 34;
                this.height = 40;
                this.hp = 15;
                this.maxHp = 15;
                this.points = 250;
                this.color = '#ff007f'; // 桃紅
                this.shotInterval = 1800;
                this.vx = 0;
                this.vy = 3.5; // 快速俯衝
                break;
            case 'ELITE':
                this.width = 44;
                this.height = 44;
                this.hp = 45;
                this.maxHp = 45;
                this.points = 500;
                this.color = '#ffea00'; // 黃色
                this.shotInterval = 1500;
                this.vx = 1.5;
                this.vy = 0.8;
                break;
            case 'BOSS':
                this.width = 160;
                this.height = 80;
                this.hp = 750;
                this.maxHp = 750;
                this.points = 5000;
                this.color = '#ff0000'; // 紅色
                this.shotInterval = 800;
                this.vx = 2.5;
                this.vy = 0.4;
                this.bossPhase = 1;
                break;
        }
    }

    update(dt) {
        this.time += dt / 1000;

        if (this.type === 'SCOUT') {
            // 正弦波橫向移動，持續往下
            this.y += this.vy;
            this.x += Math.sin(this.time * 3.5 + this.pathSeed) * 3;
        } 
        else if (this.type === 'FIGHTER') {
            // 直線前進，微幅左右搖擺
            this.y += this.vy;
            this.x += Math.cos(this.time * 2 + this.pathSeed) * 1.5;
        } 
        else if (this.type === 'STRIKER') {
            // 像小蜜蜂一樣：緩速下滑 -> 突然加速俯衝指向玩家
            if (this.y < 250) {
                this.y += 1.2;
                this.x += Math.sin(this.time * 2) * 1;
            } else {
                this.y += this.vy; // 加速俯衝
            }
        } 
        else if (this.type === 'ELITE') {
            // 階梯式或方形路徑移動
            this.y += this.vy;
            this.x += Math.sin(this.time * 1.5) * 4;
        }
        else if (this.type === 'BOSS') {
            // BOSS 特殊移動模式
            if (this.y < 120) {
                // 初登場往下移動到指定高度
                this.y += 1.5;
            } else {
                // 左右橫移晃動
                this.x += this.vx;
                if (this.x < this.width/2 + 20 || this.x > LOGICAL_WIDTH - this.width/2 - 20) {
                    this.vx *= -1;
                }
                // 微幅上下飄浮
                this.y += Math.sin(this.time * 2) * 0.4;
            }
            
            // 更新 Boss 血條 UI
            document.getElementById('boss-hp-bar').style.width = `${(this.hp / this.maxHp) * 100}%`;
        }

        // 飛出螢幕底部判定（除了Boss之外，移出底部重置回頂部，增加緊張感）
        if (this.y > LOGICAL_HEIGHT + 40 && this.type !== 'BOSS') {
            this.y = -40;
            this.x = Math.random() * (LOGICAL_WIDTH - 60) + 30;
            // 俯衝機重置
            if (this.type === 'STRIKER') {
                this.y = -100;
            }
        }

        // 敵人發射子彈
        this.shoot();
    }

    shoot() {
        if (!gameActive) return;
        const now = Date.now();
        if (now - this.lastShotTime >= this.shotInterval) {
            
            if (this.type === 'SCOUT') {
                // 單發向下的普通子彈
                enemyLasers.push(new EnemyLaser(this.x, this.y + 15, 0, 5, this.color));
                sfx.playEnemyShoot();
            } 
            else if (this.type === 'FIGHTER') {
                // 瞄準玩家方向射擊
                const angle = Math.atan2(player.y - this.y, player.x - this.x);
                const speed = 5.5;
                enemyLasers.push(new EnemyLaser(this.x, this.y + 18, Math.cos(angle) * speed, Math.sin(angle) * speed, this.color));
                sfx.playEnemyShoot();
            } 
            else if (this.type === 'STRIKER') {
                // 俯衝發射雙發快速子彈
                if (this.y > 200 && this.y < LOGICAL_HEIGHT - 200) {
                    enemyLasers.push(new EnemyLaser(this.x - 8, this.y + 18, 0, 7.5, this.color));
                    enemyLasers.push(new EnemyLaser(this.x + 8, this.y + 18, 0, 7.5, this.color));
                    sfx.playEnemyShoot();
                }
            } 
            else if (this.type === 'ELITE') {
                // 三向散射
                enemyLasers.push(new EnemyLaser(this.x, this.y + 20, 0, 6, this.color));
                enemyLasers.push(new EnemyLaser(this.x, this.y + 20, -1.8, 5.5, this.color));
                enemyLasers.push(new EnemyLaser(this.x, this.y + 20, 1.8, 5.5, this.color));
                sfx.playEnemyShoot();
            }
            else if (this.type === 'BOSS') {
                // BOSS 彈幕模式
                const phase = this.hp > this.maxHp * 0.5 ? 1 : 2;
                
                if (phase === 1) {
                    // 第一階段：左右砲台交互發射 + 中央追蹤彈
                    const t = Date.now() / 1000;
                    // 左右砲台彈雨
                    enemyLasers.push(new EnemyLaser(this.x - 50, this.y + 30, Math.sin(t * 5) * 2, 6, '#ff00ff'));
                    enemyLasers.push(new EnemyLaser(this.x + 50, this.y + 30, -Math.sin(t * 5) * 2, 6, '#ff00ff'));
                    
                    // 每三次射擊發射一次追蹤大彈
                    if (Math.random() < 0.4) {
                        const angle = Math.atan2(player.y - this.y, player.x - this.x);
                        enemyLasers.push(new EnemyLaser(this.x, this.y + 35, Math.cos(angle) * 4.5, Math.sin(angle) * 4.5, '#ff3300', true));
                    }
                } else {
                    // 第二階段（半血以下狂暴）：旋轉散射彈幕 + 快速瞄準雷射
                    const t = Date.now() / 1000;
                    // 8向旋轉彈幕
                    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
                        const rotAngle = angle + (t * 1.5);
                        enemyLasers.push(new EnemyLaser(this.x, this.y + 10, Math.cos(rotAngle) * 4, Math.sin(rotAngle) * 4, '#ff3300'));
                    }
                    
                    // 雙向追蹤玩家
                    if (Math.random() < 0.6) {
                        const angleL = Math.atan2(player.y - (this.y + 20), player.x - (this.x - 30));
                        const angleR = Math.atan2(player.y - (this.y + 20), player.x - (this.x + 30));
                        enemyLasers.push(new EnemyLaser(this.x - 35, this.y + 25, Math.cos(angleL) * 6, Math.sin(angleL) * 6, '#ffea00'));
                        enemyLasers.push(new EnemyLaser(this.x + 35, this.y + 25, Math.cos(angleR) * 6, Math.sin(angleR) * 6, '#ffea00'));
                    }
                }
                sfx.playEnemyShoot();
            }

            // BOSS 射擊速度極快，其他普通
            this.lastShotTime = now + (Math.random() * 200 - 100); // 隨機擾動防止子彈重疊
        }
    }

    hit(damage) {
        this.hp -= damage;
        sfx.playHit();
        
        // 受擊閃爍粒子
        createHitParticles(this.x, this.y, this.color);

        if (this.hp <= 0) {
            this.active = false;
            sfx.playExplosion();
            
            if (this.type === 'BOSS') {
                // BOSS 死亡大爆炸特效
                createBossExplosions(this.x, this.y);
                triggerShake(20, 60);
                addScore(this.points);
                setTimeout(() => {
                    endGame(STATES.VICTORY);
                }, 2000);
            } else {
                createExplosionParticles(this.x, this.y, this.color, 18);
                addScore(this.points);
                
                // 機率掉落道具
                rollPowerup(this.x, this.y);
            }
        }
    }

    draw() {
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2.5;

        if (this.type === 'SCOUT') {
            // 綠色侦察机 (螃蟹/幾何造型)
            ctx.fillStyle = 'rgba(57, 255, 20, 0.2)';
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + 15);
            ctx.lineTo(this.x - 15, this.y - 5);
            ctx.lineTo(this.x - 10, this.y - 15);
            ctx.lineTo(this.x - 5, this.y - 5);
            ctx.lineTo(this.x + 5, this.y - 5);
            ctx.lineTo(this.x + 10, this.y - 15);
            ctx.lineTo(this.x + 15, this.y - 5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // 核心發光點
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y - 2, 3, 0, Math.PI*2);
            ctx.fill();
        } 
        else if (this.type === 'FIGHTER') {
            // 藍色戰鬥機 (雙翼飛梭)
            ctx.fillStyle = 'rgba(0, 68, 255, 0.2)';
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + 18);
            ctx.lineTo(this.x - 18, this.y);
            ctx.lineTo(this.x - 12, this.y - 18);
            ctx.lineTo(this.x, this.y - 6);
            ctx.lineTo(this.x + 12, this.y - 18);
            ctx.lineTo(this.x + 18, this.y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // 雙眼
            ctx.fillStyle = '#00f0ff';
            ctx.fillRect(this.x - 6, this.y - 2, 3, 3);
            ctx.fillRect(this.x + 3, this.y - 2, 3, 3);
        } 
        else if (this.type === 'STRIKER') {
            // 桃紅色俯衝機 (蝙蝠飛鏢)
            ctx.fillStyle = 'rgba(255, 0, 127, 0.2)';
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + 20);
            ctx.lineTo(this.x - 16, this.y - 10);
            ctx.lineTo(this.x - 8, this.y - 15);
            ctx.lineTo(this.x, this.y - 2);
            ctx.lineTo(this.x + 8, this.y - 15);
            ctx.lineTo(this.x + 16, this.y - 10);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } 
        else if (this.type === 'ELITE') {
            // 黃色精英機 (重裝盾牌幾何盾)
            ctx.fillStyle = 'rgba(255, 234, 0, 0.2)';
            ctx.beginPath();
            ctx.moveTo(this.x - 22, this.y - 10);
            ctx.lineTo(this.x - 14, this.y + 20);
            ctx.lineTo(this.x, this.y + 22);
            ctx.lineTo(this.x + 14, this.y + 20);
            ctx.lineTo(this.x + 22, this.y - 10);
            ctx.lineTo(this.x, this.y - 22);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // 裝飾線
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x - 12, this.y);
            ctx.lineTo(this.x + 12, this.y);
            ctx.stroke();
        }
        else if (this.type === 'BOSS') {
            // BOSS 終極戰艦
            ctx.fillStyle = 'rgba(15, 5, 5, 0.9)';
            ctx.beginPath();
            // 頂部左舷
            ctx.moveTo(this.x - 80, this.y - 20);
            ctx.lineTo(this.x - 40, this.y - 40);
            // 艦頭
            ctx.lineTo(this.x, this.y + 40);
            // 頂部右舷
            ctx.lineTo(this.x + 40, this.y - 40);
            ctx.lineTo(this.x + 80, this.y - 20);
            // 艦尾雙巨翼
            ctx.lineTo(this.x + 70, this.y + 30);
            ctx.lineTo(this.x + 30, this.y + 10);
            ctx.lineTo(this.x - 30, this.y + 10);
            ctx.lineTo(this.x - 70, this.y + 30);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // 雙巨型能量推進器
            ctx.fillStyle = '#ff3300';
            ctx.fillRect(this.x - 45, this.y - 48, 12, 8);
            ctx.fillRect(this.x + 33, this.y - 48, 12, 8);

            // 紅色能量核心紋路
            ctx.strokeStyle = '#ff0055';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(this.x - 30, this.y - 10);
            ctx.lineTo(this.x, this.y + 15);
            ctx.lineTo(this.x + 30, this.y - 10);
            ctx.stroke();

            // 核心發光水晶
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y - 5, 8, 0, Math.PI*2);
            ctx.fill();
        }

        ctx.restore();
    }
}

// --- 掉落升級道具類別 ---
class PowerUp {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // 'WEAPON', 'SHIELD', 'HEAL', 'BOMB'
        this.size = 24;
        this.vy = 2.0;
        this.active = true;
        
        switch (type) {
            case 'WEAPON':
                this.color = '#ffaa00';
                this.label = 'W';
                break;
            case 'SHIELD':
                this.color = '#00ccff';
                this.label = 'S';
                break;
            case 'HEAL':
                this.color = '#00ff66';
                this.label = 'H';
                break;
            case 'BOMB':
                this.color = '#ff3333';
                this.label = 'B';
                break;
        }
    }

    update() {
        this.y += this.vy;
        if (this.y > LOGICAL_HEIGHT + 30) {
            this.active = false;
        }
    }

    draw() {
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        // 畫一個發光的外框圈
        ctx.strokeStyle = this.color;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // 畫中心文字
        ctx.fillStyle = this.color;
        ctx.font = 'bold 13px Orbitron';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.label, this.x, this.y);

        ctx.restore();
    }
}

// 判定道具掉落率與隨機內容
function rollPowerup(x, y) {
    const chance = Math.random();
    if (chance < 0.28) { // 28% 掉落率
        const typeRoll = Math.random();
        let type = 'SHIELD';
        
        if (typeRoll < 0.35) {
            type = 'WEAPON';
        } else if (typeRoll < 0.60) {
            type = 'SHIELD';
        } else if (typeRoll < 0.85) {
            type = 'HEAL';
        } else {
            type = 'BOMB';
        }

        powerups.push(new PowerUp(x, y, type));
    }
}

// --- 粒子特效系統 ---
class Particle {
    constructor(x, y, vx, vy, size, color, decay = 0.02) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
        this.alpha = 1.0;
        this.decay = decay;
        this.active = true;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        if (this.alpha <= 0) {
            this.active = false;
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// 引擎噴射粒子
function createThrusterParticles(x, y) {
    const vx = (Math.random() - 0.5) * 1.5;
    const vy = 2.5 + Math.random() * 2.0; // 往下噴
    const size = 1.5 + Math.random() * 2.5;
    const colors = ['#00f0ff', '#0044ff', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push(new Particle(x, y, vx, vy, size, color, 0.04));
}

// 受擊粒子
function createHitParticles(x, y, color) {
    for (let i = 0; i < 6; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 2.0;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const size = 1.5 + Math.random() * 2;
        particles.push(new Particle(x, y, vx, vy, size, color, 0.05));
    }
}

// 普通爆炸粒子
function createExplosionParticles(x, y, color, count = 15) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.0 + Math.random() * 4.5;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const size = 2 + Math.random() * 3.5;
        const colors = [color, '#ffffff', '#ffffff'];
        const particleColor = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, vx, vy, size, particleColor, 0.02 + Math.random() * 0.02));
    }
}

// BOSS 死亡連環爆炸
function createBossExplosions(bx, by) {
    // 短時間內在 Boss 四周發射數次大量爆炸
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 120;
            const offsetY = (Math.random() - 0.5) * 60;
            createExplosionParticles(bx + offsetX, by + offsetY, '#ff0033', 25);
            sfx.playExplosion();
        }, i * 200);
    }
}

// --- 遊戲邏輯控制與關卡系統 ---
let enemiesSpawnedThisWave = 0;
let enemiesKilledThisWave = 0;
let waveSpawnTimer = 0;
let waveSpawnInterval = 1800; // 每 1.8 秒生一隻/一批

function startNextWave() {
    waveSpawnTimer = 0;
    enemiesSpawnedThisWave = 0;
    enemiesKilledThisWave = 0;
    
    // 更新 HUD Wave 顯示
    document.getElementById('wave-val').textContent = wave;
    
    // 全螢幕波次通知提示
    const waveHint = document.createElement('div');
    waveHint.style.position = 'absolute';
    waveHint.style.top = '40%';
    waveHint.style.left = '50%';
    waveHint.style.transform = 'translate(-50%, -50%)';
    waveHint.style.fontFamily = 'Orbitron';
    waveHint.style.fontSize = '30px';
    waveHint.style.fontWeight = 'bold';
    waveHint.style.color = '#ff007f';
    waveHint.style.textShadow = '0 0 10px #ff007f';
    waveHint.style.pointerEvents = 'none';
    waveHint.style.zIndex = '30';
    waveHint.textContent = `WAVE ${wave}`;
    
    document.getElementById('game-container').appendChild(waveHint);
    
    // 漸變淡出效果
    waveHint.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1.2)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.5)' }
    ], {
        duration: 1500,
        easing: 'ease-out'
    });
    
    setTimeout(() => {
        waveHint.remove();
    }, 1500);
}

// 獲取每一波總共要生多少隻敵人
function getTargetEnemiesForWave(w) {
    if (w === 1) return 10;
    if (w === 2) return 16;
    if (w === 3) return 24;
    if (w === 4) return 32;
    return 1; // Wave 5 為 Boss 戰，只生成 1 隻 Boss
}

// 生成一隻敵人
function spawnEnemy() {
    const targetCount = getTargetEnemiesForWave(wave);
    if (enemiesSpawnedThisWave >= targetCount) return;

    if (wave === 5) {
        // 生成 Boss
        enemies.push(new Enemy(LOGICAL_WIDTH / 2, -100, 'BOSS'));
        enemiesSpawnedThisWave++;
        // 顯示 Boss HUD
        document.getElementById('boss-hud').classList.remove('hidden');
    } else {
        // 隨機在頂部生成敵人
        const x = Math.random() * (LOGICAL_WIDTH - 60) + 30;
        const y = -30;
        
        let type = 'SCOUT';
        const roll = Math.random();

        if (wave === 1) {
            // 80% Scout, 20% Fighter
            type = roll < 0.8 ? 'SCOUT' : 'FIGHTER';
        } else if (wave === 2) {
            // 50% Scout, 35% Fighter, 15% Striker
            if (roll < 0.5) type = 'SCOUT';
            else if (roll < 0.85) type = 'FIGHTER';
            else type = 'STRIKER';
        } else if (wave === 3) {
            // 30% Scout, 40% Fighter, 20% Striker, 10% Elite
            if (roll < 0.3) type = 'SCOUT';
            else if (roll < 0.7) type = 'FIGHTER';
            else if (roll < 0.9) type = 'STRIKER';
            else type = 'ELITE';
        } else if (wave === 4) {
            // 20% Scout, 30% Fighter, 25% Striker, 25% Elite
            if (roll < 0.2) type = 'SCOUT';
            else if (roll < 0.5) type = 'FIGHTER';
            else if (roll < 0.75) type = 'STRIKER';
            else type = 'ELITE';
        }

        enemies.push(new Enemy(x, y, type));
        enemiesSpawnedThisWave++;
    }
}

// 積分累加
function addScore(pts) {
    score += pts;
    document.getElementById('score-val').textContent = String(score).padStart(6, '0');
    
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('neon_galaxy_highscore', highScore);
        document.getElementById('high-score-val').textContent = String(highScore).padStart(6, '0');
    }
}

// 全螢幕炸彈效果
function triggerScreenBomb() {
    sfx.playBomb();
    triggerShake(15, 30);
    
    // 建立爆炸白閃光圖層
    const flash = document.createElement('div');
    flash.style.position = 'absolute';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '30';
    document.getElementById('game-container').appendChild(flash);
    
    flash.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 500,
        easing: 'ease-out'
    });
    
    setTimeout(() => {
        flash.remove();
    }, 500);

    // 清除螢幕所有敵人與子彈，如果遇到 Boss 扣除 150HP
    enemies.forEach(e => {
        if (e.type === 'BOSS') {
            e.hit(150);
        } else {
            e.hp = 0; // 觸發死亡
            e.hit(0);
        }
    });

    // 移除所有敵機子彈並變成小粒子
    enemyLasers.forEach(el => {
        createExplosionParticles(el.x, el.y, el.color, 4);
    });
    enemyLasers = [];
}

// --- 碰撞檢測與物理 ---
function checkCollisions() {
    // 1. 玩家雷射打敵機
    for (let l = playerLasers.length - 1; l >= 0; l--) {
        const laser = playerLasers[l];
        for (let e = enemies.length - 1; e >= 0; e--) {
            const enemy = enemies[e];
            // 簡單矩形包圍盒 AABB 判定
            if (
                laser.x - laser.width/2 < enemy.x + enemy.width/2 &&
                laser.x + laser.width/2 > enemy.x - enemy.width/2 &&
                laser.y - laser.height/2 < enemy.y + enemy.height/2 &&
                laser.y + laser.height/2 > enemy.y - enemy.height/2
            ) {
                // 擊中！
                enemy.hit(laser.damage);
                playerLasers.splice(l, 1);
                break;
            }
        }
    }

    // 2. 敵機子彈打玩家
    for (let l = enemyLasers.length - 1; l >= 0; l--) {
        const elaser = enemyLasers[l];
        if (
            elaser.x - elaser.radius < player.x + player.width/2 &&
            elaser.x + elaser.radius > player.x - player.width/2 &&
            elaser.y - elaser.radius < player.y + player.height/2 &&
            elaser.y + elaser.radius > player.y - player.height/2
        ) {
            // 玩家受傷，小彈扣15HP，大彈扣30HP
            const dmg = elaser.isLarge ? 30 : 15;
            player.hit(dmg);
            enemyLasers.splice(l, 1);
        }
    }

    // 3. 敵機直接撞擊玩家
    for (let e = enemies.length - 1; e >= 0; e--) {
        const enemy = enemies[e];
        if (
            enemy.x - enemy.width/2 < player.x + player.width/2 &&
            enemy.x + enemy.width/2 > player.x - player.width/2 &&
            enemy.y - enemy.height/2 < player.y + player.height/2 &&
            enemy.y + enemy.height/2 > player.y - player.height/2
        ) {
            // 直接相撞
            if (enemy.type === 'BOSS') {
                player.hit(40);
            } else {
                player.hit(30);
                enemy.hp = 0;
                enemy.hit(0); // 毀滅敵機
            }
        }
    }

    // 4. 玩家撿起升級道具
    for (let p = powerups.length - 1; p >= 0; p--) {
        const pup = powerups[p];
        if (
            pup.x - pup.size/2 < player.x + player.width/2 &&
            pup.x + pup.size/2 > player.x - player.width/2 &&
            pup.y - pup.size/2 < player.y + player.height/2 &&
            pup.y + pup.size/2 > player.y - player.height/2
        ) {
            // 觸碰道具
            sfx.playPowerup();
            applyPowerUp(pup.type);
            powerups.splice(p, 1);
        }
    }
}

// 實施道具效果
function applyPowerUp(type) {
    if (type === 'WEAPON') {
        if (player.weaponLevel < player.maxWeaponLevel) {
            player.weaponLevel++;
            updateWeaponUI();
        }
        addScore(300);
    } 
    else if (type === 'SHIELD') {
        player.shield = Math.min(player.maxShield, player.shield + 40);
        updateShieldUI();
    } 
    else if (type === 'HEAL') {
        if (player.lives < 4) {
            player.lives++;
            updateLivesUI();
        } else {
            addScore(1000); // 命滿狀態改為得分
        }
    } 
    else if (type === 'BOMB') {
        triggerScreenBomb();
    }
}

// --- UI 渲染輔助 ---
function updateShieldUI() {
    document.getElementById('shield-bar').style.width = `${player.shield}%`;
}

function updateLivesUI() {
    const container = document.getElementById('lives-icons');
    container.innerHTML = '';
    for (let i = 0; i < player.lives; i++) {
        const icon = document.createElement('div');
        icon.className = 'ship-icon';
        container.appendChild(icon);
    }
}

function updateWeaponUI() {
    document.getElementById('weapon-level').textContent = `LV.${player.weaponLevel}`;
}

// --- 遊戲初始/重置 ---
function initGame() {
    score = 0;
    wave = 1;
    gameActive = true;
    
    player = new Player();
    playerLasers = [];
    enemyLasers = [];
    enemies = [];
    powerups = [];
    particles = [];
    
    initStars();
    updateShieldUI();
    updateLivesUI();
    updateWeaponUI();
    
    document.getElementById('score-val').textContent = '000000';
    document.getElementById('boss-hud').classList.add('hidden');
    document.getElementById('hud').classList.remove('hidden');

    startNextWave();
}

function endGame(endState) {
    gameActive = false;
    gameState = endState;

    document.getElementById('hud').classList.add('hidden');
    document.getElementById('boss-hud').classList.add('hidden');

    if (endState === STATES.GAME_OVER) {
        sfx.playGameOver();
        document.getElementById('final-score-val').textContent = String(score).padStart(6, '0');
        document.getElementById('game-over-screen').classList.remove('hidden');
    } else if (endState === STATES.VICTORY) {
        sfx.playVictory();
        document.getElementById('victory-score-val').textContent = String(score).padStart(6, '0');
        document.getElementById('victory-screen').classList.remove('hidden');
    }
}

// --- 核心更新與繪製循環 (Delta Time) ---
let lastTime = 0;

function gameLoop(time) {
    if (!lastTime) lastTime = time;
    const dt = time - lastTime;
    lastTime = time;

    // 清理畫布
    ctx.clearRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);

    // 螢幕震動位移處理
    ctx.save();
    if (shakeTime > 0) {
        const dx = (Math.random() - 0.5) * shakeIntensity;
        const dy = (Math.random() - 0.5) * shakeIntensity;
        ctx.translate(dx, dy);
        shakeTime -= 1;
    }

    // 1. 更新背景星
    updateAndDrawStars();

    if (gameActive && gameState === STATES.PLAYING) {
        // 2. 關卡生產敵機排程
        waveSpawnTimer += dt;
        if (waveSpawnTimer >= waveSpawnInterval) {
            spawnEnemy();
            waveSpawnTimer = 0;
        }

        // 3. 更新實體
        player.update(dt);
        
        // 更新玩家雷射
        playerLasers = playerLasers.filter(l => l.active);
        playerLasers.forEach(l => l.update());
        
        // 更新敵機雷射
        enemyLasers = enemyLasers.filter(l => l.active);
        enemyLasers.forEach(l => l.update());

        // 更新敵機
        const prevLength = enemies.length;
        enemies = enemies.filter(e => e.active);
        
        // 計算被玩家擊殺的敵機
        const killedDiff = prevLength - enemies.length;
        // 注意：除了死亡，移出螢幕重置的敵機不會觸發 active = false，因此這裡代表擊殺數
        enemiesKilledThisWave += killedDiff;

        enemies.forEach(e => e.update(dt));

        // 更新掉落升級箱
        powerups = powerups.filter(p => p.active);
        powerups.forEach(p => p.update());

        // 碰撞判定
        checkCollisions();

        // 4. 判斷波次是否結束
        const targetCount = getTargetEnemiesForWave(wave);
        if (enemiesKilledThisWave >= targetCount && enemies.length === 0) {
            if (wave < MAX_WAVES) {
                wave++;
                startNextWave();
            }
            // Wave 5 Boss 被消滅時，會在 Boss 類別內部觸發 Victory，不在此直接進下一關
        }
    }

    // 更新與過濾所有粒子
    particles = particles.filter(p => p.active);
    particles.forEach(p => p.update());

    // 5. 繪製所有實體
    if (gameActive && gameState === STATES.PLAYING) {
        player.draw();
    }
    
    playerLasers.forEach(l => l.draw());
    enemyLasers.forEach(l => l.draw());
    enemies.forEach(e => e.draw());
    powerups.forEach(p => p.draw());
    particles.forEach(p => p.draw());

    ctx.restore();

    requestAnimationFrame(gameLoop);
}

// --- 輸入控制綁定 (鍵盤 + 指針滑動) ---

// 鍵盤按下
window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    keys[key] = true;
    
    // 開始按空白鍵自動射擊
    if (key === ' ') {
        sfx.init(); // 啟動 AudioContext
        keys['Shoot'] = true;
    }
});

// 鍵盤釋放
window.addEventListener('keyup', e => {
    const key = e.key.toLowerCase();
    keys[key] = false;
    if (key === ' ') {
        keys['Shoot'] = false;
    }
});

// 滑鼠/觸控事件處理 (Pointer Events - 支援觸控與滑鼠)
let isPointerDown = false;
let prevPointerX = 0;
let prevPointerY = 0;

canvas.addEventListener('pointerdown', e => {
    if (!gameActive || gameState !== STATES.PLAYING) return;
    sfx.init(); // 激活音頻

    isPointerDown = true;
    keys['Shoot'] = true; // 按住指針時自動開火
    
    const rect = canvas.getBoundingClientRect();
    prevPointerX = e.clientX - rect.left;
    prevPointerY = e.clientY - rect.top;
    
    // 避免 pointerdown 引起捲動
    e.preventDefault();
});

window.addEventListener('pointermove', e => {
    if (!isPointerDown || !gameActive || gameState !== STATES.PLAYING) return;

    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    // 計算指針位移
    const dx = currentX - prevPointerX;
    const dy = currentY - prevPointerY;

    // 將 CSS 尺寸對應回 Canvas 內部的邏輯座標
    const scaleX = LOGICAL_WIDTH / rect.width;
    const scaleY = LOGICAL_HEIGHT / rect.height;

    // 將相對位移加給玩家，體驗極佳（手指不擋住飛機）
    player.x += dx * scaleX;
    player.y += dy * scaleY;

    // 限制玩家座標
    player.x = Math.max(player.width / 2, Math.min(LOGICAL_WIDTH - player.width / 2, player.x));
    player.y = Math.max(player.height / 2, Math.min(LOGICAL_HEIGHT - player.height / 2, player.y));

    prevPointerX = currentX;
    prevPointerY = currentY;
});

window.addEventListener('pointerup', () => {
    isPointerDown = false;
    keys['Shoot'] = false; // 鬆開指針停止開火
});

window.addEventListener('pointercancel', () => {
    isPointerDown = false;
    keys['Shoot'] = false;
});

// --- 按鈕點擊綁定 ---

document.getElementById('start-btn').addEventListener('click', () => {
    sfx.init();
    document.getElementById('start-screen').classList.add('hidden');
    gameState = STATES.PLAYING;
    initGame();
});

document.getElementById('restart-btn').addEventListener('click', () => {
    sfx.init();
    document.getElementById('game-over-screen').classList.add('hidden');
    gameState = STATES.PLAYING;
    initGame();
});

document.getElementById('victory-restart-btn').addEventListener('click', () => {
    sfx.init();
    document.getElementById('victory-screen').classList.add('hidden');
    gameState = STATES.PLAYING;
    initGame();
});

// --- 開始啟動引擎循環 ---
initStars();
requestAnimationFrame(gameLoop);
