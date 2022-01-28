function Character(name, strength, health){
    this.name = name
    this.strength = strength
    this.health = health
    this.elements = new UiElements(this.name)
}

function UiElements (name){
    this.attackBtn = document.querySelector(`.${name}-attack`)
    this.healthBar = document.querySelector(`.${name}-health span`)
    this.healBtn = document.querySelector(`.${name}-heal`)
    this.died = document.querySelector(`.${name}-died`)
    this.img = document.querySelector(`.${name}-image`)
}

Character.prototype.attack = function(opponent){

    if(opponent.health > 0){
        opponent.health -= this.strength
        opponent.elements.healthBar.style.width = `${opponent.health}%`
    }else{
        opponent.elements.healBtn.remove()
        opponent.elements.attackBtn.remove()
        opponent.elements.died.innerHTML = `${opponent.name} died`
        opponent.elements.img.style.filter = "grayscale()"
    }
}

Character.prototype.heal = function(){
    if(this.health < 100){
        this.health += 10
    }else if(this.health > 100){
        this.health = 100
    }
    this.elements.healthBar.style.width = `${this.health}%`
}



let spiderMan = new Character("spider-man", 10, 100)
let ironMan = new Character("iron-man", 10, 100)

spiderMan.elements.attackBtn.addEventListener("click",function(){
    spiderMan.attack(ironMan)
})
ironMan.elements.attackBtn.addEventListener("click",function(){
    ironMan.attack(spiderMan)
})
spiderMan.elements.healBtn.addEventListener("click",function(){
    spiderMan.heal()
})
ironMan.elements.healBtn.addEventListener("click",function(){
    ironMan.heal()
})

