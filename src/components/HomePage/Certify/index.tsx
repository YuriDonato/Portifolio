const Certify = () => {
  return (
    <section>
      <div className="container">
        <div className="row pt-2" id="certificacoes">
          <center>
            <h2 className="fw-bold">Certificações</h2>
          </center>
          <br />
          <div className="col-sm-12 col-md-6 col-lg-6 pt-5">
            <center>
              <img
                className="imgCertificado efeitoBlur"
                src="./img/declaracao-de-participacao/montagem de api de um restaurante.png"
                alt=""
              />
            </center>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 pt-5">
            <center>
              <img
                className="imgCertificado efeitoBlur"
                src="./img/declaracao-de-participacao/5-passos.png"
                alt=""
              />
            </center>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 pt-5 pb-3">
            <center>
              <img
                className="imgCertificado efeitoBlur"
                src="./img/declaracao-de-participacao/criando-portifolio.png"
                alt=""
              />
            </center>
          </div>
          <center>
            <button className="btn btn-secondary btn-maisinfo">
              <a className="botaoProxPagina" href="./html/certificados.html">
                + Certificações
              </a>
            </button>
          </center>
        </div>
        <hr className="linhaHorizontal" />
      </div>
    </section>
  )
}

export default Certify
