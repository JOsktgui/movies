import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'antd';
import { TableStyled, ModalMovies } from 'components';
import Container, { Header, Title, Actions } from './styles';

const columns = (setInfoMovie, setShowModal, deleteMovie) => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      render: (_, __, index) => index + 1
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'F. Publicación',
      dataIndex: 'publication',
      key: 'publication',
      width: 160,
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      width: 160,
      render: text => {
        if (text === 'inactive') return 'Inactivo';

        return 'Activo';
      }
    },
    {
      title: 'Acciones',
      width: 80,
      render: (_, record) => {
        return (
          <Actions>
            <Icon
              type='edit'
              onClick={() => {
                setShowModal(true);
                setInfoMovie(record)
              }}
            />
            <Icon
              type='delete'
              onClick={() => deleteMovie(record.id)}
            />
          </Actions>
        )
      }
    }
  ]
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [infoMovie, setInfoMovie] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function getMovies() {
    window.db.collection('movies')
      .onSnapshot((querySnapshot) => {
        let movies = [];
        querySnapshot.forEach(doc => {
          movies.push({ ...doc.data(), id: doc.id });
        });

        setMovies(movies);
        setIsLoading(false);
      });
  }

  async function deleteMovie(id) {
    await window.db.collection('movies')
      .doc(id)
      .delete();
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Películas</Title>
        <Button
          type='primary'
          onClick={() => setShowModal(true)}
        >
          Nueva película
        </Button>
      </Header>
      <div>
        <TableStyled
          loading={isLoading}
          size='middle'
          rowKey={record => record.id}
          dataSource={movies}
          columns={columns(setInfoMovie, setShowModal, deleteMovie)}
        />
      </div>
      <ModalMovies
        data={infoMovie}
        setData={setInfoMovie}
        visible={showModal}
        setShowModal={setShowModal}
      />
    </Container>
  );
};

export default Home;
