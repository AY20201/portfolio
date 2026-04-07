import React from "react";
import styles from '../styles.module.css'

import zenAscent from '../zen_ascent.png'
import mapGen from '../map_gen.png'
import golfSim from '../golf_sim.png'
import blocks from '../blocks.png'
import cardlocke from '../cardlocke.png'
import solarSystem from '../solar_system.png'
import cars from '../cars.png'
import paceCalc from '../pace_calc.png'
import runMapper from '../run_mapper.png'
import runMapperMobile from '../run_mapper_mobile.png'
import raytracing from '../raytracing.png'
import langingPg from '../landing_page.png'
import dsocial from '../dsocial.png'

export default function Homepage(){

    function ProjectItem({ imgSource, imgAlt, title, description, linkTitle, url, gitUrl }) {
        return(
            <div>
                <img src={imgSource} alt={imgAlt} className={styles.image}/>
                <div style={{width: "400px", marginTop: "10px"}}>
                    <b className={styles.descriptionHeader}>{title}</b>
                    {description}
                    <div style={{display: 'flex', gap: "15px", marginTop: "-10px"}}>
                        {url !== undefined && 
                            <a href={url} className={styles.descriptionText}>{linkTitle}</a>
                        }
                        {gitUrl !== undefined &&
                            <a href={gitUrl} className={styles.descriptionText}>link to Git</a>
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: "space-between", marginTop: '40px'}}>
                <div>
                    <div className={styles.header}><b>Project Portfolio</b></div>
                    <div className={styles.subHeader}>Alex Young</div>
                </div>
                <div style={{display: 'flex', gap: '10px', marginRight: '70px'}}>
                    <a href="mailto:alexmy2018@gmail.com" className={styles.linkText}>alexmy2018@gmail.com</a>
                    <a href="https://github.com/AY20201" className={styles.linkText}>https://github.com/AY20201</a>
                </div>
            </div>
            <div className={styles.sectionHeader}><b>Games</b></div>
            <div className={styles.contentRow}>
                <ProjectItem imgSource={golfSim} imgAlt={"Golf Simulator"} title={"Golf Simulator"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: June 2023 - April 2024<br/>
                    Languages and frameworks: C++, OpenGL<br/><br/>
                    This project was inspired by real golf simulators that require a club, ball, and large setup to use.
                    I wanted to create a similar experience on a computer where the user could control the movement of the club
                    with just their mouse. Development had three major stages: club movement, ball physics, and building the environment around
                    the player. The ball has realistic spin physics and can slice or hook depending on the player's input.
                    I created one hole with rough, fairway and a green, using batch rendering to display a large forest without hurting performance.
                    </p>}
                    gitUrl={"https://github.com/AY20201/golf-sim"}
                />
                <ProjectItem imgSource={zenAscent} imgAlt={"Zen Ascent"} title={"Zen Ascent"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: November 2021 - March 2023<br/>
                    Languages and frameworks: C++, OpenGL<br/><br/>
                    Zen Ascent was the first full game I developed with OpenGL and C++.
                    I learned most of my OpenGL and C++ skills while working on this project, which
                    includes PBR (physcially based rendering), bounding box collision detection,
                    and post processing effects like bloom and fog. The game is a 3D platformer, with the goal being
                    to reach the top of a tall tower with no checkpoints on the way up. I published the game on Itch.io
                    in August 2023.
                    </p>}
                    linkTitle={"link to Itch.io"}
                    url={"https://ay2020.itch.io/zen-ascent"}
                    gitUrl={"https://github.com/AY20201/Project2"}
                />
                <ProjectItem imgSource={raytracing} imgAlt={"Raytracing"} title={"Raytracing"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: March 2023 - June 2023<br/>
                    Languages and frameworks: C++, OpenGL<br/><br/>
                    This project was my first experiment with raytracing.
                    I started by rendering a collection of spheres that each had a single, non-reflective color.
                    I then worked to implement realistic reflections. Once satisfied with how the spheres looked,
                    I added support for ray-triangle collisions and eventually created a scene with a pool table
                    that had 16 spheres and a textured flat surface where the balls sit.
                    </p>}
                    linkTitle={"inspired by this Youtube video"}
                    url={"https://www.youtube.com/watch?v=Qz0KTGYJtUk"}
                />
            </div>
            <div className={styles.contentRow}>
                <ProjectItem imgSource={cardlocke} imgAlt={"Cardlocke (Pixel RPG)"} title={"Cardlocke (Pixel RPG)"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: February 2021 - June 2021<br/>
                    Languages and frameworks: Godot Engine<br/><br/>
                    This project was my first (and to this point only) experience with the Godot Engine. It 
                    is a pixel art RPG that is highly inspired by Pokemon, and I created all of the art by myself. 
                    Players engage in card game style battles during wild animal encounters or against NPCs. 
                    Players can enter buildings and engage in dialogue with NPCs. The scope of this project was huge, so I only created one town scene before 
                    moving to work on other things.
                    </p>}
                />
                <ProjectItem imgSource={mapGen} imgAlt={"Island Generator"} title={"Island Generator"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: May 2022 - July 2022<br/>
                    Languages and frameworks: Unity, C#<br/><br/>
                    Island Generator was a small project I developed in Unity to 
                    experiment with Perlin noise and procedural generation. The shape, size and colors of 
                    the island are controlled by adjusting sliders and values in a custom Unity editor component.
                    I originally left the island as a flat, 2D shape, but I realized it was possible to find the normals of each
                    pixel based on the heights of surrounding pixels, which me led to implement basic diffuse shading. 
                    </p>}
                />
                <ProjectItem imgSource={solarSystem} imgAlt={"Solar System"} title={"Solar System"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: June 2021 - August 2021<br/>
                    Languages and frameworks: Unity, C#<br/><br/>
                    I initially created this solar system simulation to experiment with procedural generation. I can make the
                    planets smaller, larger, or more or less bumpy and cratered by changing sliders in the Unity editor. I later
                    tried to give the planets oceans but did not get very far. Then, I implemented realistic gravity and a tool 
                    that predicts the orbits of the planets (line in red).
                    </p>}
                    linkTitle={"inspired by this Youtube video"}
                    url={"https://www.youtube.com/watch?v=lctXaT9pxA0"}
                    gitUrl={"https://github.com/AY20201/Solar-System"}
                />
            </div>
            <div className={styles.contentRow}>
                <ProjectItem imgSource={blocks} imgAlt={"Blocks"} title={"Blocks"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: August 2020 - October 2020<br/>
                    Languages and frameworks: Unity, C#<br/><br/>
                    Blocks was my first ever game development project. I was thirteen years old when I started working on it. It is 
                    a 3D platformer with a twist - the player can change the dimension they are traveling through in real time.
                    Changing to 2D helps the player solve puzzles and reach the end of each of the five levels in the game. I published
                    this project on Itch.io in October 2020.
                    </p>}
                    linkTitle={"link to Itch.io"}
                    url={"https://ay2020.itch.io/zen-ascent"}
                />
                <ProjectItem imgSource={cars} imgAlt={"Traffic Frenzy"} title={"Traffic Frenzy"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: October 2020 - December 2020<br/>
                    Languages and frameworks: Unity, C#<br/><br/>
                    I was still a beginner when I created Traffic Frenzy, an infinite runner style game that I published
                    on Itch.io and Google Play Store. The player drives a car down an infinite road against the flow of traffic and 
                    tries to survive as long as possible.
                    </p>}
                    linkTitle={"link to Itch.io"}
                    url={"https://ay2020.itch.io/zen-ascent"}
                />
            </div>
            <div className={styles.sectionHeader}><b>Web Applications</b></div>
            <div className={styles.contentRow}>
                <ProjectItem imgSource={runMapper} imgAlt={"Run Mapper"} title={"Run Mapper"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: October 2023 - November 2023<br/>
                    Languages and frameworks: React, Python<br/><br/>
                    I initially developed Run Mapper for the 2023 Congressional App Challenge. Through this project, I gained a much better understanding of React and learned
                    how to use Python for web development (with a Flask server). With Run Mapper, people can find
                    routes for running, biking or walking within a certain distance range on a map. The algorithm uses
                    a modified depth first search algorithm to find cycles in a graph. Follow the link to learn more about
                    the project and the development process.
                    </p>}
                    linkTitle={"link to webpage"}
                    url={"https://ay20201.github.io/running-routes/"}
                    gitUrl={"https://github.com/AY20201/running-routes"}
                />
                <ProjectItem imgSource={paceCalc} imgAlt={"Pace Calculator"} title={"Pace Calculator"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: April 2024 - June 2024<br/>
                    Languages and frameworks: React<br/><br/>
                    As a competitive runner, I often want to know what pace I ran in a race or training run, or how fast I would have to run to achieve a certain time.
                    This website finds split times for a number of distances (400m, 800m, 1 mile, etc) based on an 
                    inputed time, distance, and unit. It also uses a simple exponential formula to calculate equivalent times for different events based on a single race performance.
                    and allows the user to input custom split distances.
                    </p>}
                    linkTitle={"link to webpage"}
                    url={"https://ay20201.github.io/pace-calculator/"}
                    gitUrl={"https://github.com/AY20201/pace-calculator"}
                />
                <ProjectItem imgSource={langingPg} imgAlt={"Landing Page"} title={"Landing Page"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: June 2024<br/>
                    Languages and frameworks: React<br/><br/>
                    This page. I built it to showcase my projects and make them all accessable from just one place. Under each project
                    is its Github repository and store page/webpage if one of these exists. My email address and Github account are linked
                    in the top right.
                    </p>}
                    gitUrl={"https://github.com/AY20201/portfolio"}
                />
            </div>
            <div className={styles.sectionHeader}><b>Mobile Applications</b></div>
            <div className={styles.contentRow}>
                <ProjectItem imgSource={runMapperMobile} imgAlt={"Explorun"} title={"Explorun"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: December 2023 - April 2024<br/>
                    Languages and frameworks: React Native, Python<br/><br/>
                    I taught myself React Native to create this app, a mobile version of the Run Mapper website I developed in Fall 2023 and renamed to Explorun ("Explore-run").
                    I implemented new features including elevation data, favorited routes, and a marker that shows the user's location.
                    I consider this and Zen Ascent to be my two largest projects, and the two I am most proud of. I published this app on the App Store in 2025, though the 
                    app is no longer available because I have chosen not to renew my Apple Developer Account for 2026.
                    </p>}
                    gitUrl={"https://github.com/AY20201/explorun"}
                />
            </div>
            <div className={styles.contentRow}>
                <ProjectItem imgSource={dsocial} imgAlt={"DSocial"} title={"DSocial"} description={
                    <p className={styles.descriptionText}>
                    Development timeframe: December 2025 - January 2026<br/>
                    Languages and frameworks: React Native, Python, SQL<br/><br/>
                    I created DSocial as part of an application for the DALI lab at Dartmouth College, where I am currently an undergraduate. DSocial is a social media style platform
                    where users can set up groups with their friends or for other communities they have on campus. Users can post activities to these groups and other group members can
                    respond with a thumbs up or brief message through the iMessage app if interested. The app is designed to make planning low pressure activities like getting lunch
                    or going to the gym together easier. All group and user data is stored in several SQL tables in a MySQL database and accessed through a Python server. The app is secured
                    through Google OAuth sign-in. Follow the Github link and read the README file to learn more.
                    </p>}
                    gitUrl={"https://github.com/AY20201/college-app"}
                />
            </div>
            <div style={{marginBottom: '100px'}}></div>
        </div>
    )
}