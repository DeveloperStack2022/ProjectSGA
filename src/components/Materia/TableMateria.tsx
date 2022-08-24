import { Table, Stack, Button } from "react-bootstrap";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { MateriaEntity } from "../../types/types";

interface Props {
  materias: MateriaEntity[];
  loading: Boolean;
}
const TableMateriaComponent = ({ materias, loading }: Props) => {
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Username</th>
            <th>Password</th>
            <th>Perfil</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* !!false !false => true !!false =>  false !!true => true  */}
          {!loading ? (
            materias.map((item, key) => (
              <tr>
                <td>{key}</td>

                <td>****</td>
                <td>urlImage</td>
                <td>
                  <Stack direction="horizontal" gap={2} className="">
                    <Button className="mr-2" variant="danger" size="sm">
                      <HiOutlineTrash size="18px" />
                    </Button>
                    <Button variant="success" size="sm">
                      <HiOutlinePencil />
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))
          ) : (
            <h2>loading...</h2>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableMateriaComponent;
