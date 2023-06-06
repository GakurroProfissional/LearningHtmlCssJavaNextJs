import Image from "next/image"

export default function Contato() {
  return (
    <>
      <section className="bodySection">

        <Image
          src='/images/imgBkWhtGeo.svg'
          alt="backg"
          className="bgSection"
          fill
        />

        <div className="gridContato" >

          <div className="borderContato">
            <h3>
              Linkedin
            </h3>

            <p>
              <a href="https://www.linkedin.com/in/viniciusrodriguesdearaujo" target="_blank" className="hoverLinkedin">
                <Image
                  src="/images/linkedin.svg"
                  alt="svgImg"
                  width={50}
                  height={50}
                />
              </a>
            </p>

          </div>

          <div className="borderContato">
            <h3>
              GitHub
            </h3>

            <p>
              <a href="https://github.com/GakurroProfissional/LearningHtmlCssJavaNextJs.git" target="_blank" className="hoverGitHub">
                <Image
                  src="/images/github.svg"
                  alt="svgImg"
                  width={50}
                  height={50}
                />
              </a>
            </p>
          </div>

          <div className="borderContato ">
            <h3>
              Celular
            </h3>

            <div className="hoverCel">

                <a href="tel:+5561982214165" target="_blank" className="bgCelular ">
                  (61) 9 8221 - 4165
              </a>

            </div>
          </div>

          <div className="borderContato ">
            <h3>
              Whatsapp
            </h3>


            <a href="https://wa.me/5561982214165" target="_blank" className="hoverWhats" >
              <Image
                src="/images/imgSvgWhats/inline/white/whatsInlineWhite.svg"
                alt="svgImg"
                className="imgWhats"
                width={150}
                height={50}
              />
            </a>

          </div>

        </div>
      </section>
    </>
  )
}
