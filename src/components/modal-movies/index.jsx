import React from 'react';
import moment from 'moment';
import { Modal, DatePicker, Input, Select, Form } from 'antd';
import { FormItem } from './styles';

const { Option } = Select;

const ModalMovies = ({ visible, setShowModal, data, setData }) => {

  async function addMovie() {
    await window.db.collection('movies')
      .add({
        ...data,
        publication: data.publication.format('DD/MM/YYYY')
      });
  }

  async function updateMovie() {
    await window.db.collection('movies')
      .doc(data.id)
      .set({
        ...data,
        publication: moment.isMoment(data.publication) ?
          data.publication.format('DD/MM/YYYY') :
          data.publication
      });
  }

  function disableButton() {
    return data.publication && data.name && data.status;
  }

  return (
    <Modal
      title={data.id ? 'Editar película' : 'Nueva película'}
      okText={data.id ? 'Editar' : 'Guardar'}
      cancelText='Cancelar'
      visible={visible}
      okButtonProps={{ disabled: !disableButton() }}
      onCancel={() => setShowModal(false)}
      onOk={() => {
        if (data.id) {
          updateMovie()
        } else {
          addMovie()
        }

        setShowModal(false)
      }}
      afterClose={() => setData({})}
    >
      <Form>
        <FormItem label='Nombre de Película'>
          <Input
            placeholder='Nombre de Película'
            value={data.name}
            onChange={event => setData({ ...data, name: event.target.value })}
          />
        </FormItem>
        <FormItem label='Fecha de Publicación'>
          <DatePicker
            allowClear={false}
            value={data.publication ? moment(new Date(data.publication)) : undefined}
            placeholder='Fecha de Publicación'
            format='MM/DD/YYYY'
            onChange={date => {
              setData({ ...data, publication: date });
            }}
          />
        </FormItem>
        <FormItem label='Estado'>
          <Select
            placeholder='Estado'
            value={data.status}
            onChange={status => setData({ ...data, status })}
          >
            <Option value='active'>Activo</Option>
            <Option value='inactive'>Inactivo</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default ModalMovies;
