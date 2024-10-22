import { faker } from '@faker-js/faker';
import {
  // Tabulator,
  DataGrid,
} from '../src';
import { columns } from './constants';

function App() {
  const rows = createRows();
  return (
    <section
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* <Tabulator /> */}
      <DataGrid rows={rows} columns={columns} rowHeight={80} />
    </section>
  );
}

function createRows() {
  const rows = [];

  for (let i = 0; i < 15; i++) {
    rows.push({
      id: `id_${i}`,
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      title: faker.person.prefix(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      street: faker.location.street(),
      zipCode: faker.location.zipCode(),
      date: faker.date.past().toLocaleDateString(),
      bs: faker.company.buzzPhrase(),
      catchPhrase: faker.company.catchPhrase(),
      companyName: faker.company.name(),
      words: faker.lorem.words(),
      sentence: faker.lorem.sentence(),
    });
  }

  return rows;
}

export default App;
