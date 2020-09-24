const user = {
  username: 'Qusay',
  city: 'Amman',
  skills: {
    html: '80%',
    css: '80%',
    // js: ["VueJs", "ReactJs", "AngularJs"] // تستعمل المصفوفة مع الطريقة الاولى
    js: {
      frameone: 'VueJS',
      frametwo: 'ReactJS',
      framethree: 'AngularJS'
    }
  }
};

// const { username, city, skills: { html, css, js: { frameone: one, frametwo: two, framethree: three } } } = user;

// Without Destructuring Method
// function showMyInfo (user){
//   console.log(`My Name Is ${user.username}, and I Live In ${user.city}.`);
//   console.log(`My Html Skills Progress Is ${user.skills.html}, And CSS Is ${user.skills.css}.`);
//   console.log(`I Have Knowledge In JS Frameworks Like ${user.skills.js[0]}, ${user.skills.js[1]}, ${user.skills.js[2]}`);
// }


// With Destructuring Method
function showMyInfo ({ username, city, skills: { html, css, js: { frameone: one, frametwo: two, framethree: three } } }){
  console.log(`My Name Is ${username}, and I Live In ${city}.`);
  console.log(`My Html Skills Progress Is ${html}, And CSS Is ${css}.`);
  console.log(`I Have Knowledge In JS Frameworks Like ${one}, ${two}, ${three}`);
}
showMyInfo(user);