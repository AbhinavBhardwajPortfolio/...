const d=JSON.parse(localStorage.getItem('portfolioData'))||null;
fetch('data/data.json').then(r=>r.json()).then(def=>{
const x=d||def;
name.textContent=x.name;title.textContent=x.title;aboutText.textContent=x.about;
experience.innerHTML=x.experience.map(v=>`<div class='card'>${v}</div>`).join('');
skills.innerHTML=x.skills.map(v=>`<div class='card'>${v}</div>`).join('');
certs.innerHTML=x.certifications.map(v=>`<div class='card'>${v}</div>`).join('');
education.innerHTML=x.education.map(v=>`<div class='card'>${v}</div>`).join('');
});