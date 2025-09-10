const catalogo = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" },
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
  ];
  
  
  const listarFilmesDeGenero = (genero) => {
    return catalogo.filter(filme => filme.genero === genero);
  };
  
 
  const gerarListaDeTitulos = (filmes) => {
    return filmes.map(filme => filme.titulo);
  };
  
  const gerarRelatorioDeFilmes = (anoMinimo) => {
    return catalogo
      .filter(filme => filme.ano >= anoMinimo)
      .map(filme => filme.titulo);
  };
  

  console.log("Filmes do gênero Ficção Científica:");
  console.log(listarFilmesDeGenero("Ficção Científica"));
  
  console.log("Lista de títulos dos filmes do gênero Ficção Científica:");
  console.log(gerarListaDeTitulos(listarFilmesDeGenero("Ficção Científica")));
  
  console.log("Relatório de filmes lançados a partir de 2000:");
  console.log(gerarRelatorioDeFilmes(2000));
  
  console.log("Relatório de filmes lançados a partir de 1990:");
  console.log(gerarRelatorioDeFilmes(1990));
  