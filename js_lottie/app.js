let animation_monster = document.getElementById("animation_monster");

let monster =
    bodymovin.loadAnimation({
          container: animation_monster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/dff00a73-342a-47fb-9eaa-53b14c27e6e3/0YZt1deQc3.json"
        });

animation_monster.addEventListener("click", function() {monster.playSegments([15, 35], true);});

animation_monster.addEventListener("mouseenter", function() {monster.playSegments([36, 71], true);});

animation_monster.addEventListener("mouseleave", function() {monster.playSegments([116, 207], true);});