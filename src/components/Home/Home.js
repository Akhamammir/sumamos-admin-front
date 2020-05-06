import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Table } from 'rsuite';
import './Home.css';
const { Column, HeaderCell, Cell, Pagination } = Table;

const fakeData = [
  {
    id: 1,
    avartar: 'https://s3.amazonaws.com/uifaces/faces/twitter/justinrob/128.jpg',
    city: 'New Amieshire',
    email: 'Leora13@yahoo.com',
    firstName:
      'Ernest Schuppe SchuppeSchuppeSchuppeSchuppeSchuppeSchuppe Schuppe',
    lastName: 'Schuppe',
    street: 'Ratke Port',
    zipCode: '17026-3154',
    date: '2016-09-23T07:57:40.195Z',
    bs: 'global drive functionalities',
    catchPhrase: 'Intuitive impactful software',
    companyName: 'Lebsack - Nicolas',
    words: 'saepe et omnis',
    sentence: 'Quos aut sunt id nihil qui.',
    stars: 820,
    followers: 70,
  },
  {
    id: 2,
    avartar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/thaisselenator_/128.jpg',
    city: 'New Gust',
    email: 'Mose_Gerhold51@yahoo.com',
    firstName: 'Janis',
    lastName: 'Vandervort',
    street: 'Dickinson Keys',
    zipCode: '43767',
    date: '2017-03-06T09:59:12.551Z',
    bs: 'e-business maximize bandwidth',
    catchPhrase: 'De-engineered discrete secured line',
    companyName: 'Glover - Hermiston',
    words: 'deleniti dolor nihil',
    sentence: 'Illo quidem libero corporis laborum.',
    stars: 1200,
    followers: 170,
  },
  {
    id: 3,
    avartar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arpitnj/128.jpg',
    city: 'Lefflerstad',
    email: 'Frieda.Sauer61@gmail.com',
    firstName: 'Makenzie',
    lastName: 'Bode',
    street: 'Legros Divide',
    zipCode: '54812',
    date: '2016-12-08T13:44:26.557Z',
    bs: 'plug-and-play e-enable content',
    catchPhrase: 'Ergonomic 6th generation challenge',
    companyName: 'Williamson - Kassulke',
    words: 'quidem earum magnam',
    sentence: 'Nam qui perferendis ut rem vitae saepe.',
    stars: 610,
    followers: 170,
  },
  {
    id: 4,
    avartar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg',
    city: 'East Catalina',
    email: 'Eloisa.OHara@hotmail.com',
    firstName: 'Ciara',
    lastName: 'Towne',
    street: 'Schimmel Ramp',
    zipCode: '76315-2246',
    date: '2016-07-19T12:54:30.994Z',
    bs: 'extensible innovate e-business',
    catchPhrase: 'Upgradable local model',
    companyName: 'Hilpert, Eichmann and Brown',
    words: 'exercitationem rerum sit',
    sentence: 'Qui rerum ipsa atque qui.',
    stars: 5322,
    followers: 170,
  },
  {
    id: 5,
    avartar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/dev_essentials/128.jpg',
    city: 'Ritchieborough',
    email: 'Brisa46@hotmail.com',
    firstName: 'Suzanne',
    lastName: 'Wolff',
    street: 'Lemuel Radial',
    zipCode: '88870-3897',
    date: '2017-02-23T17:11:53.875Z',
    bs: 'back-end orchestrate networks',
    catchPhrase: 'Exclusive human-resource knowledge base',
    companyName: 'Mayer - Considine',
    words: 'voluptatum tempore at',
    sentence: 'Enim quia deleniti molestiae aut.',
    stars: 852,
    followers: 770,
  },
];
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLength: 10,
      loading: false,
      page: 1,
      value: '',
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeLength = this.handleChangeLength.bind(this);
  }
  handleChangePage(dataKey) {
    this.setState({
      page: dataKey,
    });
  }
  handleChangeLength(dataKey) {
    this.setState({
      page: 1,
      displayLength: dataKey,
    });
  }
  getData() {
    const { displayLength, page } = this.state;

    return fakeData.filter((v, i) => {
      const start = displayLength * (page - 1);
      const end = start + displayLength;
      return i >= start && i < end;
    });
  }
  render() {
    const data = this.getData();
    const { loading, displayLength, page } = this.state;

    return (
      <div>
        <span className='p-float-label'>
          <InputText
            id='float-input'
            type='text'
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <label htmlFor='float-input'>Buscar Registro</label>
        </span>

        <Table height={420} data={data} loading={loading}>
          <Column width={50} align='center' fixed>
            <HeaderCell>NOMBRE</HeaderCell>
            <Cell dataKey='id' />
          </Column>

          <Column width={100} fixed>
            <HeaderCell>SOLICITUD</HeaderCell>
            <Cell dataKey='firstName' />
          </Column>

          <Column width={100}>
            <HeaderCell>GENERO</HeaderCell>
            <Cell dataKey='lastName' />
          </Column>

          <Column width={200}>
            <HeaderCell>MUNICIPIO</HeaderCell>
            <Cell dataKey='city' />
          </Column>
          <Column width={200}>
            <HeaderCell>POBLADO</HeaderCell>
            <Cell dataKey='city' />
          </Column>
          <Column width={200}>
            <HeaderCell>COLONIA</HeaderCell>
            <Cell dataKey='city' />
          </Column>
          <Column width={200}>
            <HeaderCell>CALLE</HeaderCell>
            <Cell dataKey='city' />
          </Column>
          <Column width={200}>
            <HeaderCell>ESTADO</HeaderCell>
            <Cell dataKey='city' />
          </Column>

          <Column width={200} flexGrow={1}>
            <HeaderCell>ACCIONES</HeaderCell>
            {/* <Cell dataKey='companyName' /> */}
            <Cell>Ver Docs.</Cell>
          </Column>
        </Table>

        <Table.Pagination
          lengthMenu={[
            {
              value: 10,
              label: 10,
            },
            {
              value: 20,
              label: 20,
            },
          ]}
          activePage={page}
          displayLength={displayLength}
          total={fakeData.length}
          onChangePage={this.handleChangePage}
          onChangeLength={this.handleChangeLength}
        />
      </div>
    );
  }
}

export default Home;
