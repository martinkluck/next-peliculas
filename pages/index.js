// Imports
import Head from "next/head";
import Link from "next/link";
import Base from "../layouts/base";
import axios from "axios";
import Pelicula from "../components/pelicula";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const pagina = query.pagina ? Number(query.pagina) : 1;
    const respuesta = await axios.get(
      `http://www.omdbapi.com/?apikey=af40e2f4&s=batman&page=${pagina}`
    );
    const peliculas = respuesta.data.Search;

    return { peliculas, pagina };
  }

  render() {
    return (
      <Base>
        <Head>
          <title>Movies!!</title>
        </Head>
        <div>
          <div className="peliculas">
            {this.props.peliculas.map(p => (
              <Pelicula {...p} />
            ))}
            <style jsx>{`
              .peliculas {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              }
            `}</style>
          </div>
          {this.renderPaginacion()}
        </div>
      </Base>
    );
  }

  renderPaginacion() {
    const anterior =
      this.props.pagina > 1 ? (
        <Link href={`/?pagina=${this.props.pagina - 1}`}>
          <a>Anterior</a>
        </Link>
      ) : null;

    return (
      <div className="control">
        {anterior}
        <Link href={`/?pagina=${this.props.pagina + 1}`}>
          <a>Siguiente</a>
        </Link>
        <style jsx>{`
          .control {
            text-align: center;
          }
          .control a {
            padding: 0 10px;
          }
        `}</style>
      </div>
    );
  }
}
