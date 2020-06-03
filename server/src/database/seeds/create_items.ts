import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        {title: 'Lampadadas', image: 'lampadas.svg' },
        {title: 'Pilhas e Baterias', image: 'baterias.svg' },
        {title: 'Papeis e Papelao', image: 'papeis-papelao.svg' },
        {title: 'Residos Eletronicos', image: 'eletronicos.svg' },
        {title: 'Residos Organicos', image: 'organicos.svg' },
        {title: 'Oleo de cozinha', image: 'oleo.svg' },
    ]);
}