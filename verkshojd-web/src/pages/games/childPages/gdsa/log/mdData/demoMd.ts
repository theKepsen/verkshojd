export const DemoTasksMd = `
⚠️ = Have Dependency  
🔎 = Needs Research 

### **[ ] Level C** 🪐

- [ ] Background
- [ ] Player Spawn Points
- [✅] Demo Start Rank Adjustment
- [ ] Content
  - [ ] Enemy Entries _(patters and stuff)_
    - [✅] Update Pleb Mine
  - [✅] Density
  - [ ] Challenge
  - [ ] Interesting
  - [ ] Power Up Distribution
  - [ ] Environment

### **[ ] Player** 🚀

- [ ] Sprite & Hit-box Size
  - [ ] Hit-box Indicator
- [ ] Hp Balance
- [ ] Upgrade System
- [ ] Damage Balance
- [ ] Drone
  - [ ] Multiple Drones Down
- [ ] Art

### **[ ] Boss C or A?** 🐲

- [ ] Attack / Movement Patterns
- [✅] Boss C Spawn Corner Flash
- [ ] Rank Effects
- [✅] Time Limit Behavior
- [ ] Challenge
- [ ] Art
- [ ] Level Speed
- [ ] Player Spawn Points
- [ ] Player to close to boss behavior

### **[ ] Enemies** 🛸

- [ ] Fine Tune Settings
- [ ] Small Pleb _(pink alien)_
  - [ ] Art
- [ ] Pleb _(Green window ship)_
  - [ ] Art
- [ ] Snake
  - [ ] Rework
    - [ ] Attack is shitty
    - ? _[ ] Add different variations?_
  - [ ] Art
- [ ] Pleb Deluxe _(Yellow window ship with big aimed shot)_
  - [ ] Art
- [ ] Pleb Mine _(Yellow ship that spawns yellow mines)_
  - [✅] Try out movement patterns on Mines
  - [✅] Update Mine Spawning
    - [ ] Fix for Level B
  - [ ] Art
- [ ] Pleb Burst _(Red window ship, bigger. wiggle, burst and spin shots)_
  - [ ] Art
  - [ ] Bullet Patters
- [ ] Player Killer _(Spawns when boss timer runs out)_
- ? _[ ] Lurker_ (Purple popcorn enemy)

### **[ ] Obstacles** 🚧

- [ ] Astroid
  - [ ] Art
  - [ ] Damage / Bounce
  - [ ] Variants (Space Junk, etc.)
    - [✅] Logic
- [ ] Satellite Orbit _(Mission target)_
  - [ ] Settings
  - [ ] Art
- [ ] Falling Ships
  - [✅] Hit-box / Sprite
  - [ ] Art
  - [ ] Settings

### **[ ] System** 💾

- [✅] Hide 2 Player
- [✅] Rest Level at Boss
- ⚠️[ ] Asset Load _(new assets)_ 
- [ ] Rank System
- ? _[ ] Change Menu Drawer to Event Driven_
- [ ] Overlay Drawer _(Move Overlay Drawer in to Main?)_
  - [ ] Add Font Drawer
  - [ ] Convert to TypeScript
  - ? _[ ] Use for Menu Drawer?_
- [ ] Scoring System V1
  - [ ] Top 10 List
  - [ ] Name Entry
  - [ ] Multiplier Timer
  - [ ] Boss Score Drain Balance
  - [ ] Keep Score Loss on Death?
  - [ ] ...
- [ ] Controller
  - [ ] Fine Tune Implementation
  - [✅] Disable 2 Player
  - [✅] Connection Sound
  - [ ] Feel
- [ ] In Game Menu
  - [ ] Settings
  - [ ] Retry
  - [ ] Main Menu
- [ ] Menu
  - [✅] Demo Menu
  - [ ] Settings Menu
    - [ ] Keyboard Controls
    - [ ] Music / SFX Volume Sliders
    - [✅] Hide 2 Player

### **[ ] Fixes** 🔨

- [✅] Wiggle Shot behavior
- [✅] Mine movement
- [✅] Level C Demo check on boss load
- [ ] Gamepad disconnected behavior

### **[ ] Difficulty** 😵

- [ ] Game Objects Balance
  - [ ] Bullets
    - [ ] Speed
    - [ ] Size
  - [ ] Player
  - [ ] Enemies
    - [ ] Small Pleb
    - [ ] Pleb
    - [ ] Snake
    - [ ] Pleb Deluxe
    - [ ] Pleb Mine
    - [ ] Pleb Burst
  - [ ] Obstacles
    - [ ] Astroid
    - [ ] Satellite Orbit
    - [ ] Falling Ships
- [ ] Rank System
  - [ ] Boss HP
`;

export const DemoTasksArtMd = `
## Visuals and Sound

### **[ ] Game Object Art** 🎨

- [ ] Assets Resolution Rules
- ⚠️[ ] Player _(Hit-box & Sprite Size)_
- [ ] Enemies
  - [ ] Small Pleb
  - [ ] Pleb
  - [ ] Snake
  - [ ] Pleb Deluxe
  - [ ] Pleb Mine
  - [ ] Player Killer
  - [ ] Pleb Burst
- [ ] Bosses
  - [ ] Level C
- [ ] Environment
  - [ ] Astroid
    - [ ] Variants (Space Junk, etc.)
  - [ ] Satellite Orbit
  - [ ] Falling Ship
  - [ ] ...
- [ ] Other
  - [ ] Power Ups
  - [ ] Player Shots
    - [ ] Bomb
      - [ ] Explosion
    - [ ] Missile
    - ⚠️[ ] Main Shot _(Upgrade System finish)_
    - [ ] Side Shot
  - [ ] Enemy Shots
    - [ ] Main Shot
    - [✅] Mine
  - [ ] ...

### **[ ] Visual Effects ✨**

- [ ] Explosion
  - ? _[ ] Variants?_
- [ ] Smoke
  - ? _[ ] Variants?_
- [ ] Damage / Hit Indication
  - [✅] Player
  - [✅] Enemy
  - [ ] Boss
  - [ ] Drone
  - [ ] Environment
- [✅] Enemy Upgrade Drop Indicator

### ⚠️ **[ ] Animation** 🎬 _(Art Assets)_

- [ ] Common Animations Loader
- [ ] Player
  - [ ] Spawn after death
- [ ] Enemies
- [ ] Boss
- [ ] Visual Effects
- [ ] Environment
- [ ] Power Ups, Shots, etc
  - [✅] Mine

### **[ ] Game UI** 💻

- [ ] Color Pallet
- [ ] Font
  - [ ] Font V2
  - [ ] Font V3
  - [ ] Colors
- [ ] Logo
  - [ ] Game
  - [ ] Studio
- ⚠️[ ] Layout _(Color Pallet)_
  - ⚠️[ ] Splash Screen _(Logos)_
  - [ ] Menus
    - ? _[ ] Video Background_
    - [ ] Start (Demo)
    - [ ] Settings
    - [ ] How to Play
    - ⚠️[ ] High Score _(Scoring System)_
  - [ ] Game Over
  - [ ] Level Clear
  - ⚠️[ ] High Score Entry _(Scoring System)_
- [ ] In Game Overlay
- [ ] In Game Menu
- [ ] Settings Menu
  - ⚠️[ ] Keyboard Controls _(Logic)_
  - ⚠️[ ] Music / SFX Volume Sliders _(Logic)_

### **[ ] Sound** 🔊

- [ ] Volume Balance
- [ ] Music
  - [ ] Level C
  - [ ] Level C Boss
  - ? _[ ] Menu_
- [ ] SFX
  - [ ] Explosion
  - [ ] Hit
  - [ ] Spawn
  - [ ] Shot
  - [ ] Menu
  - [ ] Controller Connected
  - [ ] Power Up
  - [ ] ...

### **[ ] Blender Background** 🐵

- [ ] Assets
  - [ ] Stars
  - [ ] Planets
  - [ ] Ships, Satellites, etc..
- 🔎 [ ] Object Movement
  - [ ] Constant Rotation
- 🔎 [ ] Materials
  - [ ] Elevation (uv map?)
- [ ] Object Extrusion
- 🔎 [ ] World Background
- 🔎 [ ] Lighting
  - [ ] World
  - [ ] Stars
  - ? 🔎 _[ ] Ray Tracing_
- 🔎 [ ] Rendering _(evee or cycles?)_
- [ ] Times
  - [ ] Level Up / Down Timings
    - [ ] Down
    - [ ] Up
    - [ ] Speed ups
  - [✅] Level Duration: 2:30
  - [✅] Boss Duration: _(2 min)_
  - [✅] Total Duration: 4:40
`;

export const playTestDemoMd = `
### **Level C** 🪐

- [ ] Background V1

### **System**

- [ ] Upgrade System Main Shot _(Size and shape)_
- [ ] ...

### **Game Object Art V1** 🎨

- [ ] Assets Resolution Rules
- ⚠️[ ] Player _(Hit-box & Sprite Size)_
- [ ] Enemies
  - [ ] Small Pleb _(pink alien)_
  - [ ] Pleb _(Green window ship)_
  - [ ] Snake
  - [ ] Pleb Deluxe _(Yellow window ship with big aimed shot)_
  - [ ] Pleb Mine _(Yellow ship that spawns yellow mines)_
  - [ ] Player Killer _(Spawns when boss timer runs out)_
  - [ ] Pleb Burst _(Red window ship, bigger. wiggle, burst and spin shots)_
    - ? _[ ] Split to Multiple_
- [ ] Boss
- [ ] Environment
  - [ ] Astroid
    - ? _[ ] Variants (Space Junk, etc.)_
  - [ ] Satellite Orbit
  - [ ] Falling Ship
  - [ ] ...
- [ ] Other
  - [ ] Power Ups
    - [ ] Upgrade Drop
    - [ ] Health Drop _(Keep?)_
    - [ ] Bomb Refill
  - [ ] Player Shots
    - [ ] Bomb
      - [ ] Explosion _(update current animation)_
    - [ ] Missile
    - ⚠️[ ] Main Shot _(Upgrade finish)_
    - [ ] Side Shot
  - [ ] Enemy Shots
    - [ ] Main Shot
    - [ ] Aimed Shot
    - [ ] Missile
    - [ ] Laser
    - [✅] Mine
  - [ ] ...

### **Visual Effects ✨**

- [ ] Explosion
  - ? _[ ] Variants?_
- [ ] Smoke
  - ? _[ ] Variants?_
- [ ] Damage / Hit Indication
  - [✅] Player
  - [✅] Enemy
  - [ ] Boss
  - [ ] Drone 
  - [ ] Solid Objects
- [✅] Enemy Upgrade Drop Indicator

### ⚠️ **Animation** 🎬 _(Art Assets)_

- [ ] Player
  - [ ] Spawn after death
- [ ] Enemies
- [ ] Boss
- [ ] Visual Effects
- [ ] Environment
- [ ] Power Ups, Shots, etc
  - [✅] Mine

### **Game UI V1** 💻

- [ ] Color Pallet
- [ ] Font V2
  - [ ] Colors
- [ ] Logo V1
  - [ ] Game
  - [ ] Studio
- ⚠️[ ] Layout _(Color Pallet)_
  - ⚠️[ ] Splash Screen _(Logos)_
  - [ ] Menus
    - [ ] Start (Demo)
    - [ ] Settings
  - [ ] Game Over
  - [ ] Level Clear
- [ ] In Game Overlay
- [ ] In Game Menu
- [ ] Settings Menu
  - [ ] Keyboard Controls

### **Sound** 🔊

- [ ] Volume Balance
- [ ] Music
  - [ ] Level C
  - [ ] Level C Boss
- [ ] SFX
  - [ ] Explosion
  - [ ] Hit
  - [ ] Spawn
  - [ ] Shot
  - [ ] Menu
  - [ ] Controller Connected
  - [ ] Power Up
  - [ ] ...
`;
