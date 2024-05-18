import { Button, message } from "antd";
import { openModal } from "../../features/modal/modalSlive";
import { useDispatch } from "react-redux";
import { openModalDelete } from "../../features/modal/modalDeleteSilver";

// eslint-disable-next-line react/prop-types
const ButtonComponent = ({ children, data, tipe }) => {
  const dispatch = useDispatch()
  const showModal = async () => {
    if(tipe === 'update'){
      dispatch(openModal({data, title:'Editar usuario', txtButton: 'Editar usuario'}));
    }else{
      try {
        dispatch(openModalDelete(data))
      } catch (error) {
        message.error('Error al agregar el usuario');
      }
    }
  };
  return (
    <Button type="link" onClick={showModal} style={{ width: "0.5rem" }}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
