import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModalDelete } from "../../features/modal/modalDeleteSilver";
import useApi from "../../hooks/useApi";

const ModalDelete = () => {
  const { data, isOpenDelete } = useSelector((state) => state.modalDelete);
  const dispatch = useDispatch();
  const {axiosRequest} = useApi()

  const handleCancel = () => {
    dispatch(closeModalDelete());
  };

  const deleteUser = async () => {
    try {
      await axiosRequest("delete", `http://localhost:4000/users/${data.id}`);
      message.success("Usuario eliminado");
      await axiosRequest("get", "http://localhost:4000/users");

      handleCancel();
    } catch (error) {
      message.error("Error al eliminar el usuario");
    }
  };

  return (
    <Modal
      title="Eliminar usuario"
      open={isOpenDelete}
      onCancel={handleCancel}
      footer={null}
    >
      <p>Estas seguro que quiere eliminar el usuario <span style={{color: '#ff4d4f'}}>@{data.username}</span>?</p>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignContent: "end",
          width: "100%",
          marginTop: "1rem",
          borderTop: "1px solid #bfbdbd",
          paddingTop: "0.5rem",
        }}
      >
        <Button onClick={handleCancel} style={{ marginRight: "0.5rem" }}>
          Cancelar
        </Button>
        <Button type="primary" onClick={deleteUser} danger>
          Eliminar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
