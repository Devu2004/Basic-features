var teams = [
    { name: `CSK`, primary: `#F7D02C`, secondary: `#1B3A57` },
    { name: `MI`, primary: `#045093`, secondary: `#FFCC00` },
    { name: `RCB`, primary: `#DA1818`, secondary: `#101820` },
    { name: `KKR`, primary: `#3B2E5A`, secondary: `#D4AF37` },
    { name: `RR`, primary: `#EA1C7C`, secondary: `#1A237E` },
    { name: `DC`, primary: `#174EA6`, secondary: `#FF304F` },
    { name: `SRH`, primary: `#E74C3C`, secondary: `#1C1C1C` },
    { name: `GT`, primary: `#003049`, secondary: `#F1C40F` },
    { name: `LSG`, primary: `#1B9CFC`, secondary: `#FFDD57` },
    { name: `PBKS`, primary: `#D50000`, secondary: `#FAF9F6` },
  ];
var btn = document.querySelector(`button`);
var area = document.querySelector(`h1`);
btn.addEventListener(`click`, function() {
    var change = Math.floor(Math.random() * teams.length);
    let team = teams[change];
    area.innerHTML = team.name;
    area.style.color = team.primary;
    area.style.backgroundColor = team.secondary;
    
})
;