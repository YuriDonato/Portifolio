const Footer = () => {
  return (
    <section id="rodape">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12">
            <h5>Siga-me</h5>
            <a className="textoLink" href="#linkedin"></a>
            <a className="textoLink" href="#codepen"></a>
            <a className="textoLink" href="#github"></a>

            <h3>
              <a className="textoLink" href="#sobre">
                Inicio
              </a>
            </h3>
            <h3>
              <a className="textoLink" href="#projetosPC">
                Projetos
              </a>
            </h3>
            <h3>
              <a className="textoLink" href="#experiencias">
                Experiencias
              </a>
            </h3>
            <h3>
              <a className="textoLink" href="#contato">
                Contato
              </a>
            </h3>

            <p className="rodape-copyright">© Yuri Vinicius 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
