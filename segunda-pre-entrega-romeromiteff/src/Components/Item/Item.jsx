import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="row">
      <div className="col-6 mt-5">
        <img src={producto.imageUrl} className="img-card"/>
        <div className="card-body">
          <p className="nombre">{producto.titulo}</p>
          <p className="marca">{producto.marca}</p>
          <p className="cat">{producto.categoria}</p>
          <p className="precio">${producto.precio}</p>
        </div>
        <div>
          <Link to={`/item/${producto.id}`} className="ver-mas">
            Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
