const html = document.documentElement;
html;
html.children;
const body = html.children[1];
body;

const ul = body.children[1];

const li = ul.nextElementSibling[2];
const li = ul.previousElementSibling[0];
