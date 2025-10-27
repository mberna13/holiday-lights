// Holiday Lights toggle
if (!document.getElementById("holiday-lights-frame")) {
  const frame = document.createElement("div");
  frame.id = "holiday-lights-frame";
  document.body.appendChild(frame);

  const sides = ["top", "bottom", "left", "right"];
  sides.forEach(side => {
    const container = document.createElement("div");
    container.className = `holiday-lights ${side}`;
    for (let i = 0; i < 40; i++) {
      const bulb = document.createElement("span");
      bulb.className = "bulb";
      container.appendChild(bulb);
    }
    frame.appendChild(container);
  });
} else {
  document.getElementById("holiday-lights-frame").remove();
}

// Snow toggle
if (!document.getElementById("holiday-snow")) {
  const snowContainer = document.createElement("div");
  snowContainer.id = "holiday-snow";
  document.body.appendChild(snowContainer);

  // create flakes
  for (let i = 0; i < 50; i++) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.animationDuration = 5 + Math.random() * 10 + "s";
    flake.style.opacity = Math.random();
    flake.style.fontSize = 10 + Math.random() * 20 + "px";
    flake.innerHTML = "❄";
    snowContainer.appendChild(flake);
  }
} else {
  document.getElementById("holiday-snow").remove();
}
