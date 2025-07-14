document.getElementById("campus_diaries_main").innerHTML="<img class='poster' src='https://spark00001.github.io/images/campus_diaries.png' />";
document.getElementById("campus_diaries_story").innerHTML="<b class='story-title'><u>STORY:</u></b>&nbsp;Sameer Lodaya The series is yet another for college/hostel campus and it has the same potential like others The start was superb in energy,chemistry, huge campus,love story...<p id='campus_diaries_viewmore' onclick='campus_diaries_viewmore()'>...READ MORE</p>";
function campus_diaries_viewmore(){
document.getElementById("campus_diaries_story").innerHTML="<div class='story'><b class='story-title'><u>STORY:</u></b>&nbsp;Sameer Lodaya The series is yet another for college/hostel campus and it has the same potential like others The start was superb in energy,chemistry, huge campus,love story ,rage, but this all was upto the 4 th episode then the series lost its way and got dragged to 12 episodes with the same subject got looped..the humour is outstanding with bad words which were not sounding cheap or vulgar at all..the pace of the series was gripping till the 4 th episode then it became slow and over stretched.</div><p id='campus_diaries_viewmore' onclick='campus_diaries_viewless()'>...READ LESS</p>";
}
function campus_diaries_viewless(){
document.getElementById("campus_diaries_story").innerHTML="<b class='story-title'><u>STORY:</u></b>&nbsp;Sameer Lodaya The series is yet another for college/hostel campus and it has the same potential like others The start was superb in energy,chemistry, huge campus,love story...<p id='campus_diaries_viewmore' onclick='campus_diaries_viewmore()'>...READ MORE</p>";
}
function campus_diaries_trailer(){
document.getElementById("campus_diaries_main").innerHTML="<iframe class='player' src='https://www.youtube-nocookie.com/embed/UMlB6WYjJU8?si=E3FLubEi8BvAAYPT' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>";
}
function campus_diaries_watch(){
document.getElementById("campus_diaries_main").innerHTML="<img class='poster' src='https://spark00001.github.io/images/campus_diaries.png' />";
}
