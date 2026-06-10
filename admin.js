const PASS=localStorage.getItem('adminPass')||'admin123';
let data=JSON.parse(localStorage.getItem('portfolioData'))||null;
function login(){if(document.getElementById('pw').value===PASS){app.style.display='block';load();}}
function load(){
if(!data){fetch('data/data.json').then(r=>r.json()).then(x=>{data=x;fill();});} else fill();
}
function fill(){name.value=data.name;title.value=data.title;about.value=data.about;}
function save(){data.name=name.value;data.title=title.value;data.about=about.value;localStorage.setItem('portfolioData',JSON.stringify(data));alert('Saved');}