document.getElementById("fetch-btn").addEventListener("click", async () => {
  try {
    const response = await fetch("/api/coffeeShop");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const shops = await response.json();

    let output = "<h2>Available Coffee Shops</h2><ul>";
    shops.forEach((shop) => {
      output += `<li><strong>${shop.name}</strong> - ${shop.location} (Specialty: ${shop.specialty})</li>`;
    });
    output += "</ul>";

    // Set innerHTML
    document.getElementById("output").innerHTML = output;

    const outputContainer = document.getElementById("output-container");
    outputContainer.classList.toggle("show");
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("output").innerHTML =
      "<p style='color: red;'>Failed to load coffee shop data.</p>";
  }
});
