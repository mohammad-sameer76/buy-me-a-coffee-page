function copyText(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Address copied to clipboard!");
      });
    }

    // Auto-slide animation
    const slider = document.getElementById('cryptoSlider');
    let scrollAmount = 0;
    setInterval(() => {
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += 300;
      }
      slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);