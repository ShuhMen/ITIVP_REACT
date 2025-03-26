import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Heading from './Heading'
import { Button, colors } from '@mui/material'

const backgroundStyle = {
  width: "100vw",
  backgroundImage: "url('assets/images/index1.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class="main-content intensive" style={backgroundStyle}>
            <Heading color="primary.white" title="ОНЛАЙН-КУРСЫ НОРВЕЖСКОГО ЯЗЫКА"></Heading>
            <a href="pages/cources.html" class="signup-button">НАШИ КУРСЫ</a>
        </div>
        <div class="study">
            <Heading title="НАШИ КУРСЫ"></Heading>
            <div class="study-forms">
                <div class="study-form" >
                    <img class="zoomable" src="assets/images/study-form1.jpg" alt="Team Member 1"/>
                    <h3>Летние интенсивные курсы</h3>
                    <p>Краткосрочный (2-3 месяца) курс норвежского языка, который проводится несколько раз в год для тех, кто нуждается в быстром и эффективном получении элементарных навыков общения.</p>
                    <p class="price">200.00 руб.</p>
                    <a href="pages/cources.html#intensive" class="more-info-btn">ПОДРОБНЕЕ</a>
                </div>
                <div class="study-form">
                    <img class="zoomable" src="assets/images/study-form2.jpg" alt="Team Member 2"/>
                    <h3>Индивидуальное обучение</h3>
                    <p>В случае если у Вас сложное расписание, посменный график работы, или просто желание заниматься один на один с преподавателем, мы можем предложить Вам индивидуальную форму обучения.</p>
                    <p class="price">300.00 руб.</p>
                    <Button class="more-info-btn" style={{ pointerEvents: "none", cursor: "default", backgroundColor: "grey"}} >НЕДОСТУПНО</Button>
                </div>                    
                <div class="study-form">
                    <img class="zoomable" src="assets/images/study-form3.jpg" alt="Team Member 3"/>
                    <h3>Обучение в группах по графику</h3>
                    <p>Самая доступная и популярная форма обучения в Школе. При обучении в группах используется фиксированное расписание занятий.</p>
                    <p class="price">150.00 руб.</p>
                    <a href="pages/cources.html#group" class="more-info-btn">ПОДРОБНЕЕ</a>
                </div>
            </div>
        </div>
  
        <div class="our-projects">
            <h2 class="projects-title">НАШИ ПРОЕКТЫ</h2>
            <div class="projects">
                <div class="project">
                    <img class="zoomable" src="assets/images/project1.webp" alt="Project 1"/>
                    <h3>Скандинавская книга</h3>
                </div>
                <div class="project">
                    <img class="zoomable" src="assets/images/project2.webp" alt="Project 2"/>
                    <h3>Nordic Blog</h3>
                </div>
                <div class="project">
                    <img class="zoomable" src="assets/images/project3.webp" alt="Project 3"/>
                    <h3>Большая книга Скандинавской мифологии. Обучение</h3>
                </div>
            </div>
        </div>
  </StrictMode>
)
