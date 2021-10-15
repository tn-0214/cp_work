'use  strict';
document.getElementById('links-btn').addEventListener('click' , links, false);

function links() {
    document.getElementById('top_line').classList.toggle('line_1');
    document.getElementById('mid_line').classList.toggle('line_2');
    document.getElementById('bot_line').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}