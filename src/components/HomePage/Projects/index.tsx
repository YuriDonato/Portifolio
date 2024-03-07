const Projects = () => {
  return (
    <div id="projetosPC">
      <center>
        <h2 className="fw-bold pt-3">Projetos</h2>
      </center>

      <div className="container section projeto1">
        <div className="section-img">
          <div className="containerProjeto">
            <a className="row centerProjeto">
              <img
                className="imgProjeto1 section-img-inner col-lg-6 imgProjeto"
                src="img/print-site/eldenring.png"
                alt=""
              />
              <div className=" section-body textoProjeto col-lg-6">
                <div className="section-text">
                  <h2>Website FanMade Elden Ring</h2>
                  <br />
                  <p>
                    Projeto com intuito de recriar a HomePage do jogo Elden
                    Ring.
                    <br />
                    <a
                      className="textoLink"
                      href="./html/projetos/projeto1.html"
                    >
                      Saiba mais
                    </a>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container section projeto2 ">
        <div className="section-img ultimoProjeto">
          <div className="containerProjeto">
            <a className="row centerProjeto">
              <img
                className=" section-img-inner col-lg-6 imgProjeto"
                src="img/print-site/clinicadonato.png"
                alt=""
              />
              <div className=" section-body textoProjeto col-lg-6">
                <div className="section-text">
                  <h2>Clinica Donato</h2>
                  <br />
                  <p>
                    Criando uma HomePage para uma clínica ficticia.
                    <br />
                    <a
                      className="textoLink"
                      href="./html/projetos/projeto2.html"
                    >
                      Saiba mais
                    </a>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <center>
          <button className="btn btn-secondary btn-maisinfo">
            <a className="botaoProxPagina" href="./html/projetos/mainpage.html">
              + Projetos
            </a>
          </button>
        </center>
        <hr className="linhaHorizontal"></hr>
      </div>
    </div>
  )
}

export default Projects
