document.addEventListener("DOMContentLoaded", () => {
  // Cari base path (repo name di GitHub Pages)
  const base = window.location.pathname.split("/")[1]; 
  const root = base ? `/${base}/` : "/";

  fetch(root + "partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("Gagal load header:", err));

  fetch(root + "partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Gagal load footer:", err));
});
