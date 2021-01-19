const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload(){
    
}

function setup(){
   var canvas = createCanvas(300,600)
   
   rain = new Rain(20,20)
    
}

function draw(){
    background("black")

    rain.display();
    drawSprites();
}   

