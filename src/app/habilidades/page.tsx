import Image from "next/image"


export default function Habilidades() {
  return (
<section className="bodySection">
        <Image
          src='/images/imgBkWhtGeo.svg'
          alt="backg"
          className="bgSection"
          fill
        />

        <h2>
          Historia com a T.I.
        </h2>

        <div className="gridHistAll ">

          <div>
            <h3>Titulo não definido</h3>

            <p>
            Sou um <strong>desenvolvedor front end</strong> com 3 anos de experiência em <b>HTML, CSS, JavaScript, React e Bootstrap</b>. Tenho paixão por criar interfaces web dinâmicas e acessíveis que proporcionem uma ótima experiência ao usuário. <strong>Busco uma oportunidade de integrar uma equipe criativa e inovadora que valorize o aprendizado contínuo e a qualidade do código.</strong>
            </p>
            <br />
            <p>
            Liste as suas habilidades técnicas e ferramentas que você usa para desenvolver front end. Algumas habilidades essenciais para um desenvolvedor front end são: HTML, CSS, JavaScript, frameworks e bibliotecas (como React, Angular, Vue, jQuery), pré-processadores (como Sass, Less), ferramentas de design (como Photoshop, Figma, Sketch), ferramentas de teste (como Jest, Mocha, Jasmine), ferramentas de versionamento (como Git, GitHub), ferramentas de automação (como Gulp, Webpack), ferramentas de acessibilidade (como Lighthouse, axe) e ferramentas de SEO (como Google Analytics, SEMrush)
            </p>
<p>
Descreva as suas experiências de trabalho de forma eficaz e quantificável. Use verbos de ação para mostrar o que você fez em cada trabalho e quais foram os resultados. Inclua números e métricas sempre que possível para demonstrar o seu impacto2. Por exemplo:

Desenvolvi o front end de um site de e-commerce usando React e Bootstrap, seguindo as melhores práticas de design responsivo e acessibilidade. Aumentei a taxa de conversão em 15% e reduzi o tempo de carregamento em 50%.
</p>
          </div>


          <div>
            <h3>
              Noções de:
            </h3>

            <div className="gridHist histTI">

              <div className="flexHist shadowBox">
                <p>
                  React
                </p>
                <a href="https://react.dev/" target="_blank">
                  <Image
                    src="/images/react.svg"
                    alt="svgReact"
                    width={65}
                    height={65}
                  />
                </a>
              </div>

              <div className="flexHist shadowBox " >
                <p>
                  Next
                </p>
                <a href="https://nextjs.org/" target="_blank">
                  <Image

                    src="/images/next.svg"
                    alt="svgNext"
                    width={65}
                    height={65}
                  />
                </a>
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  Babel
                </p>
                <a href="https://babeljs.io/" target="_blank">
                  <Image
                    src="https://d33wubrfki0l68.cloudfront.net/377d727c8d878832f20e08939889a58bdff0b3f2/63787/img/babel.svg"
                    alt="imgBabel"
                    width={65}
                    height={65}
                  />
                </a>
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  Webpack
                </p>
                <a href="https://webpack.js.org/" target="_blank">
                  <Image
                    src="https://webpack.js.org/site-logo.c0e60df418e04f58.svg"
                    alt="imgWebpack"
                    height={65}
                    width={65}
                  />
                </a>
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  Node
                </p>
                <a href="https://nodejs.org/en" target="_blank">
                  <Image
                    src="https://nodejs.org/static/images/logo.svg"
                    alt="svgNode"
                    height={65}
                    width={65}
                  />
                </a>
              </div>



              <div className="flexHist shadowBox ">
                <p>
                  HTML 5
                </p>
                <a href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML" target="_blank">
                  <Image

                    src="/images/mozila.svg"
                    alt="svgMozila"
                    width={100}
                    height={50}
                  />
                </a>
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  CSS 3
                </p>
                <a href="https://www.developer.mozilla.org/en-US/" target="_blank">
                  <Image

                    src="/images/mozila.svg"
                    alt="svgMozila"
                    width={100}
                    height={50}
                  />
                </a>
              </div>


              <div className="flexHist shadowBox ">
                <p>
                  Jest
                </p>
                <div >
                  <a href="https://jestjs.io/pt-BR/">
                    <p className="jest">
                      JEST
                    </p>
                  </a>
                </div>
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  MongoDB
                </p>
                <a href="https://www.mongodb.com/" target="_blank">
                  <Image
                    src="/images/mongoDB.svg"
                    alt="svgMongo"
                    height={65}
                    width={65}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

      </section >
  )
}
