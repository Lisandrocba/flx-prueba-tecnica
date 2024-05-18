import { Modal, Button, Col, Form, Input, Row, Select, InputNumber, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modal/modalSlive";
import useApi from "../../hooks/useApi";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const { Option } = Select;

// eslint-disable-next-line react/prop-types
const ModalComponent = () => {
  const {data, title, isOpen, txtButton} = useSelector(state=> state.modal)
  const [form] = Form.useForm();
  const {axiosRequest} = useApi()

  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const handleCancel = () => {
    dispatch(closeModal())
  };

  const handleSubmit = async (values) => {
    try {
      if(title === "Agregar usuario"){
        const newUser = { ...values, id: uuidv4() }
        await axiosRequest('post', 'http://localhost:4000/users', newUser)
        message.success('Usuario agregado exitosamente')
        await axiosRequest('get', 'http://localhost:4000/users')
      }else{
        await axiosRequest('put', `http://localhost:4000/users/${data.id}`, values)
        message.success('Usuario se modifico con exitosamente')
        await axiosRequest('get', 'http://localhost:4000/users')
      }
      handleCancel()
    } catch (error) {
      message.error('Error al agregar el usuario');
    }
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: "optional",
        }}
        requiredMark="optional"
        onFinish={handleSubmit}
      >
        <Row gutter={24}>
          <Col
            span={12}
            style={{
              textAlign: "right",
            }}
          >
            <Form.Item 
              label="Usuario"
              name="username"
              rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            >
              <Input placeholder="Nombre de usuario" />
            </Form.Item>
            <Form.Item 
              label="Nombre"
              name="name"
              rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            >
              <Input placeholder="Nombre del usuario" />
            </Form.Item>
            <Form.Item 
              label="Estado"
              name="status"
              rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            >
              <Select style={{textAlign: 'start'}} placeholder='Seleccione el estado'>
                <Option value='active'>Active</Option>
                <Option value='inactive'>Inactive</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: "right",
            }}
          >
            <Form.Item 
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Este campo es obligatorio' }, { type: 'email', message: 'Por favor, introduce un correo electrónico válido' }]}
            >
              <Input placeholder="Email de usuario" />
            </Form.Item>
            <Form.Item 
              label="Apellidos"
              name="lastname"
              rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            >
              <Input placeholder="Apellido del usuario" />
            </Form.Item>
            <Form.Item 
              label="Edad"
              name="age"
              rules={[{ required: true, message: 'Este campo es obligatorio' }, { type: 'number', min: 1, max: 120, message: 'Por favor, introduce una edad válida' }]}
            >
              <InputNumber min={1} max={120} placeholder="Edad del usuario" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Form.Item
            style={{
              display: "flex",
              justifyContent: "end",
              alignContent: "end",
              width: "100%",
              margin: "1rem",
            }}
          >
            <div>
              <Button htmlType="submit" type="primary">
                {txtButton}
              </Button>
            </div>
          </Form.Item>
        </Row>
      </Form>
    </Modal>
  );
};

export default ModalComponent;
