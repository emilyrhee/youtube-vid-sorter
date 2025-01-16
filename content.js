const observer = new MutationObserver(() => {
  const sortContainer = document.querySelector("#chips-content");
  if (sortContainer) {
    console.log("element found");
    observer.disconnect();

    const existingChip = document.querySelector('yt-chip-cloud-chip-renderer');
    if (existingChip) {
      console.log("cloned that shit");
      const clonedChip = existingChip.cloneNode(true);

      clonedChip.removeAttribute('selected');

      sortContainer.appendChild(clonedChip);
    } else {
      console.log("YouTube chip not found.");
    }
  } else {
    console.log("Sort container not found.");
  }
});

observer.observe(document.body, { childList: true, subtree: true });

