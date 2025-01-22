const Derechos = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Roberto Carlos R. H. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          El diseño, contenido y cualquier material relacionado están protegidos por derechos de autor y no pueden ser reproducidos sin autorización previa.
        </p>
      </div>
    </footer>
  );
};

export default Derechos;
