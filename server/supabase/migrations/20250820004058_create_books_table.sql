create table if not exists livros (
  id uuid default gen_random_uuid() primary key,
  titulo text not null,
  autor text not null,
  paginas int not null,
  ano int not null
);
