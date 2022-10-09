var render = function (template, node) {
    node.innerHTML = template;
};

var template = `
<div id="navbar">
        <img id='logo' src='static/StarflixLogo.png'>
        <ul id="navlinks">
            <li>Home</li>
            <li>My Movies</li>
            <li>Account</li>
        </ul>

        <div id='hamburger'>
            <div class='burger_bar'></div>
            <div class='burger_bar'></div>
            <div class='burger_bar'></div>
        </div>
</div>

<div id='dropdown_menu'>
    <ul>
        <li onclick='mobileLinkClick()'>Home</li>
        <li onclick='mobileLinkClick()'>My Movies</li>
        <li onclick='mobileLinkClick()'>Account</li>
    </ul>
</div>



<div id="master_flex">
    <div id="hero">

        <h2 class='layer welcome_message' data-speed='0' id='welcome_name'>Welcome Back!</h2>
    
        <div class='layer' data-speed='.5' id='luke_container'>
            <img id='luke' src="/static/luke2.png">
            <div class='bubble bubble-bottom-left'>The movie with the most 'likes' earns a medal!</div>
        </div>
        
        <img id='sun1' class='layer' data-speed='3.5' src="/static/sun1.png">
        <img id='sun2' class='layer' data-speed='3' src="/static/sun2.png">
        <img id='vader' class='layer' data-speed='1' src='/static/vader2.png'>
        <img id='chewy' class='layer' data-speed='2.2' src='/static/chewy2.png'>
        <img id='yoda' class='layer' data-speed='2' src='/static/yoda2.png'>
    
        <!-- <video id="hero_video" poster='/static/p01y6s01.jpg' type="video/mp4" autoplay loop>
            <source src="/static/videoplayback.mp4">
        </video>
        <div>
            <img id='mute' class='mute_buttons' src='static/icons8-speaker-90.png'>
            <img id='muted' class='mute_buttons' src='static/icons8-mute-100.png'>
        </div> --> 
    </div>

    <div id=tile_container>

        <!-- <h2 class="section_title">The Classics</h2> -->
        <div class='movie_tile' id='ep4_tile'>
        
            <div class='medal' id='ep4_medal'>
                <div class='medal_round'></div>
                <div class='medal_tail1'></div>
                <div class='medal_tail2'></div>
            </div>
            <h3>A New Hope</h3>

            <div class="image_des_flex">
                
                <img class='cover_img' src='static/ep4.jpg'>
                <div>
                    <p>Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, 
                        a Wookiee and two droids to save the galaxy from the Empire's battle station.</p>
                    <br>
                    <p class='add_info'>Featuring: Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness, Peter Mayhew, David Prowse. </p>
                    <br>
                    <p class='add_info'>Directed By: George Lucas</p>
                </div>
            </div>
            
            <div class='vote_buttons'>
                <div class='counter_container'>
                    <svg onclick='inc_counter(event)' class='thumbs_up' class="like_animation" id='ep4_up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" id="id_101" style="stroke: rgb(26, 255, 0);"></path></svg>
                    <div class='counter left' id="ep4_up_counter"></div>
                </div>
                <div class='counter_container'>
                    <div class='counter' id="ep4_down_counter"></div>
                    <svg onclick='inc_counter(event)' class='thumbs_down' id='ep4_down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" id="id_101" style="stroke: rgb(255, 0, 0);"></path></svg>  
                </div>
            </div>
        </div>

        <div class='movie_tile' id='ep5_tile'>

            <div class='medal' id='ep5_medal'>
                <div class='medal_round'></div>
                <div class='medal_tail1'></div>
                <div class='medal_tail2'></div>
            </div>
            <h3>The Empire Strikes Back</h3>

            <div class="image_des_flex">
                
                <img class='cover_img' src='static/ep5.jpg'>
                <div>
                    <p>The Rebels are on the run.  Luke Skywalker trains to master the Force so he can confront the powerful Sith Lord, Darth Vader.</p>
                    <br>
                    <p class='add_info'>Featuring: Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness, Peter Mayhew, David Prowse. </p>
                    <br>
                    <p class='add_info'>Directed By: George Lucas</p>
                </div>
            </div>

            <div class='vote_buttons'>
                <div class='counter_container'>
                <svg onclick='inc_counter(event)' class='thumbs_up' class="like_animation" id='ep5_up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" id="id_101" style="stroke: rgb(26, 255, 0);"></path></svg>
                    <div class='counter left' id="ep5_up_counter"></div>
                </div>
                <div class='counter_container'>
                    <div class='counter' id="ep5_down_counter"></div>
                    <svg onclick='inc_counter(event)' class='thumbs_down' id='ep5_down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" id="id_101" style="stroke: rgb(255, 0, 0);"></path></svg>  
                </div>
            </div>
        </div>

        <div class='movie_tile' id='ep6_tile'>

            <div class='medal' id='ep6_medal'>
                <div class='medal_round'></div>
                <div class='medal_tail1'></div>
                <div class='medal_tail2'></div>
            </div>
            <h3>Return of the Jedi</h3>

            <div class="image_des_flex">
                
                <img class='cover_img' src='static/ep6.jpg'>
                <div>
                    <p>Luke Skywalker and friends travel to Tatooine to rescue their companion Han Solo from the vile Jabba the Hutt.</p>
                    <br>
                    <p class='add_info'>Featuring: Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness, Peter Mayhew, David Prowse. </p>
                    <br>
                    <p class='add_info'>Directed By: George Lucas</p>
                </div>
            </div>
        
            <div class='vote_buttons'>
                <div class='counter_container'>
                <svg onclick='inc_counter(event)' class='thumbs_up' class="like_animation" id='ep6_up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" id="id_101" style="stroke: rgb(26, 255, 0);"></path></svg>
                    <div class='counter left' id="ep6_up_counter"></div>
                </div>
                <div class='counter_container'>
                    <div class='counter' id="ep6_down_counter"></div>
                    <svg onclick='inc_counter(event)' class='thumbs_down' id='ep6_down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" id="id_101" style="stroke: rgb(255, 0, 0);"></path></svg>  
                </div>
            </div>
        </div>

    </div>

    <footer>
        <h6>Stowcode 2022</h6>
    </footer>
</div>
`;


render(template, document.querySelector('#main'));