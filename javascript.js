const items = document.querySelectorAll('.img');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  let active = 0;

  function loadShow() {
    let stt = 0;

    for (let i = 0; i < items.length; i++) {
      items[i].style.transform = 'scale(0.8)';
      items[i].style.opacity = '0';
      items[i].style.zIndex = '0';
      items[i].style.filter = 'blur(4px)';
    }

    items[active].style.transform = 'translateX(0) scale(1)';
    items[active].style.opacity = '1';
    items[active].style.zIndex = '1';
    items[active].style.filter = 'blur(0)';

    if (active > 0) {
      items[active - 1].style.transform = 'translateX(-120px) scale(0.8) rotateY(15deg)';
      items[active - 1].style.opacity = '0.6';
      items[active - 1].style.zIndex = '0';
    }

    if (active < items.length - 1) {
      items[active + 1].style.transform = 'translateX(120px) scale(0.8) rotateY(-15deg)';
      items[active + 1].style.opacity = '0.6';
      items[active + 1].style.zIndex = '0';
    }
  }

  next.onclick = function () {
    if (active < items.length - 1) {
      active++;
      loadShow();
    }
  };

  prev.onclick = function () {
    if (active > 0) {
      active--;
      loadShow();
    }
  };

  loadShow();

// Counter
document.addEventListener("DOMContentLoaded", () => {
  // text
  let visits = localStorage.getItem("visitCount");
  visits = visits === null ? 1 : parseInt(visits) + 1;
  localStorage.setItem("visitCount", visits);

  const counterElement = document.getElementById("visitor-counter");
  if (counterElement) {
    counterElement.textContent = "Besucheranzahl: " + visits;
  }

  // numbercounter
  let n = localStorage.getItem("on_load_counter");
  n = n === null ? 1 : parseInt(n) + 1;
  localStorage.setItem("on_load_counter", n);

  const nums = n.toString().split("").map(Number);
  const counterVisitor = document.getElementById("CounterVisitor");

  if (counterVisitor) {
    counterVisitor.innerHTML = "";
    nums.forEach(i => {
      counterVisitor.innerHTML += `<span class="counter-item">${i}</span>`;
    });
  }
});
