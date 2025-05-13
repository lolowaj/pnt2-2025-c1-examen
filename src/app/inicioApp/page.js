import Link from "next/link";

export default function CabeceraYPie() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header>
        <img src="https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg" alt="Logo de ORT" />
      </header>

      <main style={{ flex: 1 }}>
        <Link href="/peliculas">
          <h3>Hacer click acá para ver las películas</h3>
        </Link>
      </main>

      <footer>
        <h3>© 2025 ORT Argentina. Parcial de Lorena Wajchman.</h3>
      </footer>
    </div>
  );
}
